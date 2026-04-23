const ERROR_CODE: Record<string, string> = {
  "auth/email-already-in-use": "That mail already exists.",
  "auth/weak-password":
    "Password shoud be at least 6 characters.",
  "name/include-whitespace": "Name cannot contain spaces.",
  "email/include-whitespace":
    "E-mail cannot contain spaces.",
  "password/include-whitespace":
    "Password cannot contain spaces.",
  "auth/invalid-credential": "Mail or Password Invalid.",
};

export { ERROR_CODE };
