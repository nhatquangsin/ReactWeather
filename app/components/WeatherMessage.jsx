var React = require('react');

var WeatherMessage = ({temp, location}) => {
    var TempC = (temp - 32)/1.8;
    TempC = Math.round(TempC);
    return (
        <h3 className="text-center">It's {temp}F and {TempC}C in {location}</h3>
    );
};

module.exports = WeatherMessage;