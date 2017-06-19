import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

    renderWeather(cityData) {

        const { name } = cityData.city;

        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lng={lon}/>
                </td>
                <td>
                    <Chart
                        data={temps}
                        color='orange'
                        units="K"
                    />
                </td>
                <td>
                    <Chart
                        data={pressures}
                        color='green'
                        units="hPa"/>
                </td>
                <td>
                    <Chart
                        data={humidities}
                        color='blue'
                        units="%"
                    />
                </td>
            </tr>
        )
    }

    generateCityRows() {
        return this.props.weather.map(cityData => this.renderWeather(cityData));
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.generateCityRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList)
