const request = require('request')
const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiYWJhcGFsd2F5cyIsImEiOiJjbHE0M3N6dXkwMzV2MmpwZTgwYmRodzFhIn0.m68aDbOqQmpU-14IdHO3_w&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {

            callback('Unable to connect to the geocoding service', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            const latitude = response.body.features[0].center[1]
            const longitude = response.body.features[0].center[0]
            callback(undefined, { latitude: response.body.features[0].center[1], longitude: response.body.features[0].center[0], location: response.body.features[0].place_name })
        }
    })
}

module.exports = geoCode