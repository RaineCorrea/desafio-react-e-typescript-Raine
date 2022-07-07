import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import "./style.css";
import FormSchema from "schema/FormSchema";
import Institucional from "components/Institucional";

export interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  nascimento: string;
  telefone: string;
  instagram: string;
  tandc: boolean;
}

const initialValues: IFormikValues = {
  name: "",
  email: "",
  cpf: "",
  nascimento: "",
  telefone: "",
  instagram: "",
  tandc: false,
};

const CustomForm = () => {
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-col">
              <Institucional />

              <h1 className="form-wrapper__title">PREENCHA O FORMULÁRIO</h1>
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                placeholder="Seu nome completo"
                className={errors.name && touched.name && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="name"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="cpf">CPF</label>
              <Field
                id="cpf"
                name="cpf"
                placeholder="000 000 000 00"
                className={errors.cpf && touched.cpf && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="nascimento">Data de Nascimento</label>
              <Field
                id="nascimento"
                name="nascimento"
                placeholder="00 . 00 . 0000"
                className={errors.nascimento && touched.nascimento && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="nascimento"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="telefone">Telefone</label>
              <Field
                id="telefone"
                name="telefone"
                placeholder="(+00) 00000 0000"
                className={errors.telefone && touched.telefone && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="telefone"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-col">
              <label htmlFor="instagram">Instagram</label>
              <Field
                id="instagram"
                name="instagram"
                placeholder="@seuuser"
                className={errors.telefone && touched.telefone && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-col form-tandc">
              <label htmlFor="tandc">
                <span className="form-tandc__title">*</span>Declaro que li e
                aceito
              </label>
              <Field
                type="checkbox"
                id="tandc"
                name="tandc"
                className={errors.tandc && touched.tandc && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="tandc"
                className="form-invalid-feedback form-invalid-feedback-tandc"
                form-invalid-feedback-tandc
              />
            </div>
            <button type="submit">CADASTRE-SE</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CustomForm };
