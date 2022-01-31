import React from 'react'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1IjoiZmNvbmRvcmkxIiwiYSI6ImNrejFpZjVmdDFtMGwycHAxa25tYzVmNnEifQ.dqxVeYC37yRKL4ehJ1JvMA';

class Maps extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 37,
			lng: -95,
			zoom: 3.5,
		};
	}

	componentDidMount() {
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/fcondori1/ckyzxc0r0000315mj1nxytmi2',
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom,
		});
	}

	render() {
		return (
			<div>
				<div
					ref={(e) => (this.mapContainer = e)}
					style={{ width: '100%', height: '100vh' }}
				/>
			</div>
		);
	}
}

export default Maps;
