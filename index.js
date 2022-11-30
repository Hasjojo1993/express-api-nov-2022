//import necessary packages

//express is required to create API
let expressApp = require('express')
//required for cross origin
let cors = require('cors')
//required to connect with mongodb database
let mongoose = require('mongoose')
//import the model
let youtube = require('./youtube')

//port on which API will be running/exposed
let PORT = 1234

//create express app
let app = expressApp()
app.use(expressApp.json())
app.use(cors())

let connectionString = "mongodb+srv://Jojoforce1993:J%40has1993@jojoforce1993.zjgb1o6.mongodb.net/video"
//    

mongoose.connect(connectionString)
let db = mongoose.connection

//check if mongodb database is connected
db.once("open",()=>{
    console.log("Connected to mongodb database in cloud!!!!");
})


//create api to get the list of all videos
app.get("/get/all", (request, response)=>{
    //console.log(request)
    console.log("Request received" )
    console.log("Sending back response" )
    
    youtube.find({},(error, data)=>{
        if (error) {
            response.json(error)
        }else{
            console.log(data)
            response.json(data)
        }
    })
})    // response.send("I am response from API server!!!!")

app.listen(PORT, ()=>{
    console.log("API server listening on port", PORT)
})