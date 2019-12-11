/* Magic Mirror Config Sample
*
* By Michael Teeuw http://michaelteeuw.nl
* MIT Licensed.
*/
var config = {
	"port": 8080,
	"language": "en",
	"timeFormat": 12,
	"units": "imperial",
	"modules": [
		{
			"module": "alert"
		},
		{
			"module": "updatenotification",
			"position": "top_bar"
		},
		{
			"module": "clock",
			"position": "top_left"
		},
		{
			"module": "calendar",
			"header": "Calendars",
			"position": "top_left",
			"config": {
				"calendars": [
					{
						"symbol": "gift",
						"url": "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					},
					{
						"symbol": "coffee",
						"url": "webcal://p53-calendars.icloud.com/published/2/NjY1MTU5MjgzNjY1MTU5MjP_qikTNPvlQ7mMlhJrd3mLs7W0jRJmZVIkwfqqefGHNa74CAmFE2uCjCZenJh42mDKJPYJiq1jsX2NKDpFEow"
					},
					{
						"symbol": "home",
						"url": "https://calendar.google.com/calendar/ical/theepps2020%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			"module": "DailyXKCD",
			"position": "bottom_left",
			"config": {
				"invertColors": true,
				"showTitle": true,
				"showAltText": false
			}
		},
		{
			"disabled": true,
			"module": "currentweather",
			"position": "top_right",
			"config": {
				"location": "High Point",
				"locationID": "4471025",
				"appid": "1ba4ede85c78e8ad67947fd8f56b72df"
			}
		},
		{
			"disabled": true,
			"module": "weatherforecast",
			"header": "Weather Forecast",
			"position": "top_right",
			"config": {
				"location": "High Point",
				"locationID": "4471025",
				"appid": "1ba4ede85c78e8ad67947fd8f56b72df"
			}
		},
		{
			"disabled": true,
			"module": "newsfeed",
			"position": "bottom_right",
			"config": {
				"feeds": [
					{
						"title": "New York Times",
						"url": "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				"showSourceTitle": true,
				"showPublishDate": true
			}
		},
		{
			  module: "MMM-DarkSkyForecast",
  			  header: "Weather",
  			  position: "top_right",
  			  classes: "default everyone",
  			  disabled: false,
  		          config: {
			    apikey: "37565135474b3fb6f2bdc105d6db5a50",
    			    latitude: "36.022096",
			    longitude: "-79.959460",      
			    iconset: "2c",
 			    concise: false,
			    forecastLayout: "tiled",
			    units: "us"
			  }
		},
		{
			"disabled": false,
    			"module": "MMM-NFL",
    			"position": "bottom_right",
    			"config": {
				"colored": true,
				"helmets": true,
				"focus_on": [
				"ARI","CAR","SF"
				]
          		 }
		},
		{
			"module": "MMM-Admin-Interface"
		},
		{
			
			"module": "MMM-DailyDilbert",
			"header": "",
			"position": "bottom_left",
			"config": {
				"updateInterval": 3600000
			}
		},
{
    disabled: true,
    module: 'MMM-RAIN-RADAR',
    position: 'bottom_right',
    config: {
        useHeader: false, // true if you want a header
        lat: "36.022096", // Latitude
        lon: "-79.959460", // Longitude
        area: 'NC', // US State
        zoomLevel: 9,
        mapType: 0, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
        color: 5, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
        snow: 1,
        smoothing: 1,
        opacity: 98,
        fastAnimation: 0,
        coverage: 0,
        darkTheme: 0,
        UTCtime: 0,
        legend: 1,
        legendMin: 1, //set legend to 1 if you want legendMin to show
        animate: 1,
        updateOnWarning: 1, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
        updateInterval: 5 * 60 * 1000, // number of milliseconds. change 5 to 60 and it will update each 10 minutes
    }
},
		{
			"module": "MMM-Carousel",
			"header": "",
			"config": {
				"transitionInterval": 30000,
				"ignoreModules": [],
				"mode": "positional",
				"bottom_left": {
					"enabled": true,
					"ignoreModules": []
				},
				"bottom_right": {
					"enabled": false,
					"ignoreModules": []
				}
			}
		}
	],
	"address": "0.0.0.0",
	"port": "8080",
	"ipWhitelist": [
		"127.0.0.1",
		"::ffff:127.0.0.1",
		"::1",
		"::ffff:192.168.1.1/120",
		"192.168.1.205",
		"192.168.1.64",
		"192.168.1.51",
		"192.168.1.5"	

]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/ 
if (typeof module !== 'undefined') {module.exports = config;}
