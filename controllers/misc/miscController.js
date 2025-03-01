// Models
import Event from "#models/Event.js";
import Course from "#models/Course.js";
import Vacancy from "#models/Vacancy.js";
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

export { getEvents, getCourses, getVacancies, getInstructors };