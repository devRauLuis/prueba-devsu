import { useField } from 'formik';
import Input from './Input';

interface FormikInputProps {
  name: string;
}

const FormikInput: React.FunctionComponent<FormikInputProps> = ({ name }) => {
  const [field, meta] = useField(name);

  return <Input {...field} error={meta.error} touched={meta.touched} />;
};

export default FormikInput;
