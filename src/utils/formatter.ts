export function hourFormat(text = "") {
  const cleanText = text.replace(/\D+/g, "");
  let secondDigitHourMask = /\d/;

  if (cleanText.charAt(0) === "0" || cleanText.charAt(0) === "1") {
    secondDigitHourMask = /[0-9]/;
  }

  if (cleanText.charAt(0) === "2") {
    secondDigitHourMask = /[0123]/;
  }

  return [/[0-1-2]/, secondDigitHourMask, ":", /[0-5]/, /[0-9]/];
}
