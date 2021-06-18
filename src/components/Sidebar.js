import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({ archStyles, setCurrentStyle, selectedLocation }) => {
  const locations = archStyles.flatMap(archStyle => archStyle.placesArray)
  const singleLocation = locations.filter(location => location.marker.lat === selectedLocation)
 if(selectedLocation) {
   return (
     <div className="sidebar">
       <h1 className="header">Location</h1>
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
      <h1 className="header">Architectural Styles</h1>
      {archStyles.length === 1 && ( 
        <div className="container_style">
          <button className="back_btn" onClick={() => setCurrentStyle(undefined)}>Back</button>
          <h2 className="style_name">{archStyles[0].styleName}</h2>
          <img className="arch_detail_img" src={archStyles[0].image} alt={archStyles[0].image} />
          <p className="time_frame">{archStyles[0].timeFrame}</p>
          <p className="description">{archStyles[0].description}</p>
       </div>
       ) }{" "}
       <div className="scroll_wrapper">
      {archStyles.length !== 1 && archStyles.map((archStyle) => {
        console.log(archStyle);
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
