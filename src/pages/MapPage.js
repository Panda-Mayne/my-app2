import React from "react";
import Map from "../components/Map/Map";
import { Sidebar } from "../components/Sidebar";
import "./MapPage.scss";
import { useEffect, useState } from "react";
import archStyles from "../data/archstyles";

export const MapPage = () => {
  const [currentStyle, setCurrentStyle] = useState(undefined);
  const [filteredArchStyles, setFilteredArchStyles] = useState(archStyles);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (currentStyle !== undefined) {
      setFilteredArchStyles(
        archStyles.filter((archStyle) => archStyle.styleName === currentStyle)
      );
    } else {
      setFilteredArchStyles(archStyles);
    }
  }, [currentStyle]);

  return (
    <div className="wrapper">
      <Sidebar
        archStyles={filteredArchStyles}
        setCurrentStyle={setCurrentStyle}
        selectedLocation={selected}
      />
      <Map
        archStyles={filteredArchStyles}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};
