// Models
import Event from "#models/Event.js";
import Course from "#models/Course.js";
import Vacancy from "#models/Vacancy.js";
import Graduate from "#models/Graduate.js";
import Instructor from "#models/Instructor.js";

const getEvents = async (req, res) => {
    try {
        const events = await Event.find({ isDeleted: false });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isDeleted: false });
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getVacancies = async (req, res) => {
    try {
        const vacancies = await Vacancy.find();
        res.status(200).json(vacancies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find({ isDeleted: false });
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getGraduates = async (req, res) => {
    try {
        const graduates = await Graduate.find();
        res.status(200).json(graduates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// const apply = async (req, res) => {
//     const { email, fullname, phoneNumber, field } = req.body;
//     if (!email || !fullname || !phoneNumber || !field) {
//         return res.status(400).json({ message: "All fields are required" });
//     }

//     try {
//         // Assuming you have a model to handle applications
//         const application = new Application({ email, fullname, phoneNumber, field });
//         await application.save();
//         res.status(201).json({ message: "Application submitted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

export default { getEvents, getCourses, getVacancies, getInstructors, getGraduates };