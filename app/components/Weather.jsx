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
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        };

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;