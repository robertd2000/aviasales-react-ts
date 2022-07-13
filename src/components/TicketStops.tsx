import { formatStops } from "../utils/format";

export const TicketStops = ({ stops }: { stops: number }) => {
  return (
    <div className="ticket-stops">
      {formatStops(stops)}
      <div className="arrow"></div>{" "}
      <img
        className="airplane-image"
        src="https://www.clipartmax.com/png/middle/145-1455213_boeing-737-outline-silhouette-plane-silhouette.png"
        alt=""
      />
    </div>
  );
};
