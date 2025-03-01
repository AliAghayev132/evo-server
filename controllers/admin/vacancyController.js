// Models
import Vacancy from "#models/Vacancy.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileUploadService } from "#services/FileUploadService.js";
import { FileControlService } from "#services/FileControlService.js";
// Paths
import { vacancyPath } from "#constants/filePaths.js";

const addVacancy = async (req, res) => {
    try {
        const { isValid, message } = ValidatorService.validateVacancy(req.body);

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        const image = req?.files?.image;

        
        
        if (!image) {
            return res.status(400).json({ success: false, message: MessagesService.error.E404 });
        }

        const newVacancy = new Vacancy(req.body);
        const uploadedFile = await FileUploadService.Upload({
            file: image,
            uploadPath: vacancyPath,
            newName: newVacancy._id,
        });



        if (!uploadedFile.success) {
            return res.status(400).json({ success: false, message: MessagesService.error.E405 });
        }

        newVacancy.imageUrl = image.name;
        await newVacancy.save();
        return res.status(201).json({ success: true, message: MessagesService.success.S201, vacancy: newVacancy });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
const deleteVacancy = async (req, res) => {
    try {
        const { id } = req.params;
        const vacancy = await Vacancy.findByIdAndDelete(id);

        if (!vacancy) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        FileControlService.Delete({ filePath: `${vacancyPath}/${vacancy.imageUrl}` });


        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
const editVacancy = async (req, res) => {
    try {
        const { id } = req.params;
        const { isValid, message } = ValidatorService.validateVacancy(req.body);
        const image = req?.files?.image;

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        const updatedVacancy = await Vacancy.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedVacancy) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        if (image) {
            const uploadedFile = await FileUploadService.Upload({
                file: image,
                uploadPath: vacancyPath,
                newName: updatedVacancy._id,
            });

            if (!uploadedFile.success) {
                return res.status(400).json({ success: false, message: MessagesService.error.E405 });
            }

            FileControlService.Delete({ filePath: `${vacancyPath}/${updatedVacancy.imageUrl}` });

            updatedVacancy.imageUrl = image.name;
            await updatedVacancy.save();
        }

        return res.status(200).json({ success: true, message: MessagesService.success.S200, vacancy: updatedVacancy });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};
const getAllVacancies = async (req, res) => {
    try {
        const vacancies = await Vacancy.find({ isDeleted: false });
        return res.status(200).json({ success: true, vacancies });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

export default {
    addVacancy,
    editVacancy,
    deleteVacancy,
    getAllVacancies
};