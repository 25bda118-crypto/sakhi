import {MapContainer,Marker,Popup,TileLayer} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LOCATIONS = {
  Vidyanagar: [15.3647, 75.124],
  "Gokul Road": [15.3695, 75.135],
  Keshwapur: [15.373, 75.109],
  "Old Hubballi": [15.347, 75.137],
};

export default function LocationMap({
  destination = "Vidyanagar",
  className = "h-64",
}) {

  const position = LOCATIONS[destination] || LOCATIONS.Vidyanagar;

  return (
    <div className={`w-full overflow-hidden rounded-2xl ${className}`}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Sakhi Delivery Area</p>

              <p className="mt-1 text-gray-600">{destination}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}