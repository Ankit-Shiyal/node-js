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
    EventImages:{
        type:[String],
        required:true
    },

    EventPoster:{
        type:[String],
        required:true
    },
    EventBanner:{
        type:String,
        required:true
    },
    EventSpiker:{
        type:[String],
        required:true
    },
    EventDocument:{
        type:[String],
        required:true
    }

},
{
timestamps:true
})


const Event = mongoose.model(
    "Event Schema",
    eventSchema
)

export default Event;