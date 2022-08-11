import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./InputLabel.module.scss";

const InputLabel = (props) => {
  const { name, ...restProps } = props;
  return (
    <label>
    <Field name={name}>
      {({ field, form, meta }) => {
        const inputClasses = cx(styles.input,  {
          [styles.invalid] : meta.error && meta.touched
        })
        return <input {...field} className={inputClasses} {...restProps}/>;
      }}
    </Field>
    <ErrorMessage name={name} component="div" className={styles.error} />
  </label>
  );
};

export default InputLabel;