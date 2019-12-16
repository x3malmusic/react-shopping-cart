export const validation = (type, value) => {
  switch (type) {
    case "name":
      return validateName(value);
    case "address":
      return validateAddress(value);
    case "phone":
      return validatePhone(value);
    case "email":
      return validateEmail(value);
    default:
      return;
  }
};

const validateName = name => {
  if (name.length) {
    if (name.length < 2) {
      return {
        type: "name",
        text: "name cannot be shorter than 2 symbols"
      };
    } else
      return {
        type: "name",
        text: ""
      };
  } else
    return {
      type: "name",
      text: "enter your name"
    };
};

const validateAddress = address => {
  if (address.length) {
    if (address.length < 10) {
      return {
        type: "address",
        text: "type at least 10 characters"
      };
    } else
      return {
        type: "address",
        text: ""
      };
  } else
    return {
      type: "address",
      text: "enter your address"
    };
};

const validatePhone = phone => {
  if (phone.length) {
    let number = /^\d{10}$/;
    if (!phone.match(number)) {
      return {
        type: "phone",
        text: "type at least 10 digits"
      };
    } else
      return {
        type: "phone",
        text: ""
      };
  } else
    return {
      type: "phone",
      text: "enter your phone"
    };
};

const validateEmail = email => {
  if (email.length) {
    if (!email.includes("@")) {
      return {
        type: "email",
        text: "enter a valid email"
      };
    } else
      return {
        type: "email",
        text: ""
      };
  } else
    return {
      type: "email",
      text: "enter your email"
    };
};
