import { getWeekDay } from "../utils/date";

interface IProps {
  time: string;
  name: string;
  date: string;
  shortName: string;
}

export const TicketInfo = ({ time, date, name, shortName }: IProps) => {
  return (
    <div className="ticket-origin">
      <h2 className="ticket-text ticket-time">{time}</h2>
      <h3 className="ticket-text">
        {shortName}, {name}
      </h3>
      <h4 className="ticket-text">
        {date}, {getWeekDay(date)}
      </h4>
    </div>
  );
};
