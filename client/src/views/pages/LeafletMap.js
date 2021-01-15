import React from 'react';
import { Row,Col, Card,Skeleton } from 'antd';
import request from "services/network";
import pathName from "routes/pathName";
import BaseLayout from "views/frame/Base";
import { titleNameByPathUrl } from "utils";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
/* eslint-disable */

const pointerIcon = new L.Icon({
  iconUrl: '/assets/marker.svg',
  iconRetinaUrl: '/assets/marker.svg',
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [50, 50],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

const LocationMarker = () => {
  const [position, setPosition] = React.useState(null);
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker 
      position={position}
      icon={pointerIcon}
    >
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default (props) => {
  const { home } = pathName;
  const [state,setState] = React.useState({
    lat: 37.7749,
    lng: -122.4194,
    zoom: 13,
    data : []
  });

  const contentProps = {
    breadcrumb : [
      { text : 'Home', link : home },
      { text : titleNameByPathUrl(props.location.pathname) },
    ],
    title : titleNameByPathUrl(props.location.pathname),
    subtitle : 'This is Subtitle ' + titleNameByPathUrl(props.location.pathname),
  };

  const fetchData = async () => {
    try {
      const resp = await request.get('resource/wr8u-xric.json?$limit=1000&$$app_token=THKTQSSSfIoozEkK9vt2YriS4','https://data.sfgov.org/');
      setState(prev => ({...prev, data : resp }));
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  },[]);
  

  return(
    <BaseLayout {...contentProps}>
      <Row>
        <Col xs={24} md={24} lg={12} xl={12}>
          {
            state.data.length ? 
          <MapContainer 
            className="markercluster-map"
            center={[state.lat,state.lng]} 
            zoom={state.zoom} 
            maxZoom={18}
            style={{ width: 1200, height: 500}}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup>
              {
                state.data.map(x => (
                <Marker 
                  key={x.incident_number} 
                  position={[x.point.coordinates[1],x.point.coordinates[0]]}
                  icon={pointerIcon}
                >
                  <Popup>
                    <span>ADDRESS: {x['address']}, {x['city']} - {x['zip_code']}</span>
                    <br/>
                    <span>BATTALION: {x['battalion']}</span><br/>
                  </Popup>
                </Marker>))
              }
            </MarkerClusterGroup>
            <LocationMarker />
          </MapContainer>
           : <Skeleton />
          }
        </Col>
      </Row>
    </BaseLayout>
  )
}