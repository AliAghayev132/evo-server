// Variables
import { Model, Schema } from "#constants/variables.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     Partner:
 *       type: object
 *       required:
 *         - title
 *         - imageUrl
 *       properties:
 *         title:
 *           type: string
 *           description: Tərəfdaşın adı
 *         imageUrl:
 *           type: string
 *           description: Tərəfdaşın şəkli URL'si
 *       example:
 *         title: "Example Partner"
 *         imageUrl: "http://example.com/image.jpg"
 */

const partnerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

export default Model("Partner", partnerSchema);