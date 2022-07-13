import React, { useEffect, useState } from "react";
import "./styles.css";
import { ITicket } from "./types";
import { Filter } from "./components/Filter";
import { Ticket } from "./components/Ticket";
import { getCurrenciesList } from "./service";
import { convert } from "./utils/format";

import data from "./data/data.json";

export default function App() {
  const [tickets, setTickets] = useState<ITicket[]>(data.tickets);
  const [filterStops, setFilerStops] = useState<string[]>([]);
  const [currency, setCurency] = useState<string>("RUB");
  const [currencies, setCurrencies] = useState<{ [key: string]: number }>({
    USD: 0,
    EUR: 0,
    RUB: 0
  });

  useEffect(() => {
    const getData = async () => {
      const { Valute } = await getCurrenciesList();
      setCurrencies({
        USD: Valute.USD.Value,
        EUR: Valute.EUR.Value,
        RUB: 1
      });
    };

    getData();
  }, []);

  const convertList = (item: ITicket) => {
    if (currencies.USD !== 0) {
      const base = currencies[currency];
      return { ...item, price: convert(item.price, base) };
    }
    return item;
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      setFilerStops([...filterStops, value]);
    } else {
      setFilerStops(filterStops.filter((i) => i !== value));
    }
  };

  const chooseCurrency = (c: string) => {
    setCurency(c);
  };

  return (
    <div className="App">
      <div className="filters">
        <Filter
          currency={currency}
          handleCheck={handleCheck}
          chooseCurrency={chooseCurrency}
        />
      </div>
      <div className="tickets">
        {tickets ? (
          tickets
            .filter((ticket) =>
              filterStops.length === 0 || filterStops.indexOf("all") > -1
                ? data.tickets
                : filterStops.indexOf(ticket.stops.toString()) > -1
            )
            .map(convertList)
            .sort((a, b) => a.price - b.price)
            .map((ticket) => (
              <Ticket key={ticket.price * Math.random() * 100} {...ticket} />
            ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
