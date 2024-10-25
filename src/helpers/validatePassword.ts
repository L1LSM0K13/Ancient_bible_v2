export default function validatePassword(password: any | string) {
  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
  return regex.test(password);
}
/**
 * Regex ensures that the password:
 *
 * Is at least 8 characters long
 * Contains at least one upper and lower case letter
 * Contains at least one digit and one special character
 */
