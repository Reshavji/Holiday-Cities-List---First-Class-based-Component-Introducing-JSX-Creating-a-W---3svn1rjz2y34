
import React, { Component, useState } from "react";
import '../styles/App.css';
// City component to display each city name
class City extends Component {
  render() {
    const { cityName, index } = this.props;
    return <li key={`location${index + 1}`}>{cityName}</li>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.cityList = [
      { name: 'Goa', country: 'India' },
      { name: 'Amsterdam', country: 'Netherlands' },
      { name: 'New York', country: 'USA' },
      { name: 'Darjeeling', country: 'India' },
      { name: 'Tokyo', country: 'Japan' },
      { name: 'Lonavala', country: 'India' },
      { name: 'Brandenburg Gate', country: 'Germany' },
      { name: 'Reichstag Building', country: 'Germany' },
      { name: 'Museum Island', country: 'Germany' },
      { name: 'Munnar', country: 'India' },
      { name: 'Leh Ladakh', country: 'India' },
      { name: 'Goa', country: 'India' },
      { name: 'Agra', country: 'India' },
      { name: 'Dalhousie', country: 'India' },
      { name: 'Coorg', country: 'India' },
      { name: 'Rome', country: 'Italy' },
      { name: 'Milan', country: 'Italy' },
      { name: 'Venice', country: 'Italy' },
      { name: 'Varanasi', country: 'India' },
      { name: 'Jaipur', country: 'India' },
      { name: 'The Hofburg', country: 'Austria' },
      { name: 'Belvedere Palace', country: 'Austria' },
      { name: 'St. Stephen Cathedral', country: 'Austria' },
      { name: 'Kanha National Park', country: 'India' },
      { name: 'Amritsar', country: 'India' },
      { name: 'Mussoorie', country: 'India' },
      { name: 'Mount Abu', country: 'India' },
      { name: 'Tirupati', country: 'India' },
    ];
  }

  render() {
    const indianCities = this.cityList
      .filter(city => city.country === 'India')
      .map((city, index) => (
        <City key={`location${index + 1}`} cityName={city.name} index={index} />
      ));

    return (
      <div id="main">
        <h1>Indian Cities</h1>
        <ol>{indianCities}</ol>
      </div>
    );
  }
}


export default App;
