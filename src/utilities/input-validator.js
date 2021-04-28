// Regex validators
const emailRegex = RegExp(/^[\w-w.]+@([\w-]+\.)+[\w-]{2,4}$/)

// ---------------------------- Email

export const validateEmail = (emailCandidate) => {
  return emailRegex.test(emailCandidate)
    ? true
    : false;
}