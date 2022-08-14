import React from "react";
import { Field, ErrorMessage } from "formik";
import cx from "classnames";
import styles from "./RadioLabel.module.scss";

const RadioLabel = (props) => {
  const {
    name,
    value,
    content: { p, span },
    ...restProps
  } = props;
  return (
    <div className={styles["radio-container"]}>
      <label className={styles["radio-label"]}>
        <div className={styles["radio-input-container"]}>
          <Field value={value}>
            {({ field, form, meta }) => {
              const inputClasses = cx(styles.input, {
                [styles.invalid]: meta.error && meta.touched,
              });
              return (
                <input
                  {...field}
                  name={name}
                  value={value}
                  type="radio"
                  className={inputClasses}
                  {...restProps}
                />
              );
            }}
          </Field>
        <div className={styles["content-container"]}>
          <p className={styles["radio-info"]}>{p}</p>
          <span className={styles["radio-description"]}>{span}</span>
        </div>
        </div>
        <ErrorMessage name={name} component="span" className={styles.error} />
      </label>
    </div>
  );
};

export default RadioLabel;
