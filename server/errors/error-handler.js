module.exports.userError = (error) => {
  if (error.code === 11000) {
    return {
      message: "Невалиден и-мејл",
    };
  }

  if (error.errors) {
    const errorMessage = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    for (const key in error.errors) {
      errorMessage[key] = error.errors[key].message;
    }

    return errorMessage;
  }

  return error.message;
};

module.exports.postError = (error) => {
  const errData = {};

  // check for errors and messages
  for (const errProp in error.errors) {
    errData[errProp] = error.errors[errProp].message;
  }

  return errData;
};
