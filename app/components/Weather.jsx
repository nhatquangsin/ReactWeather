var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isloading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        
        this.setState({isloading:true});

        openWeatherMap.getTemp(location).then(function (temp){
            that.setState({
            location: location,
            temp: temp,
            isloading: false
        });
        }, function(errorMessage) {
            that.setState({isloading: false})
            alert(errorMessage);
        });
    },
    render: function(){
        var {isloading, temp, location} = this.state;
        
        function renderMessage (){
            if (isloading) {
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        };

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;