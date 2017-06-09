var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a React application build on React.</p>
            <p>This is some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                    -This was the Javascript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org">Open weather map</a>
                    -Open weather map to search for weather data by city name
                </li>
            </ul>
        </div>
    );
}

module.exports = About;