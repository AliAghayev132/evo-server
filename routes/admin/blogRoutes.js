// Variables
import { Router } from "#constants/variables.js";
// Controller
import blogController from "#controllers/admin/blogController.js";
// Middelwares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const BlogRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Blog
 *   description: Blog API son nöqtələri
 */

/**
 * @swagger
 * /admin/blogs:
 *   post:
 *     summary: Yeni Blog Əlavə Et
 *     description: Yeni bir blog əlavə edir.
 *     tags: [Admin Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Blogun başlığı
 *               category:
 *                 type: string
 *                 description: Blogun kateqoriyası
 *               content:
 *                 type: string
 *                 description: Blogun məzmunu
 *               description:
 *                 type: string
 *                 description: Blogun təsviri
 *               imageNames:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Şəkil adları
 *               imageUrls:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Şəkil URL'ləri
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Blog şəkilləri
 *     responses:
 *       201:
 *         description: Blog uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat
 *       500:
 *         description: Server xətası
 */
BlogRouter.post("/", parseJsonFields, blogController.addNewBlog);

/**
 * @swagger
 * /admin/blogs:
 *   get:
 *     summary: Tüm Blogları Al
 *     description: Tüm blogları alır.
 *     tags: [Admin Blog]
 *     responses:
 *       200:
 *         description: Tüm bloglar uğurla alındı
 *       500:
 *         description: Server xətası
 */
BlogRouter.get("/", adminAuthenticateToken, blogController.getBlogs);

/**
 * @swagger
 * /admin/blogs/{id}:
 *   delete:
 *     summary: Blogu Sil
 *     description: Belirtilen ID'ye sahib bir blogu silir.
 *     tags: [Admin Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Blogun ID'si
 *     responses:
 *       200:
 *         description: Blog uğurla silindi
 *       404:
 *         description: Blog tapılmadı
 *       500:
 *         description: Server xətası
 */
BlogRouter.delete("/:id", adminAuthenticateToken, blogController.deleteBlog);

export { BlogRouter };