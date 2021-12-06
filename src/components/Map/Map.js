import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Map.css";


function Map(props) {

  const dispatch = useDispatch();

  // let lat = props.store.geocode.results[0].geometry.location.lat;
  // let lng = props.store.geocode.results[0].geometry.location.lng;

  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [url, setUrl] = useState(``);

  // let url = `https://www.google.com/maps/embed/v1/view?key=${props.store.key}&center=${lat},${lng}&zoom=20&maptype=satellite`;

  const address = {
    houseNumber: 2808,
    street: 'Terrace',
    streetType: 'Dr',
    city: 'Burnsville',
    State: 'MN'
  };

  useEffect(() => {
    dispatch({
      type: 'GET_GEOCODE',
      payload: address
    });
    dispatch({
      type: 'GET_KEY',
    });
  }, [dispatch]);

  const getGeocode = (() => {
    setLat(props.store.geocode.results[0].geometry.location.lat);
    setLng(props.store.geocode.results[0].geometry.location.lng);
    setUrl(`https://www.google.com/maps/embed/v1/view?key=${props.store.key}&center=${lat},${lng}&zoom=20&maptype=satellite`);
  });

  return (
    <div className="row w-100">
      <iframe
        title="unique title"
        width="100%"
        height="600"
        frameBorder="0"
        src={url}
        allowFullScreen>
      </iframe>
      <button onClick={getGeocode}>geocode</button>
    </div>
  );
}

export default connect(mapStoreToProps)(Map);