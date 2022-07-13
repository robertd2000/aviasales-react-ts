import { ITicket } from "../types";
import { TicketInfo } from "./TicketInfo";
import { TicketStops } from "./TicketStops";
import { getWeekDay } from "../utils/date";
import { formatStops } from "../utils/format";

export const Ticket = ({
  arrival_date,
  arrival_time,
  origin,
  origin_name,
  carrier,
  departure_date,
  departure_time,
  destination,
  destination_name,
  price,
  stops
}: ITicket) => {
  return (
    <div className="card">
      <div className="ticket-buy">
        <div className="tciket-logo">
          <img src={`https://pics.avs.io/200/100/${carrier}.png`} alt="" />
        </div>
        <div className="ticket-btn">
          <button>
            <h2>Купить за {price}</h2>
          </button>
        </div>
      </div>
      <div className="ticket-info">
        <TicketInfo
          time={departure_time}
          name={origin_name}
          shortName={origin}
          date={departure_date}
        />
        <TicketStops stops={stops} />
        <TicketInfo
          time={arrival_time}
          name={destination_name}
          shortName={destination}
          date={arrival_date}
        />
      </div>
    </div>
  );
};
