import express from "express";

import EventController from "../controller/EventController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/add-event",

  upload.fields([
    { name: "EventImages", maxCount: 3 },
    { name: "EventPoster", maxCount: 2 },
    { name: "EventBanner", maxCount: 1 },
    { name: "EventSpiker", maxCount: 2 },
    { name: "EventDocument", maxCount: 2 },
  ]),

  EventController.Events
);

router.get("/AllEvents", EventController.getAllEvent)
router.get("/:id",EventController.getById)
router.delete("/:id",EventController.deleteEvent)



router.patch(
  "/:id",

  upload.fields([
    { name: "EventImages", maxCount: 3 },
    { name: "EventPoster", maxCount: 2 },
    { name: "EventBanner", maxCount: 1 },
    { name: "EventSpiker", maxCount: 2 },
    { name: "EventDocument", maxCount: 2 },
  ]),

  EventController.updateEvent
);

export default router;