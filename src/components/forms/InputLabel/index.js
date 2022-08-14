import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./InputLabel.module.scss";

const InputLabel = (props) => {
  const { name, inputClass = [], ...restProps } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(
            styles.input,
            inputClass.map((className) => styles[className]),
            {
              [styles.invalid]: meta.error && meta.touched,
              [styles.valid]: !meta.error && meta.value,
            },
          );
          return <input {...field} className={inputClasses} {...restProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={styles.error} />
    </label>
  );
};

export default InputLabel;
