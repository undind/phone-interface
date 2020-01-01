export default (value, format = "time") => {
  const options = {};

  if (format.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
}
