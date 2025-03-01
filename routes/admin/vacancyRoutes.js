// Variables
import { Router } from "#constants/variables.js";
// Controller
import vacancyController from "#controllers/admin/vacancyController.js";
// Middlewares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";

const VacancyRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Admin Vacancy
 *   description: Admin üçün iş elanı API son nöqtələri
 */

/**
 * @swagger
 * /admin/vacancies:
 *   post:
 *     summary: Yeni İş Elanı Əlavə Et
 *     description: Yeni bir iş elanı əlavə edir.
 *     tags: [Admin Vacancy]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: İş elanın şəkli
 *               experienceYears:
 *                 type: number
 *                 description: Təcrübə illəri
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: İş elanın tələbləri
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: İş elanın şəkli
 *     responses:
 *       201:
 *         description: İş elanı uğurla əlavə edildi
 *       400:
 *         description: Yanlış məlumat
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/vacancies/{id}:
 *   delete:
 *     summary: İş Elanını Sil
 *     description: Belirtilen ID'ye sahib bir iş elanı silir.
 *     tags: [Admin Vacancy]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: İş elanın ID'si
 *     responses:
 *       200:
 *         description: İş elanı uğurla silindi
 *       404:
 *         description: İş elanı tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/vacancies/{id}:
 *   put:
 *     summary: İş Elanını Düzenle
 *     description: Belirtilen ID'ye sahib bir iş elanı düzenler.
 *     tags: [Admin Vacancy]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: İş elanın ID'si
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               imageUrl:
 *                 type: string
 *                 description: İş elanın şəkli
 *               experienceYears:
 *                 type: number
 *                 description: Təcrübə illəri
 *               requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: İş elanın tələbləri
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: İş elanın şəkli
 *     responses:
 *       200:
 *         description: İş elanı uğurla düzenlendi
 *       400:
 *         description: Yanlış məlumat
 *       404:
 *         description: İş elanı tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/vacancies:
 *   get:
 *     summary: Tüm İş Elanlarını Al
 *     description: Tüm iş elanlarını alır.
 *     tags: [Admin Vacancy]
 *     responses:
 *       200:
 *         description: Tüm iş elanları uğurla alındı
 *       500:
 *         description: Server xətası
 */

VacancyRouter.post('/', parseJsonFields, adminAuthenticateToken, vacancyController.addVacancy);
VacancyRouter.put('/:id', parseJsonFields, adminAuthenticateToken, vacancyController.editVacancy);
VacancyRouter.delete('/:id', adminAuthenticateToken, vacancyController.deleteVacancy);
VacancyRouter.get('/', adminAuthenticateToken, vacancyController.getAllVacancies);

export { VacancyRouter };