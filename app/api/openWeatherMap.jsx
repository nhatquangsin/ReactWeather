var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d3b4054bc245aee07e42af1af2bc37d8&units=imperial';

module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message)
            {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.response.data.message);
        });
    }
}