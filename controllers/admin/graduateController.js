// Models
import Graduate from "#models/Graduate.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileUploadService } from "#services/FileUploadService.js";
import { FileControlService } from "#services/FileControlService.js";
// Paths
import { graduatePath } from "#constants/filePaths.js";


// Mezun Ekleme
const addGraduate = async (req, res) => {
    try {
        const { isValid, message } = ValidatorService.validateGraduate(req.body);

        if (!isValid) {
            return res.status(400).json({ success: false, message });
        }

        console.log({ isValid, message });


        const image = req?.files?.image;

        if (!image) {
            return res.status(400).json({ success: false, message: MessagesService.error.E406 });
        }

        const newGraduate = new Graduate(req.body);

        const uploadedFile = await FileUploadService.Upload({
            file: image,
            uploadPath: graduatePath,
            newName: newGraduate._id,
        });

        if (!uploadedFile.success) {
            return res.status(400).json({ success: false, message: MessagesService.error.E405 });
        }

        newGraduate.imageUrl = image.name;
        await newGraduate.save();
        return res.status(201).json({ success: true, message: MessagesService.success.S201, graduate: newGraduate });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Mezun Düzenleme
const editGraduate = async (req, res) => {
    try {
        const { id } = req.params;
        const image = req?.files?.image;

        const updatedGraduate = await Graduate.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedGraduate) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        if (image) {
            const uploadedFile = await FileUploadService.Upload({
                file: image,
                uploadPath: graduatePath,
                newName: updatedGraduate._id,
            });

            if (!uploadedFile.success) {
                return res.status(400).json({ success: false, message: MessagesService.error.E405 });
            }

            FileControlService.Delete(`${graduatePath}/${updatedGraduate.imageUrl}`);

            updatedGraduate.imageUrl = image.name;
            await updatedGraduate.save();
        }

        return res.status(200).json({ success: true, message: MessagesService.success.S200, graduate: updatedGraduate });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Mezun Silme
const deleteGraduate = async (req, res) => {
    try {
        const { id } = req.params;
        const graduate = await Graduate.findByIdAndDelete(id);

        if (!graduate) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        FileControlService.Delete({ filePath: `${graduatePath}/${graduate.imageUrl}` });

        return res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

// Tüm Mezunları Alma
const getAllGraduates = async (req, res) => {
    try {
        const graduates = await Graduate.find();
        return res.status(200).json({ success: true, graduates });
    } catch (error) {
        return res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
};

export default {
    addGraduate,
    editGraduate,
    deleteGraduate,
    getAllGraduates
};