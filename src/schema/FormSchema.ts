import { IFormikValues } from "components/CustomForm";
import * as Yup from "yup";

const cpfRegex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;

const nascimentoRegex =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const telefoneRegex =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;

const instagramRegex = /@(?:[\w][\.]{0,1})*[\w]/;

const formYup: Yup.SchemaOf<IFormikValues> = Yup.object().shape({
  name: Yup.string()
    .min(3, "O nome deve conter mais de 2 caracteres")
    .required("Campo obrigatório"),

  email: Yup.string().required("Campo obrigatório").email("Email inválido"),

  cpf: Yup.string()
    .matches(cpfRegex, "CPF invalido")
    .required("Campo obrigatório"),

  nascimento: Yup.string()
    .matches(nascimentoRegex, "Data de nascimento invalida")
    .required("Campo obrigatório"),

  telefone: Yup.string()
    .matches(telefoneRegex, "Numero de telefone invalido")
    .required("Campo obrigatório"),

  instagram: Yup.string()
    .matches(instagramRegex, "Instagram invalido")
    .required("Campo obrigatório"),

  tandc: Yup.boolean()
    .oneOf([true], "Campo obrigatorio")
    .required("Campo obrigatorio"),
});

export default formYup;
