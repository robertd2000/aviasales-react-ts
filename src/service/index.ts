export const getCurrenciesList = async () => {
  const res = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
  const json = await res.json();
  return await json;
};
