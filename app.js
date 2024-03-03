const { error } = require("console")
const request = require("request")
// const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=egypt"
// request ({url , json : true} , (error, response) => {
//     // console.log(response.body.location)
//     // console.log(response.body.location.name)
//     // console.log(response.body.current.condition.text)
//     // console.log(response.body.location.lat)
//     // console.log(response.body.location.lon)

//     if(error){
//         console.log("error has occured")
//     } else if (response.body.error){
//         console.log(response.body.error.message)
//     } else{
//         console.log(response.body.current.condition.text)
//     }
// })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////



const forecast = require("./data1/forecast")
const geoCodeUrl = require("./data1/geocodeurl")
const country = process.argv[2]

geoCodeUrl(country, (error, data)=>{

    console.log("ERROR: ", error)
    console.log("DATA: ", data)

    forecast ( data.latitude , data.longtitude, (error, data)=>{

        console.log("ERROR: ", error)
        console.log("DATA: ", data)
    }
    )
})



