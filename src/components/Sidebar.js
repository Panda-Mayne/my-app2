import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({ archStyles, setCurrentStyle, selectedLocation }) => {
  const locations = archStyles.flatMap((archStyle) => archStyle.placesArray);
  const singleLocation = locations.filter(
    (location) => location.marker.lat === selectedLocation
  );
  const singleArchstyle = archStyles.length === 1;
  if (selectedLocation) {
    return (
      <div className="sidebar">
        <div className="container_style">
          <img
            className="single-location-img"
            src={singleLocation[0].image}
            alt={singleLocation[0].image}
          />
          <h2>{singleLocation[0].placeName}</h2>
          <p>{singleLocation[0].style}</p>
          <p>{singleLocation[0].address}</p>
          <p>{singleLocation[0].erected}</p>
          <p className="style_description">{singleLocation[0].description}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
        {singleArchstyle && (
          <button
            className="back_btn"
            onClick={() => setCurrentStyle(undefined)}
          >
            Styles
          </button>
        )}

        <a href="/" className="logo">
          ARCHIT
        </a>
      </div>

      {singleArchstyle && (
        <div className="container_style">
          <img
            className="arch_detail_img"
            src={archStyles[0].image}
            alt={archStyles[0].image}
          />
          <h2 className="style_name">{archStyles[0].styleName}</h2>
          {archStyles[0]?.timeFrame && (
            <div className="time_frame">
              <img src="images/calendar.svg" />
              <p>{archStyles[0].timeFrame}</p>
            </div>
          )}
          <div className="single-divider"></div>
          <p className="style-description">{archStyles[0].description}</p>
        </div>
      )}

      <div className="buttons-scroll_wrapper">
        {!singleArchstyle &&
          archStyles.map((archStyle) => {
            return (
              <div key={archStyle.styleName}>
                <button
                  className="styles__btn"
                  onClick={() => setCurrentStyle(archStyle.styleName)}
                >
                  <div className="style_btn_img_wrapper">
                    <img
                      className="style_btn_img"
                      src={archStyle.image}
                      alt={archStyle.image}
                    />
                  </div>
                  <div className="style_btn_text">{archStyle.styleName}</div>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
