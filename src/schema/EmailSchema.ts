import * as Yup from "yup";

import { IFormikValues } from "../components/Newsletter";

const formYup: Yup.SchemaOf<IFormikValues> = Yup.object().shape({
  emailNewsletter: Yup.string()
    .required("Campo obrigatório")
    .email("Email inválido"),
});

export default formYup;
