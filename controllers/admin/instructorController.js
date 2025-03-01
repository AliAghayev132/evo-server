// Models
import Instructor from "#models/Instructor.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileUploadService } from "#services/FileUploadService.js";
import { FileControlService } from "#services/FileControlService.js";
// Paths
import { instructorPath } from "#constants/filePaths.js";

// Eğitmen Ekleme
const addInstructor = async (req, res) => {
    try {
        const { isValid, message } = ValidatorService.validateInstructor(req.body);
        const image = req.files?.image;

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        if (!image) {
            return res.status(400).json({ success: false, message: MessagesService.error.E404 });
        }

        const newInstructor = new Instructor(req.body);

        const uploadedFile = await FileUploadService.Upload({
            file: image,
            uploadPath: instructorPath,
            newName: newInstructor._id,
        })

        if (!uploadedFile.success) {
            return res.status(400).json({ success: false, message: MessagesService.error.E405 });
        }

        newInstructor.imageUrl = image.name;

        await newInstructor.save();
        return res.status(201).json({ success: true, message: MessagesService.success.S201, instructor: newInstructor });
    } catch (error) {
        console.log(error);

        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
// Eğitmen Silme
const deleteInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const instructor = await Instructor.findById(id);

        if (!instructor) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        instructor.isDeleted = true;

        await instructor.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
const restoreInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const instructor = await Instructor.findById(id);

        if (!instructor) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        instructor.isDeleted = false;

        await instructor.save();
        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
// Eğitmen Düzenleme
const editInstructor = async (req, res) => {
    try {
        const { id } = req.params;
        const { isValid, message } = ValidatorService.validateInstructor(req.body);
        const image = req?.files?.image;

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        const updatedInstructor = await Instructor.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedInstructor) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }
        
        console.log({image});
        

        if (image) {
            const uploadedFile = await FileUploadService.Upload({
                file: image,
                uploadPath: instructorPath,
                newName: updatedInstructor._id,
            });

            if (!uploadedFile.success) {
                return res.status(400).json({ success: false, message: MessagesService.error.E405 });
            }

            FileControlService.Delete({ filePath: `${instructorPath}/${updatedInstructor.imageUrl}` });

            updatedInstructor.imageUrl = image.name;
            await updatedInstructor.save();
        }

        return res.status(200).json({ success: true, message: MessagesService.success.S200, instructor: updatedInstructor });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
// Tüm Eğitmenleri Alma
const getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find({ isDeleted: false });
        return res.status(200).json({ success: true, instructors });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
const getAllInstructorsIncludingDeleted = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        return res.status(200).json({ success: true, instructors });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};



export default {
    addInstructor,
    editInstructor,
    deleteInstructor,
    getAllInstructors,
    restoreInstructor,
    getAllInstructorsIncludingDeleted
};