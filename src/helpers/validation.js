import * as yup from 'yup';

const validationSchemaAuthForm = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email'),
  password: yup
    .string('Enter your password')
    .min(3, 'Password should be of minimum 6 characters length'),
  name: yup
    .string('Enter your first name')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  lastName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  birthdate: yup
    .date()
    .min('1924-05-01', 'Too old!')
    .max('2021-03-01', 'Too young!'),
});
export default { validationSchemaAuthForm };
