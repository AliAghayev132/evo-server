// Variables
import { Router } from "#constants/variables.js";
// Controller
import instructorController from "#controllers/admin/instructorController.js";
// Middlewares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const InstructorRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Instructor
 *   description: Admin üçün eğitmen API son nöqtələri
 */

/**
 * @swagger
 * /admin/instructors:
 *   post:
 *     summary: Yeni Eğitmen Əlavə Et
 *     description: Yeni bir eğitmen əlavə edir.
 *     tags: [Admin Instructor]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Eğitmenin adı
 *               secondName:
 *                 type: string
 *                 description: Eğitmenin soyadı
 *               title:
 *                 type: string
 *                 description: Eğitmenin ünvanı
 *               yearsOfExperience:
 *                 type: number
 *                 description: Eğitmenin təcrübə illəri
 *               certificates:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Eğitmenin sertifikatları
 *               workExperience:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Eğitmenin iş təcrübəsi
 *               bio:
 *                 type: string
 *                 description: Eğitmenin bioqrafiyası
 *               category:
 *                 type: string
 *                 description: Eğitmenin kateqoriyası
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Eğitmenin şəkli
 *               socialMedia:
 *                 type: string
 *                 description: Eğitmenin sosial media hesabı
 *               description:
 *                 type: string
 *                 description: Eğitmenin təsviri
 *     responses:
 *       201:
 *         description: Eğitmen uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat və ya şəkil çatışmır
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/instructors/{id}:
 *   delete:
 *     summary: Eğitmeni Sil
 *     description: Belirtilen ID'ye sahib bir eğitmeni silir.
 *     tags: [Admin Instructor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Eğitmenin ID'si
 *     responses:
 *       200:
 *         description: Eğitmen uğurla silindi
 *       404:
 *         description: Eğitmen tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/instructors/{id}:
 *   put:
 *     summary: Eğitmeni Düzenle
 *     description: Belirtilen ID'ye sahib bir eğitmeni düzenler.
 *     tags: [Admin Instructor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Eğitmenin ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Eğitmenin adı
 *               secondName:
 *                 type: string
 *                 description: Eğitmenin soyadı
 *               title:
 *                 type: string
 *                 description: Eğitmenin ünvanı
 *               yearsOfExperience:
 *                 type: number
 *                 description: Eğitmenin təcrübə illəri
 *               certificates:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Eğitmenin sertifikatları
 *               workExperience:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Eğitmenin iş təcrübəsi
 *               bio:
 *                 type: string
 *                 description: Eğitmenin bioqrafiyası
 *               category:
 *                 type: string
 *                 description: Eğitmenin kateqoriyası
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Eğitmenin şəkli
 *               socialMedia:
 *                 type: string
 *                 description: Eğitmenin sosial media hesabı
 *               description:
 *                 type: string
 *                 description: Eğitmenin təsviri
 *     responses:
 *       200:
 *         description: Eğitmen uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat və ya şəkil çatışmır
 *       404:
 *         description: Eğitmen tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/instructors:
 *   get:
 *     summary: Tüm Eğitmenləri Al
 *     description: Tüm eğitmenləri alır.
 *     tags: [Admin Instructor]
 *     responses:
 *       200:
 *         description: Tüm eğitmenlər uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/instructors/all:
 *   get:
 *     summary: Tüm Eğitmenləri (Silinmişlər daxil olmaqla) Al
 *     description: Tüm eğitmenləri, silinmişlər daxil olmaqla alır.
 *     tags: [Admin Instructor]
 *     responses:
 *       200:
 *         description: Tüm eğitmenlər uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/instructors/restore/{id}:
 *   put:
 *     summary: Eğitmeni Geri Yükle
 *     description: Belirtilen ID'ye sahib bir eğitmeni geri yükler.
 *     tags: [Admin Instructor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Eğitmenin ID'si
 *     responses:
 *       200:
 *         description: Eğitmen uğurla geri yüklendi
 *       404:
 *         description: Eğitmen tapılmadı
 *       500:
 *         description: Server xətası
 */

InstructorRouter.get('/', adminAuthenticateToken, instructorController.getAllInstructors);
InstructorRouter.delete('/:id', adminAuthenticateToken, instructorController.deleteInstructor);
InstructorRouter.put('/restore/:id', adminAuthenticateToken, instructorController.restoreInstructor);
InstructorRouter.post('/', parseJsonFields, adminAuthenticateToken, instructorController.addInstructor);
InstructorRouter.put('/:id', parseJsonFields, adminAuthenticateToken, instructorController.editInstructor);
InstructorRouter.get('/all', adminAuthenticateToken, instructorController.getAllInstructorsIncludingDeleted);


export { InstructorRouter };