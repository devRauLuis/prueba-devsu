// useProductForm.ts
import { useState, useCallback, useEffect, useMemo } from 'react';
import { defaultProduct, initialErrors } from '../constants';
import { useVerifyIdExists } from '@/api/queries';
import debounce from 'lodash.debounce';
import ProductSchema from '../../../schemas/ProductSchema';
import Product from '@/models/Product';
import { ValidationError } from 'yup';
import { formatToYYYYMMDD } from '@/utils/date';
import dayjs from 'dayjs';

type FormErrors = Record<keyof Product, string>;
type FormTouched = Record<keyof Product, boolean>;

// Moved all the functionality here to minimize the components size,
// ideally (and with more time) this could be broken down further using a context or library like zustand or redux
// therefore having access to this state from different hooks without having to pass the states around

const useProductForm = (
  initialProduct: Partial<Product> = defaultProduct,
  submitForm: (product: Product) => void,
) => {
  const [formState, setFormState] = useState(initialProduct);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrors);
  const [formTouched, setFormTouched] = useState<FormTouched>(
    {} as FormTouched,
  );

  const { query: idQuery, setId } = useVerifyIdExists();

  const debouncedRefetch = debounce(idQuery.refetch, 700);

  const handleChange = useCallback((name: keyof Product, newValue: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }, []);

  const handleIdChange = useCallback(
    async (newValue: string) => {
      setId(newValue);
      try {
        await ProductSchema.validateAt('id', { id: newValue });
        await debouncedRefetch();
      } catch (error) {
        if (error instanceof ValidationError) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            id: (error as ValidationError)?.message,
          }));
        }
      }
      setFormState((prevState) => ({
        ...prevState,
        id: newValue,
      }));
      touchField('id');
    },
    [setId, debouncedRefetch],
  );

  const handleDateReleaseChange = (value: string) => {
    const revisionDate = dayjs(value).add(1, 'year');

    setFormState({
      ...formState,
      date_release: value,
      date_revision: formatToYYYYMMDD(revisionDate),
    });
  };

  const validateField = useCallback(
    async (name: keyof Product) => {
      try {
        await ProductSchema.validateAt(name, { [name]: formState[name] });
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      } catch (error: unknown) {
        if (error instanceof ValidationError) {
          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: (error as ValidationError)?.message,
          }));
        }
      }
    },
    [formState],
  );

  const touchField = useCallback(
    (name: keyof Product) => {
      setFormTouched((prevTouched) => ({
        ...prevTouched,
        [name]: true,
      }));
      validateField(name);
    },
    [validateField],
  );

  const validateForm = useCallback(async () => {
    try {
      await ProductSchema.validate(formState, { abortEarly: false });
      setFormErrors(initialErrors);
      return true;
    } catch (errors) {
      if (errors instanceof ValidationError) {
        const errorObj: typeof initialErrors = { ...initialErrors };
        errors.inner.forEach((error) => {
          if (error.path)
            errorObj[error.path as keyof typeof errorObj] = error.message;
        });
        setFormErrors(errorObj);
      }
      return false;
    }
  }, [formState]);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      if (await validateForm()) {
        submitForm(formState as Product);
      }
    },
    [formState, submitForm, validateForm],
  );

  useEffect(() => {
    if (initialProduct) setFormState(initialProduct);
  }, [initialProduct]);

  useEffect(() => {
    const idExists = idQuery.data;

    if (formTouched.id)
      if (idExists) {
        setFormErrors({
          ...formErrors,
          id: 'Id no está disponible',
        });
      } else {
        touchField('id');
      }
  }, [idQuery.data, idQuery.isFetching, formTouched.id]);

  const resetForm = () => {
    setFormState(initialProduct);
    setFormErrors(initialErrors);
    setFormTouched({} as Record<keyof Product, boolean>);
  };

  const allFieldsValid = useMemo(() => {
    try {
      const validForm = ProductSchema.isValidSync(formState);
      return validForm;
    } catch (error) {
      return false;
    }
  }, [formState]);

  return {
    formState,
    handleChange,
    handleIdChange,
    handleDateReleaseChange,
    handleSubmit,
    formErrors,
    formTouched,
    touchField,
    idQuery,
    resetForm,
    allFieldsValid,
  };
};

export default useProductForm;
