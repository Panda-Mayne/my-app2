import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({ archStyles, setCurrentStyle, selectedLocation }) => {
  const locations = archStyles.flatMap(archStyle => archStyle.placesArray)
  const singleLocation = locations.filter(location => location.marker.lat === selectedLocation)
  const singleArchstyle = archStyles.length === 1;
 if(selectedLocation) {
   return (
     <div className="sidebar">
       <h1 className="header">ARCHIT</h1>
       <h2>{singleLocation[0].placeName}</h2>
       <h3>{singleLocation[0].style}</h3>
       <p>{singleLocation[0].address}</p>
       <p>{singleLocation[0].erected}</p>
       <p>{singleLocation[0].description}</p>
     </div>
   )
 }
  return (
    <div className="sidebar">
      <div className="logo-wrapper">
      <a href="/" className="logo">ARCHIT</a>
      </div>
      {/* <div className="style-intro">
        <p className="filter-text">select a style to filter</p>
      </div> */}
      {singleArchstyle && (
        <div className="container_style">
          <button className="back_btn" onClick={() => setCurrentStyle(undefined)}>Styles</button>
          <img className="arch_detail_img" src={archStyles[0].image} alt={archStyles[0].image} />
          <h2 className="style_name">{archStyles[0].styleName}</h2>
          <p className="time_frame">{archStyles[0].timeFrame}</p>
          <div className="single-divider"></div>
          <p className="style-description">{archStyles[0].description}</p>
       </div>
       ) }{" "}
       <div className="buttons-scroll_wrapper">
      {!singleArchstyle && archStyles.map((archStyle) => {
        return (
          <div key={archStyle.styleName}>
            <button className="styles__btn" 
              onClick={() => setCurrentStyle(archStyle.styleName)}>
                <div className="style_btn_img_wrapper">
                <img className="style_btn_img" src={archStyle.image} alt={archStyle.image} />
                </div>
                <div className="style_btn_text">
              {archStyle.styleName}
              </div>
            </button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Sidebar;
