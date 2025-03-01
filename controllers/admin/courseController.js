import Course from "#models/Course.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileUploadService } from "#services/FileUploadService.js";
import { FileControlService } from "#services/FileControlService.js";
// Paths
import { coursePath } from "#constants/filePaths.js";

// Kurs Ekleme
const addCourse = async (req, res) => {
    try {
        const { isValid, message } = await ValidatorService.validateCourse(req.body);
        const image = req.files?.image;

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        if (!image) {
            return res.status(400).json({ success: false, message: MessagesService.error.E404 });
        }

        const newCourse = new Course(req.body);

        const uploadedFile = await FileUploadService.Upload({
            file: image,
            uploadPath: coursePath,
            newName: newCourse._id,
        });

        if (!uploadedFile.success) {
            return res.status(400).json({ success: false, message: MessagesService.error.E405 });
        }

        newCourse.imageUrl = image.name;

        await newCourse.save();
        return res.status(201).json({ success: true, message: MessagesService.success.S201, course: newCourse });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Kurs Silme
const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        course.isDeleted = true;

        await course.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

const restoreCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        course.isDeleted = false;

        await course.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Kurs Düzenleme
const editCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { isValid, message } = await ValidatorService.validateCourse(req.body);
        const image = req?.files?.image;

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        const updatedCourse = await Course.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCourse) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        if (image) {
            const uploadedFile = await FileUploadService.Upload({
                file: image,
                uploadPath: coursePath,
                newName: updatedCourse._id,
            });

            if (!uploadedFile.success) {
                return res.status(400).json({ success: false, message: MessagesService.error.E405 });
            }

            FileControlService.Delete({ filePath: `${coursePath}/${updatedCourse.imageUrl}` });

            updatedCourse.imageUrl = image.name;
            await updatedCourse.save();
        }

        return res.status(200).json({ success: true, message: MessagesService.success.S200, course: updatedCourse });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Tüm Kursları Alma
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({ isDeleted: false }).populate({
            path: "instructors",
            select: "firstName secondName imageUrl"
        });
        return res.status(200).json({ success: true, courses });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

const getAllCoursesWithDeleted = async (req, res) => {
    try {
        const courses = await Course.find().populate({
            path: "instructors",
            select: "firstName secondName imageUrl"
        });
        return res.status(200).json({ success: true, courses });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

export default {
    addCourse,
    editCourse,
    deleteCourse,
    getAllCourses,
    restoreCourse,
    getAllCoursesWithDeleted
};