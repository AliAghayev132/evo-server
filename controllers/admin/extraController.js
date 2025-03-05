// Models
import CourseApplication from "#models/CourseApplication.js";
import VacancyApplication from "#models/VacancyApplication.js";
// Services
import { MessagesService } from "#services/MessagesService.js";

const getVacancyApplications = async (req, res) => {
    try {
        const vacancyApplications = await VacancyApplication.find();
        res.status(200).json({ success: true, message: MessagesService.success.S200, vacancyApplications });
    } catch (error) {
        res.status(500).json({ message: MessagesService.error.E500 });
    }
};

const getCourseApplications = async (req, res) => {
    try {
        const { page = 1, limit = 10, name } = req.query;
        const query = name ? { name: new RegExp(name, 'i') } : {};

        const courseApplications = await CourseApplication.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await CourseApplication.countDocuments(query);

        res.status(200).json({
            success: true,
            message: MessagesService.success.S200,
            courseApplications,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).json({ message: MessagesService.error.E500 });
    }
};

export default { getVacancyApplications, getCourseApplications };