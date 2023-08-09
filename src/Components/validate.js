export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "Username is Required";
  } else {
    delete errors.name;
  }

  if (!data.email) {
    errors.email = "Email is Required";
  } else if (!/\S+\.\S+/.test(data.email)) {
    errors.email = "Invalid Email Address";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is Required";
  } else if (data.password.length < 6) {
    errors.password = "Password should be atleast 6 character";
  } else {
    delete errors.password;
  }
  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your Password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Password's do not match";
  } else {
    delete errors.confirmPassword;
  }
  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "You should accept terms";
  }

  return errors;
};

