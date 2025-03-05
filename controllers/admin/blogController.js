// Node
import fs from "fs";
// Models
import Blog from "#models/Blog.js";
// Services
import { MessagesService } from "#services/MessagesService.js";
// Variables
import { blogPath } from "#constants/filePaths.js";
import { ValidatorService } from "#services/ValidatorService.js";
import { FileControlService } from "#services/FileControlService.js";


const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, message: MessagesService.success.S200, blogs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
}

const addNewBlog = async (req, res) => {
    try {
        // TODO: validator əlavə et
        const { title, category, content, description, imageNames, imageUrls } = req.body;
        const validate = ValidatorService.validateBlogPost(req.body);

        if (!validate.isValid) {
            return res.status(400).json({
                success: false,
                message: validate.message,
            });
        }

        const images = [];


        if (req.files) {
            if (!fs.existsSync(blogPath)) {
                fs.mkdirSync(blogPath, { recursive: true });
            }

            for (let i = 0; i < imageNames.length; ++i) {
                const currentImage = req.files[imageNames[i]];
                currentImage.name = imageUrls[i];
                images.push(imageUrls[i]);
                await currentImage.mv(`${blogPath}/${currentImage.name}`);
            }
        }


        const newBlog = new Blog({
            title,
            content,
            category,
            imageUrls,
            description,
        });

        await newBlog.save();

        return res.status(201).json({
            newBlog,
            success: true,
            message: MessagesService.success.S201,
        });


    } catch (error) {
        res.status(500).json({
            success: false,
            message: MessagesService.error.E500
        });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: MessagesService.error.E404 });
        }

        for (let i = 0; i < blog.imageUrls.length; ++i) {
            FileControlService.Delete({ filePath: `${blogPath}/${blog.imageUrls[i]}` })
        }

        res.status(200).json({ success: true, message: MessagesService.success.S200 });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: MessagesService.error.E500 });
    }
}


export default { addNewBlog, deleteBlog, getBlogs };