export const formatStops = (stops: number) => {
  if (stops === 0) return `${stops} пересадок`;
  if (stops === 1) return `${stops} пересадка`;
  return `${stops} пересадки`;
};

export const convert = (price: number, base: number): number => {
  return +(price / base).toFixed(2);
};
