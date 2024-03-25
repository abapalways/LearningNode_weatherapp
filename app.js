const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=a40c0ff5da213735cc22e5f9c5752980&query=37.8267,-122.4233&units=f'

// request({ url, json:true }, (error, response) => {

//      const data = response.body
//     console.log(data.current)

//     console.log(data.current.weather_descriptions[0] + '. It is currently '  + data.current.temperature + ' degrees out. It feels like ' + data.current.feelslike + ' out.')
// })



const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/new%20York.json?limit=1&access_token=pk.eyJ1IjoiYWJhcGFsd2F5cyIsImEiOiJjbHE0M3N6dXkwMzV2MmpwZTgwYmRodzFhIn0.m68aDbOqQmpU-14IdHO3_w'

request({url: geoCodeURL, json:true}, (error,response)=>{
 const latitude = response.body.features[0].center[1]
 const longitude = response.body.features[0].center[0]
console.log(latitude/longitude)
})
