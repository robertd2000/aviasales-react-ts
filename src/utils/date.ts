export const getWeekDay = (dateStr: string) => {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const date = new Date(dateStr);

  return days[date.getDay()];
};
