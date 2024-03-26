const request = require('request')


const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=a40c0ff5da213735cc22e5f9c5752980&query=' + longitude + ',' + latitude + '&units=f'

    // const url = 'http://api.weatherstack.com/current?access_key=a40c0ff5da213735cc22e5f9c5752980&query=37.8267,-122.4233&units=f'

    request({ url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to connect to weather service', undefined)
        }


        else if (response.body.error) {

            callback('Unable to find the location', undefined)

        }

        else {

            const data = response.body
            const message = data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature + ' degrees out. It feels like ' + data.current.feelslike + ' out.'
            callback(undefined, message)
        }

    })
}

module.exports = forecast

//     if (error) {


//         console.log('Unable to connect to weather service')
//     }


//     else if (response.body.error) {

//         console.log('Unable to find the location')

//     }

//     else {

//         const data = response.body
//         console.log(data.current)

//         console.log(data.current.weather_descriptions[0] + '. It is currently ' + data.current.temperature + ' degrees out. It feels like ' + data.current.feelslike + ' out.')
//     }
// })