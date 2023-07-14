import { useField } from 'formik';
import Select from './Select';

interface FormikSelectProps {
  name: string;
  options: { value: string; label: string }[];
}

const FormikSelect: React.FunctionComponent<FormikSelectProps> = ({
  name,
  options,
}) => {
  const [field, meta] = useField(name);

  return (
    <Select
      {...field}
      error={meta.error}
      touched={meta.touched}
      options={options}
    />
  );
};

export default FormikSelect;
