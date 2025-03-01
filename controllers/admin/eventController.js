// Models
import Event from "#models/Event.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";

// Services
// Paths

// Event Ekleme
const addEvent = async (req, res) => {
    try {
        const { isValid, message } = ValidatorService.validateEvent(req.body);

        if (!isValid) {
            return res.status(400).json({ success: false, message: MessagesService.validation.V100 });
        }
        const newEvent = new Event(req.body);
        await newEvent.save();
        return res.status(201).json({ success: true, message: MessagesService.success.S201, event: newEvent });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Event Silme
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        event.isDeleted = true;

        await event.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

const restoreEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        event.isDeleted = false;

        await event.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Event Düzenleme
const editEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { isValid, message } = ValidatorService.validateEvent(req.body);

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedEvent) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }
        
        return res.status(200).json({ success: true, message: MessagesService.success.S200, event: updatedEvent });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Tüm Eventleri Alma
const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({ isDeleted: false }).populate({
            path: "organizers",
            select: "name position company"
        });
        return res.status(200).json({ success: true, events });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

const getAllEventsWithDeleted = async (req, res) => {
    try {
        const events = await Event.find().populate({
            path: "organizers",
            select: "name position company"
        });
        return res.status(200).json({ success: true, events });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

export default {
    addEvent,
    editEvent,
    deleteEvent,
    getAllEvents,
    restoreEvent,
    getAllEventsWithDeleted
};