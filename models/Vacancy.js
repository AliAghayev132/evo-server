// Variables
import { Model, Schema } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Vacancy:
 *       type: object
 *       required:
 *         - imageUrl
 *         - experienceYears
 *         - requirements
 *         - description
 *         - duties
 *       properties:
 *         imageUrl:
 *           type: string
 *           description: İş elanın şəkli
 *         experienceYears:
 *           type: number
 *           description: Təcrübə illəri
 *         requirements:
 *           type: array
 *           items:
 *             type: string
 *           description: İş elanın tələbləri
 *         description:
 *           type: string
 *           description: İş elanın təsviri
 *         duties:
 *           type: array
 *           items:
 *             type: string
 *           description: İş elanın vəzifələri
 *       example:
 *         imageUrl: "http://example.com/image.jpg"
 *         experienceYears: 5
 *         requirements: ["Bachelor's degree in Computer Science", "5+ years of experience in software development", "Proficiency in JavaScript and Node.js"]
 *         description: "This is a job description."
 *         duties: ["Develop software", "Maintain codebase", "Collaborate with team"]
 */

const vacancySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    experienceYears: {
        type: Number,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    duties: {
        type: [String],
        required: true
    }
});

export default Model("Vacancy", vacancySchema);