const stopsList = [
  { value: "all", text: "Все" },
  { value: 0, text: "Без пересадок" },
  { value: 1, text: "1 пересадка" },
  { value: 2, text: "2 пересадки" },
  { value: 3, text: "3 пересадки" }
];

interface IProps {
  currency: string;
  handleCheck: (e: any) => void;
  chooseCurrency: (c: string) => void;
}

export const Filter = ({ currency, handleCheck, chooseCurrency }: IProps) => {
  return (
    <div className="card filter">
      <div className="filter-currency">
        <h2>Валюта</h2>
        <button
          className={`rub ${currency === "RUB" && "active"}`}
          onClick={() => chooseCurrency("RUB")}
        >
          RUB
        </button>
        <button
          className={`usd ${currency === "USD" && "active"}`}
          onClick={() => chooseCurrency("USD")}
        >
          USD
        </button>
        <button
          className={`eur ${currency === "EUR" && "active"}`}
          onClick={() => chooseCurrency("EUR")}
        >
          EUR
        </button>
      </div>
      <div className="filter-stops">
        <fieldset>
          <legend>
            <h2>Количество пересадок</h2>
          </legend>
          <div>
            {stopsList.map((item) => (
              <div className="form-group" key={item.value}>
                <input
                  type="checkbox"
                  id={item.value.toString()}
                  name={item.text}
                  value={item.value}
                  onChange={handleCheck}
                />
                <label htmlFor={item.value.toString()}>{item.text}</label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};
