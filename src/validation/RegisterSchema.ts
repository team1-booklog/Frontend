import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^[a-z0-9]{4,16}$/,
      '4-16자의 영문 소문자 또는 영문+숫자로 입력해 주세요.'
    )
    .required('아이디는 필수입니다.'),
  password: yup
    .string()
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      '영문+숫자로 입력해 주세요.'
    )
    .required('비밀번호는 필수입니다.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호 재확인이 필요합니다.'),
})
