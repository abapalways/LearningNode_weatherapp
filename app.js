
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geoCode('Philadelphia', (error, data) => {
    if (error) {
        return console.log(error)
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

