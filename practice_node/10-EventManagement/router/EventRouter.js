import express from "express"

import upload from "../middlewares/upload.js"

import controller from "../controller/EventController.js"

const router = express.Router()

router.post("/add", upload.fields([
    {
        name: "EventImages",
        maxCount: 5
    },
    {
        name: "EventBanner",
        maxCount: 5
    },
    {
        name: "EventPoster",
        maxCount: 1
    }
    , {
        name: "EventSpeaker",
        maxCount: 5
    },
    {
        name: "EventDocument",
        maxCount: 1
    }
]),
    controller.add
)

router.get("/allEvent", controller.getAllEvent)
router.get("/:id", controller.getByID)


router.delete("/:id", controller.deleteEvent)


router.patch("/:id", upload.fields([
    {
        name: "EventImages",
        maxCount: 5
    },
    {
        name: "EventBanner",
        maxCount: 5
    },
    {
        name: "EventPoster",
        maxCount: 1
    }
    , {
        name: "EventSpeaker",
        maxCount: 5
    },
    {
        name: "EventDocument",
        maxCount: 1
    }
]),
    controller.updateEvent
)


export default router;