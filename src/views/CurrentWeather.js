import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { default as fetch } from 'isomorphic-fetch';

// Assets
import ThunderStormIcon from '../assets/Thunder.svg';
import RainIcon from '../assets/Rain.svg';
import SnowIcon from '../assets/Snow.svg';
import ClearIcon from '../assets/Clear.svg';
import CloudsIcon from '../assets/Clouds.svg';
import NoLocationFound from '../assets/NoLocation.svg';
import LoadingIcon from '../assets/Loading.svg';

class CurrentWeather extends Component {
	constructor(props) {
		super(props);

		this.state = ({
			isLoading: true,
			currentTemp: '',
			humidity: '',
			wind: '',
			windDirection: '',
			currentCondition: '',
			currentConditionDescription: '',
			weatherIcon: '',
			cityName: '',
			cityNotFound: '',
			country: ''
		});
	}

	componentDidMount() {
		fetch('/fns/search-location-weather')
			.then(res => res.json())
			.then(data => {
				if (data.data.cod === '404') {
					this.setState({
						isLoading: false,
						cityNotFound: '404',
					});
				} else {
					console.log(data.data);
					// Determine weather icon
					let weatherId = data.data.list[0].weather[0].id;

					if (weatherId <= 232) {
						this.setState({ weatherIcon: ThunderStormIcon });
					} else if (weatherId >= 300 && weatherId <= 531) {
						this.setState({ weatherIcon: RainIcon });
					} else if (weatherId >= 600 && weatherId <= 622) {
						this.setState({ weatherIcon: SnowIcon });
					} else if (weatherId === 800) {
						this.setState({ weatherIcon: ClearIcon });
					} else if (weatherId >= 801 && weatherId <= 804) {
						this.setState({ weatherIcon: CloudsIcon });
					}

					this.setState({
						isLoading: false,
						currentTemp: Math.round(data.data.list[0].main.temp) + '°',
						humidity: data.data.list[0].main.humidity + '%',
						wind: Math.round(data.data.list[0].wind.speed) + ' mph',
						windDirection: data.data.list[0].wind.deg,
						currentCondition: data.data.list[0].weather[0].main,
						currentConditionDescription: data.data.list[0].weather[0].description,
						cityName: data.data.city.name,
						country: data.data.city.country

						// currentTemp: Math.round(data.data.main.temp) + '°',
						// humidity: data.data.main.humidity + '%',
						// wind: Math.round(data.data.wind.speed) + ' mph',
						// windDirection: data.data.wind.deg,
						// currentCondition: data.data.weather[0].main,
						// currentConditionDescription: data.data.weather[0].description,
						// cityName: data.data.name,
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		const WeatherCardError = (
			<div className='weatherCardContainer'>
				<div className='weatherCardError'>
					<img src={NoLocationFound} alt='no location found' />

					<Link to='/'><button>Try Again</button></Link>
				</div>
			</div>
		);

		const cityNotFound = this.state.cityNotFound;
		console.log(cityNotFound);
		const WeatherConditions = (cityNotFound === 404) ? (

			<div> {WeatherCardError} </div>) : (

				<div>
					<div className='homeBtn'>
						<Link to='/'><button>Home</button></Link>
					</div>
					<div className='weatherCardContainer'>
						<div className='weatherCard'>
							<img src={this.state.weatherIcon} alt='Weather icon' />
							<div className='conditionsOverview'>
								<p>{this.state.currentTemp}</p>
								<p>{this.state.currentConditionDescription}</p>
							</div>
							<div className='conditionDetails'>
								<p>Humidity: {this.state.humidity} </p>
								<p>Wind Speed: {this.state.wind} </p>
							</div>
						</div>

						<h4> Location | {this.state.cityName} </h4>
						<h4> Country | {this.state.country} </h4>
					</div>
				</div>

			);

		const LoadingDisplay = (

			<div className='loading'>
				<img className='loadingIcon' src={LoadingIcon} alt='loading icon' />
			</div>

		);

		const CurrentWeatherCard = (
			this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
		);

		return (
			<div>
				{CurrentWeatherCard}
			</div>
		);
	}
}

export default CurrentWeather;