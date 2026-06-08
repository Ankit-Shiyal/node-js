
import { memoryStorage } from "multer";
import HttpError from "../middlewares/HttpError.js";
import Event from "../model/EventModel.js";
import fs from "fs";

const add = async (req, res, next) => {

    try {
        const { EventName, EventDate, EventVenue, EventDescription, ticketPrice } = req.body
        const EventImages = req.files?.EventImages?.map((file) => file.path) || null
        const EventBanner = req.files?.EventBanner?.map((file) => file.path) || null
        const EventPoster = req.files?.EventPoster?.[0]?.path || null;
        const EventSpeaker = req.files?.EventSpeaker?.map((file) => file.path) || null
        const EventDocument = req.files?.EventDocument?.[0]?.path || null

        const newEvent = new Event({
            EventName,
            EventDate,
            EventVenue,
            EventDescription,
            ticketPrice,
            EventImages,
            EventPoster,
            EventBanner,
            EventSpeaker,
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

        const EventDAta = await Event.find({})

        if (!EventDAta) {
            return next(new HttpError(" Event data not found", 404))
        }

        res.status(202).json({ success: true, message: "Event Data", total: EventDAta.length, EventDAta })



    } catch (error) {
        next(new HttpError(error.message, 500))

    }
}

const getByID = async (req, res, next) => {

    try {

        const { id } = req.params

        const EventDAta = await Event.findById(id)

        if (!EventDAta) {
            return next(new HttpError(" Event not found with this id", 404))
        }

        res.status(202).json({ success: true, message: "Event Data", EventDAta })



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

        if (deletedEvent.EventBanner && deletedEvent.EventBanner.length > 0) {
            deletedEvent.EventBanner.forEach(file => {
                fs.unlinkSync(file);
            });
        }

        if (deletedEvent.EventPoster) {
            fs.unlinkSync(deletedEvent.EventPoster);

        }
        if (deletedEvent.EventSpeaker && deletedEvent.EventSpeaker.length > 0) {
            deletedEvent.EventSpeaker.forEach(file => {
                fs.unlinkSync(file);
            });

        }
        if (deletedEvent.EventDocument) {
            fs.unlinkSync(deletedEvent.EventDocument);
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
            "EventDate",
            "EventVenue",
            "EventDescription",
            "ticketPrice",
        ]

        const isValidUpdate = updates.every((field) => {
            return allowedFiled.includes(field);
        });

        if (!isValidUpdate) {
            return next(
                new HttpError("only allowed field can be updated", 400));
        }

        if (req.files?.EventImages) {
            EventData.EventImages.forEach((file) => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file);
                }
            });

            EventData.EventImages =
                req.files?.EventImages?.map((file) => file.path) || null;
        }

        if (req.files?.EventBanner) {
            EventData.EventBanner.forEach((file) => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file)
                }
            })

            EventData.EventBanner =
                req.files?.EventBanner?.map((file) => file.path) || null;

        }

        if (req.files?.EventPoster) {
            fs.unlinkSync(EventData.EventPoster);

            EventData.EventPoster = req.files?.EventPoster?.[0]?.path || null
        }

        if (req.files?.EventSpeaker) {
            EventData.EventSpeaker.forEach((file) => {
                if (fs.existsSync(file)) {
                    fs.unlinkSync(file)
                }
            })

            EventData.EventSpeaker =
                req.files?.EventSpeaker?.map((file) => file.path) || null;

        }

        if (req.files?.EventDocument) {
            fs.unlinkSync(EventData.EventDocument);

            EventData.EventDocument = req.files?.EventDocument?.[0]?.path || null
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

export default { add, getAllEvent, getByID, deleteEvent, updateEvent };