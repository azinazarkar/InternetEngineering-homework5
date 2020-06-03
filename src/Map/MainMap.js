import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from '@material-ui/core/Grid';
const AnyReactComponent = ({ text }) => <div>{text}</div>;



function SimpleMap (props) {

	const [point, setPoint] = useState({});

	const zoom = 11;

	const handleChange = ({ lat, lng }) => {
		setPoint({ lat, lng })
		props.locationHandleChange({[props.field.name] : { lat, lng } }, props.ind)
	};

	return (
		<Grid container justify="center"
		style={{
					margin : "3px" ,
					height : "250px",
					boarder : "2px",
					margin : "2px"
			}}>

			<div style={{ height: '200px', width: '200px'}}>
			<p>
				{props.field.title}
			</p>
				<GoogleMapReact
						options={{ fullscreenControl: false }}
						onClick = {handleChange}
						bootstrapURLKeys={{ key: "AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"  }}
						defaultCenter={{
							lat: 35.6892,
							lng: 51.3890,
						}}
						defaultZoom={zoom}
					>
						{point.lng && (
							<div
								style={{
									height: 10,
									width: 10,
									borderRadius: 10,
									backgroundColor: 'black',
								}}
								lat={point.lat}
								lng={point.lng}
							/>
						)}
					</GoogleMapReact>

			</div>
		</Grid>
	);


}

export default SimpleMap;