import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

    EventName: {
        type: String,
        required: true,
        trim: true
    },
    Date:{
        type:Date,
        required:true
    },
    EventVenue:{
        type: String,   
        required:true,
        trim:true
    },
    EventDescription:{
        type:String,
    },
    ticketPrice:{
        type:Number,
        required:true,

    },
    EventPoster:{
        type:[string],
        required:true
    },
    EventBanner:{
        type:string,
        required:true
    },
    EventSpiker:{
        type:[string],
        required:true
    },

},
{
timestamps:true
})


const Event = mongoose.model(
    "Event Schema",
    eventSchema
)

export default Event;