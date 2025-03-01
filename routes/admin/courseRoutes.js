// Variables
import { Router } from "#constants/variables.js";
// Controller
import courseController from "#controllers/admin/courseController.js";
// Middlewares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const CourseRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Course
 *   description: Admin üçün kurs API son nöqtələri
 */

/**
 * @swagger
 * /admin/courses:
 *   post:
 *     summary: Yeni Kurs Əlavə Et
 *     description: Yeni bir kurs əlavə edir.
 *     tags: [Admin Course]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Kursun adı
 *               slug:
 *                 type: string
 *                 description: Kursun slug'ı
 *               description:
 *                 type: string
 *                 description: Kursun təsviri
 *               instructors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Kursun eğitmenləri
 *               duration:
 *                 type: string
 *                 description: Kursun müddəti
 *               syllabus:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Syllabus başlığı
 *                     description:
 *                       type: string
 *                       description: Syllabus təsviri
 *                 description: Kursun syllabus'u
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Kursun şəkli
 *     responses:
 *       201:
 *         description: Kurs uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat və ya şəkil çatışmır
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/courses/{id}:
 *   delete:
 *     summary: Kursu Sil
 *     description: Belirtilen ID'ye sahib bir kursu silir.
 *     tags: [Admin Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Kursun ID'si
 *     responses:
 *       200:
 *         description: Kurs uğurla silindi
 *       404:
 *         description: Kurs tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/courses/{id}:
 *   put:
 *     summary: Kursu Düzenle
 *     description: Belirtilen ID'ye sahib bir kursu düzenler.
 *     tags: [Admin Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Kursun ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Kursun adı
 *               slug:
 *                 type: string
 *                 description: Kursun slug'ı
 *               description:
 *                 type: string
 *                 description: Kursun təsviri
 *               instructors:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Kursun eğitmenləri
 *               duration:
 *                 type: string
 *                 description: Kursun müddəti
 *               syllabus:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: Syllabus başlığı
 *                     description:
 *                       type: string
 *                       description: Syllabus təsviri
 *                 description: Kursun syllabus'u
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Kursun şəkli
 *     responses:
 *       200:
 *         description: Kurs uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat və ya şəkil çatışmır
 *       404:
 *         description: Kurs tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/courses:
 *   get:
 *     summary: Tüm Kursları Al
 *     description: Tüm kursları alır.
 *     tags: [Admin Course]
 *     responses:
 *       200:
 *         description: Tüm kurslar uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/courses/all:
 *   get:
 *     summary: Tüm Kursları (Silinmişlər daxil olmaqla) Al
 *     description: Tüm kursları, silinmişlər daxil olmaqla alır.
 *     tags: [Admin Course]
 *     responses:
 *       200:
 *         description: Tüm kurslar uğurla alındı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/courses/restore/{id}:
 *   put:
 *     summary: Kursu Geri Yükle
 *     description: Belirtilen ID'ye sahib bir kursu geri yükler.
 *     tags: [Admin Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Kursun ID'si
 *     responses:
 *       200:
 *         description: Kurs uğurla geri yüklendi
 *       404:
 *         description: Kurs tapılmadı
 *       500:
 *         description: Server xətası
 */

CourseRouter.post('/', parseJsonFields, adminAuthenticateToken, courseController.addCourse);
CourseRouter.put('/:id', parseJsonFields, adminAuthenticateToken, courseController.editCourse);
CourseRouter.get('/', adminAuthenticateToken, courseController.getAllCourses);
CourseRouter.delete('/:id', adminAuthenticateToken, courseController.deleteCourse);
CourseRouter.put('/restore/:id', adminAuthenticateToken, courseController.restoreCourse);
CourseRouter.get('/all', adminAuthenticateToken, courseController.getAllCoursesWithDeleted);

export { CourseRouter };