import React from "react";
import EventsLanding from "./EventsComponents/EventsLanding";
import Calendar from "./EventsComponents/Calendar";

export default function Events() {
  return (
    <>
      <EventsLanding />
      <div className="flex-grow">
        <Calendar />
      </div>
    </>
  );
}
