import Product from '@/models/Product';
import Button from '@/components/common/buttons/Button';
import Input, { InputProps } from '../common/inputs/Input';
import { formatToYYYYMMDD } from '@/utils/date';
import useProductForm from './hooks/useProductForm';

interface ProductFormProps {
  product?: Product;
  submitForm: (product: Product) => void;
}

const ProductForm: React.FunctionComponent<ProductFormProps> = ({
  product,
  submitForm,
}) => {
  const {
    formState,
    handleChange,
    handleIdChange,
    handleDateReleaseChange,
    handleSubmit,
    touchField,
    formErrors,
    formTouched,
    idQuery,
    resetForm,
    allFieldsValid,
  } = useProductForm(product, submitForm);

  const fields: Array<InputProps & { name: keyof Product }> = [
    {
      name: 'id',
      label: 'ID',
      disabled: !!product,
      loading: idQuery.isRefetching,
      onChange: (e) => handleIdChange(e.target.value),
    },
    {
      name: 'name',
      label: 'Nombre',
    },
    {
      name: 'description',
      label: 'Descripción',
    },
    {
      name: 'logo',
      label: 'Logo',
    },

    {
      label: 'Fecha Liberación',
      name: 'date_release',
      value: formatToYYYYMMDD(formState.date_release ?? ''),
      onChange: (e) => {
        handleDateReleaseChange(e.target.value);
      },
      type: 'date',
      min: formatToYYYYMMDD(new Date()),
    },
    {
      label: 'Fecha Revisión',
      name: 'date_revision',
      value: formatToYYYYMMDD(formState.date_revision ?? ''),

      type: 'date',
      disabled: true,
      error: undefined,
      valid: undefined,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-x-md gap-y-sm">
        {fields.map(({ type, name, onChange, ...field }) => {
          return (
            <div>
              <Input
                key={name}
                name={name}
                value={formState[name]}
                error={formErrors[name]}
                valid={!formErrors[name]}
                touched={formTouched[name]}
                type={type}
                onChange={(e) =>
                  onChange ? onChange(e) : handleChange(name, e.target.value)
                }
                onBlur={() => touchField(name)}
                {...field}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-lg flex justify-center gap-lg">
        <Button onClick={resetForm}>Reiniciar</Button>
        <Button
          color="primary"
          type="submit"
          disabled={!allFieldsValid || (product && product === formState)}
        >
          Enviar
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
