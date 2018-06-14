import React from 'react';
import "./style.css";
import {
  withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
  } from "react-google-maps";

// gather other componets
//import otherComponent from "../otherComponent";

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 28.5111659, lng: -81.3805053 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 28.5111659, lng: -81.3805053 }} />}
  </GoogleMap>
))


export default Map;