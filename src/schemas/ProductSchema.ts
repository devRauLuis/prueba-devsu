import { object, string, date } from 'yup';

const ProductSchema = object().shape({
  id: string()
    .required('El id del producto es requerido')
    .min(3, 'El id debe tener al menos 3 caracteres')
    .max(10, 'El id debe tener 10 caracteres o menos'),
  name: string()
    .required('El nombre del producto es requerido')
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(100, 'El nombre debe tener 100 caracteres o menos'),
  description: string()
    .required('La descripción del producto es requerida')
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(200, 'La descripción debe tener 200 caracteres o menos'),
  logo: string()
    .required('El logo del producto es requerido')
    .url('Debe ser una url válida'),
  date_release: date()
    .required('La fecha de liberación es requerida')
    .typeError('Debe especificar una fecha válida')
    .min(
      new Date(),
      'La fecha de liberación debe ser mayor o igual a la fecha actual',
    ),
  date_revision: date()
    .required(
      'Especifique una fecha de liberación para calcular la fecha de revisión',
    )
    .typeError('Debe especificar una fecha válida'),
});

export default ProductSchema;
