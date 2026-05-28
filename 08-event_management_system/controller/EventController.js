
import HttpError from "../middleware/HttpError.js";
import Event from "../model/EventModel.js";

const Events = async (req, res, next) => {

    try {

        const { EventName, Date, EventVenue, EventDescription, ticketPrice } = req.body

        const EventImages = req.files?.EventImages?.map((file) => file.path) || null
        const EventPoster = req.files?.EventPoster?.map((file) => file.path) || null
        const EventBanner = req.files?.EventBanner?.[0]?.path || null;
        const EventSpiker = req.files?.EventSpiker?.map((file) => file.path) || null
        const EventDocument = req.files?.EventDocument?.map((file) => file.path) || null



        const newEvent = new Event({

            EventName,
            Date,
            EventVenue,
            EventDescription,
            ticketPrice,
            EventImages,
            EventPoster,
            EventBanner,
            EventSpiker,
            EventDocument,
        })

        await newEvent.save();

        res.status(201).json({ success: true, message: "Event Added Successfully", newEvent });

    } catch (error) {
        next(new HttpError(error.message, 500))
    }


}

export default { Events };