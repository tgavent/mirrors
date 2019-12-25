/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_bar"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Raleigh",
				locationID: "4487042",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "89d3e65924ef1452e10e06e6bb87cf71"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Raleigh",
				locationID: "4487042",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "89d3e65924ef1452e10e06e6bb87cf71"
			}
		},
		{
            module: "MMM-DailyPokemon",
            position: "bottom_right",
            config: {
                updateInterval: 600000,
                minPoke: 4,
                maxPoke: 151,
                grayscale: false,
                showType: true,
                language: "en",
                genera: true, 
                gbaMode: true,            
                nameSize: 26            
            }
		},
		{
			module: "MMM-AVStock",
			position: "top_left", //"bottom_bar" is better for `mode:ticker`
			config: {
			  apiKey : "YRLOVRAEMF6779KLU", // https://www.alphavantage.co/
			  timeFormat: "YYYY-MM-DD HH:mm:ss",
			  symbols : ["^IXIC", "aapl", "GOOGL", "TSLA"],
			  alias: ["NASDAQ", "APPLE", "GOOGLE", "TESLA"], //Easy name of each symbol. When you use `alias`, the number of symbols and alias should be the same. If value is null or "", symbol string will be used by default.
			  tickerDuration: 60, // Ticker will be cycled once per this second.
			  chartDays: 90, //For `mode:series`, how much daily data will be taken. (max. 90)
			  poolInterval : 1000*15, // (Changed in ver 1.1.0) - Only For Premium Account
			  mode : "table", // "table", "ticker", "series"
			  decimals: 4, // number o decimals for all values including decimals (prices, price changes, change%...)
			  candleSticks : true, //show candle sticks if mode is Series
			  coloredCandles : true, //colored bars: red and green for negative and positive candles
			  premiumAccount: false, // To change poolInterval, set this to true - Only For Premium Account
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
