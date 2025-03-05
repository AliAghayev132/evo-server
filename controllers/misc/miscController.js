// Models
import Event from "#models/Event.js";
import Course from "#models/Course.js";
import Partner from "#models/Partner.js";
import Vacancy from "#models/Vacancy.js";
import Settings from "#models/Settings.js";
import Graduate from "#models/Graduate.js";
import Instructor from "#models/Instructor.js";
import CourseApplication from "#models/CourseApplication.js";
import VacancyApplication from "#models/VacancyApplication.js";
// Services
import { BitrixService } from "#services/BitrixService.js";
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileUploadService } from "#services/FileUploadService.js";
// Paths
import { resumePath } from "#constants/filePaths.js";

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

const getPartners = async (req, res) => {
    try {
        const partners = await Partner.find({});
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const applyVacancy = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, applicationCategory } = req.body;
        const resume = req.files?.file;

        if (!resume) {
            return res.status(400).json({ message: MessagesService.error.E405, success: false });
        }

        const validation = ValidatorService.validateApplication(req.body);

        if (!validation.isValid) {
            return res.status(400).json({ message: validation.message, success: false });
        }

        const vacancy = new VacancyApplication({
            email,
            fullName,
            phoneNumber,
            applicationCategory
        });

        const uploadResult = await FileUploadService.Upload({
            file: resume,
            newName: vacancy._id,
            uploadPath: resumePath,
            allowedTypes: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
        })


        if (!uploadResult.success) {
            return res.status(400).json({ message: MessagesService.error.E405, success: false });
        }

        vacancy.resumeUrl = resume.name;
        await vacancy.save();
        res.status(201).json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const applyCourse = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, applicationCategory } = req.body;

        if (!fullName || !email || !phoneNumber || !applicationCategory) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const settings = await Settings.findOne();

        if (settings.bitrixForwarding) {
            BitrixService.sendApplication({ name: fullName, email, phone: phoneNumber, course: applicationCategory });
        }
        const courseApplication = new CourseApplication({ email, fullName, phoneNumber, applicationCategory, sendedToBitrix: settings.bitrixForwarding });
        await courseApplication.save();
        res.status(201).json({ message: "Application submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getEvents,
    getCourses,
    applyCourse,
    getPartners,
    getGraduates,
    getVacancies,
    applyVacancy,
    getInstructors,
};