const validationRules = {
  requiredField: {
    required: "Required"
  },
  optionalText: {
    pattern: {
      value: /^([ a-zA-Z0-9,#.-]+)/,
      message: "Text fields can only include letters and numbers"
    }
  },
  requiredText: {
    required: "Required",
    pattern: {
      value: /^([ a-zA-Z0-9,#.-]+)/,
      message: "Text fields can only include letters and numbers"
    }
  },
  email : {
    required: "Required",
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Invalid email address"
    }
  },
  password: {
    required: "Required",
    min: 10,
    pattern: {
      value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{10,}$/,
       message: "Incorrect password format. Please see our password guide next to the form."
     }
   }
}

export default validationRules
