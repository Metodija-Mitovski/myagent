const { Validator } = require("node-input-validator");

const createSchema = {
  firstName: "required|minLength:3|maxLength:15",
  lastName: "required|minLength:4|maxLength:15",
  email: "required|email",
  password: "required|minLength:8",
};

const updateSchema = {
  firstName: "minLength:3|maxLength:15",
  lastName: "minLength:4|maxLength:15",
  email: "email",
  password: "minLength:8",
};



const customMessages = {
  required: "полето е задолжително",
  "firstName.minLength":"минимум карактери-3",
  "firstName.maxLength":"максимум карактери-15",
  "lastName.minLength":"минимум карактери-4",
  "lastName.maxLength":"максимум карактери-15",
  "email.email":"невалиден и-мејл формат",
  "password.minLength":"лозинката мора да содржи минимум 8 карактери"
};

const validate = async (data, schema) => {
  let sch;

  switch (schema) {
    case "CREATE":
      sch = createSchema;
      break;

    case "UPDATE":
      sch = updateSchema;

     default:
      break;
  }
  let v = new Validator(data, sch,customMessages);
  let match = await v.check();

  if (!match) {
    throw v.errors;
  }
};

module.exports = validate;
