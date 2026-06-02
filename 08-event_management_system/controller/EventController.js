
import { memoryStorage } from "multer";
import HttpError from "../middleware/HttpError.js";
import Event from "../model/EventModel.js";
import fs from "fs";

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


const getAllEvent = async (req, res, next) => {

    try {

        const EventData = await Event.find({})

        if (!EventData) {
            return next(new HttpError("Event data not Available", 404))
        }

        res.status(200).json({ success: true, Total: EventData.length, message: "Event data", EventData })

    } catch (error) {
        next(new HttpError(error.message, 500))


    }
}

const getById = async (req, res, next) => {

    try {
        const { id } = req.params;

        const EventData = await Event.findById(id)

        if (!EventData) {
            return next(new HttpError("Event Data not found", 404))
        }

        res.status(200).json({ success: true, message: "Event Data", EventData })

    } catch (error) {
        next(new HttpError(error.message, 500))


    }

}
const deleteEvent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedEvent = await Event.findById(id);

        if (!deletedEvent) {
            return next(new HttpError("Event not found", 404));
        }


        if (deletedEvent.EventImages && deletedEvent.EventImages.length > 0) {
            deletedEvent.EventImages.forEach(file => {
                fs.unlinkSync(file);
            });
        }

        if (deletedEvent.EventPoster && deletedEvent.EventPoster.length > 0) {
            deletedEvent.EventPoster.forEach(file => {
                fs.unlinkSync(file);
            });
        }

        if (deletedEvent.EventBanner) {
            fs.unlinkSync(deletedEvent.EventBanner);

        }
        if (deletedEvent.EventSpiker && deletedEvent.EventSpiker.length > 0) {
            deletedEvent.EventSpiker.forEach(file => {
                fs.unlinkSync(file);
            });

        }
        if (deletedEvent.EventDocument && deletedEvent.EventDocument.length > 0) {
            deletedEvent.EventDocument.forEach(file => {
                fs.unlinkSync(file);
            });
        }

        await Event.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Event deleted successfully" });


    } catch (error) {
        next(new HttpError(error.message, 500));
    }
};




const updateEvent = async (req, res, next) => {

    try {

        const { id } = req.params;

        const EventData = await Event.findById(id)

        if (!EventData) {
            return next(new HttpError("event not found with this id ", 404))
        }

        const updates = Object.keys(req.body);

        const allowedFiled = [
            "EventName",
            "Date",
            "EventVenue",
            "EventDescription",
            "ticketPrice"
        ]

        const isValidUpdate = updates.every((field) => {
            return allowedFiled.includes(field);
        });

        if (!isValidUpdate) {
            return next(
                new HttpError("only allowed field can be updated", 400));
        }


        const EventImages = req.files?.EventImages?.map((file) => file.path) || null
        const EventPoster = req.files?.EventPoster?.map((file) => file.path) || null
        const EventBanner = req.files?.EventBanner?.[0]?.path || null;
        const EventSpiker = req.files?.EventSpiker?.map((file) => file.path) || null
        const EventDocument = req.files?.EventDocument?.map((file) => file.path) || null





        if (EventImages) {

            EventData.EventImages.forEach(file => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
            });

            EventData.EventImages = EventImages;
        }

        if (EventPoster) {

            EventData.EventPoster.forEach(file => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
            });
        }
        if (EventBanner) {

            if (fs.existsSync(EventData.EventBanner)) {
                fs.unlinkSync(EventData.EventBanner);
            }
        }

        if (EventSpiker) {

            EventData.EventSpiker.forEach(file => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
            });
        }

        if (EventDocument) {

            EventData.EventDocument.forEach(file => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
            });
        }

        updates.forEach((update) => {
            EventData[update] = req.body[update];
        });

        await EventData.save();
        res.status(200).json({
            success: true,
            message: "Event updated successfully",
            EventData
        });

    } catch (error) {
        next(new HttpError(error.message, 500))

    }

}



export default { Events, getAllEvent, getById, deleteEvent, updateEvent };