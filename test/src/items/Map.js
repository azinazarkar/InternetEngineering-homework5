import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Modal, Button } from 'antd';

const MapModal = (props) => {
  const [marker, setMarker] = useState({});

  const { onClose, visible, title } = props;
  return (
    <Modal
      onCancel={onClose}
      visible={visible}
      title={title}
      footer={[
        <Button
          key="submit"
          type="primary"
          disabled={!marker.lng}
          onClick={() => props.onSubmit({
            lat: marker.lat,
            long: marker.lng,
          })}
        >
          تایید
        </Button>,
      ]}
    >
      <div style={{ height: 400 }}>
        <GoogleMapReact
          options={{ fullscreenControl: false }}
          onClick={({ lat, lng }) => setMarker({ lat, lng })}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{
            lat: 35.715298,
            lng: 51.404343,
          }}
          defaultZoom={11}
        >
          {marker.lng && (
            <div
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: 'red',
              }}
              lat={marker.lat}
              lng={marker.lng}
            />
          )}
        </GoogleMapReact>
      </div>
    </Modal>
  );
};

export default MapModal;