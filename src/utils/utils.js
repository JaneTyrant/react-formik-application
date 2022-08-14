export const onSubmit = (values, formikBag) => {
  formikBag.resetForm();
};

export const radioLabel = {
  one: {
    p: "Join As a Buyer",
    span: "I am looking for a Name, Logo or Tagline for my business, brand or product.",
  },
  two: {
    p: "Join As a Creative or Marketplace Seller",
    span: "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
  },
};

export const signupInitialValues = {
  fname: "",
  lname: "",
  dname: "",
  email: "",
  password: "",
  confirm: "",
  picked: "",
};
