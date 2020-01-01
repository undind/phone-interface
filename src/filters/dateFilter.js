export default (value, format = "time") => {
  const options = {};

  if (format.includes("time")) {
    options.hour = "2-digit";
    options.minute = "2-digit";

    return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value))
  }

  const delta = new Date() - new Date(value);
  const difDelta = Math.round(delta / 1000 / 60 / 60/ 24);

  if (format.includes("date")) {
    if (difDelta < 1) {
      options.weekday = 'short';
      options.hour = "2-digit";
      options.minute = "2-digit";
    }

    options.day = '2-digit';  
    options.month = 'long';
    options.year = 'numeric';
  }
  
  return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
}
