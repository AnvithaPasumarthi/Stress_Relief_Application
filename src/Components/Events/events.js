import React from "react";

const Events = ({ eventData, iconClick }) => {
  return (
    <>
      <div
        className="displayEachIconContainer"
        onClick={() =>
          iconClick(eventData.apiUrl, eventData.name.toLowerCase())
        }
      >
        <img
          id="icon"
          src={eventData.iconUrl}
          alt={eventData.name}
          height="50em"
          width="50em"
        />
        <p id="LabelsForIcons">{eventData.name}</p>
      </div>
    </>
  );
};

export default Events;