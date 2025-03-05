// Models
import Partner from "#models/Partner.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
import { FileUploadService } from "#services/FileUploadService.js";
import { FileControlService } from "#services/FileControlService.js";
// Path
import { partnerPath } from "#constants/filePaths.js";


const addPartner = async (req, res) => {
    try {
        const { title } = req.body;
        const image = req.files?.file;

        if (!title) {
            return res.status(400).json({ message: MessagesService.error.E400, success: false });
        }

        if (!image) {
            return res.status(400).json({ message: MessagesService.error.E406, success: false });
        }


        const newPartner = new Partner({
            title,
        });

        const uploadResult = await FileUploadService.Upload({
            file: image,
            newName: newPartner._id,
            uploadPath: partnerPath,
        });

        if (!uploadResult.success) {
            return res.status(400).json({ message: uploadResult.message, success: false });
        }

        newPartner.imageUrl = image.name;

        await newPartner.save();
        res.status(201).json({ newPartner, message: MessagesService.success.S201, success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: MessagesService.error.E500 });
    }
};

const editPartner = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const image = req.files?.file;

        if (!title) {
            return res.status(400).json({ message: "Title is required", success: false });
        }

        const partner = await Partner.findById(id);

        if (!partner) {
            return res.status(404).json({ message: MessagesService.error.E404, success: false });
        }

        partner.title = title;

        if (image) {

            const uploadResult = await FileUploadService.Upload({
                file: image,
                newName: partner._id,
                uploadPath: partnerPath,
            });

            if (!uploadResult.success) {
                return res.status(400).json({ message: uploadResult.message, success: false });
            }

            FileControlService.Delete({
                filePath: `${partnerPath}/${partner.imageUrl}`
            });

            partner.imageUrl = image.name;
        }

        await partner.save();
        res.status(200).json({ partner, message: MessagesService.success.S200, success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: MessagesService.error.E500, success: false });
    }
};

const deletePartner = async (req, res) => {
    try {

        const { id } = req.params;
        const partner = await Partner.findByIdAndDelete(id);

        if (!partner) {
            return res.status(404).json({ message: MessagesService.error.E404, success: false });
        }

        FileControlService.Delete({
            filePath: `${partnerPath}/${partner.imageUrl}`
        });

        res.status(200).json({ message: MessagesService.success.S200, success: true });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: MessagesService.error.E500, success: false });
    }
}

const getPartners = async (req, res) => {
    try {
        const partners = await Partner.find({});

        res.status(200).json({ partners, success: true, message: MessagesService.success.S200 });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: MessagesService.error.E500, success: false });
    }
};

export default { addPartner, editPartner, deletePartner, getPartners };