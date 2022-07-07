import React, { useEffect } from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import EmailSchema from "../../schema/EmailSchema";

import scroll from "./NewsletterImages/scrollUp-icon.png";
import whatsapp from "./NewsletterImages/whatsapp-icon.png";

import "./style.css";
import { boolean } from "yup";

export interface IFormikValues {
  emailNewsletter: string;
}

const initialValues: IFormikValues = {
  emailNewsletter: "",
};

const Newsletter = () => {
  return (
    <div className="footer-newsletter">
      <div className="footer-newsletter-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5599999999999"
          target="_blank"
          title="WhatsApp"
          rel="noreferrer noopener"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </div>

      <div className="footer-newsletter-scrollUp">
        <i
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          className="footer-newsletter-scrollUp-icon"
        >
          <img src={scroll} alt="ScrollUp" />
        </i>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={EmailSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-newsletter">
              <div className="form-newsletter-input">
                <label htmlFor="emailNewsletter">ASSINE NOSSA NEWSLETTER</label>
                <Field
                  id="emailNewsletter"
                  name="emailNewsletter"
                  placeholder="Seu e-mail"
                  className={
                    errors.emailNewsletter &&
                    touched.emailNewsletter &&
                    "invalid"
                  }
                />
              </div>

              <ErrorMessage
                component="span"
                name="emailNewsletter"
                className="form-invalid-feedback-newsletter"
              />
              <div className="form-newsletter-submit">
                <button type="submit">ENVIAR</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { Newsletter };
