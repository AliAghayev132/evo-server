// Variables
import { Router } from "#constants/variables.js";
// Controller
import authController from "#controllers/admin/authController.js";

// Middlewares
import { adminAuthenticateToken, adminAuthenticateTokenWithRefresh } from "#middlewares/adminAuthenticateToken.js";

/**
 * @swagger
 * tags:
 *   name: Admin Auth
 *   description: İstifadəçi autentifikasiyası üçün API son nöqtələri (qeydiyyat, giriş, refreshToken)
 */

/**
 * @swagger
 * /admin/auth/refresh-token:
 *   get:
 *     summary: Giriş Tokenini Yenilə
 *     description: İstifadəçinin refresh tokenindən istifadə edərək yeni bir giriş tokeni alır.
 *     tags: [Admin Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Token yeniləmə uğurlu oldu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: Yeni giriş tokeni
 *                 success:
 *                   type: boolean
 *                   description: Əməliyyatın vəziyyəti
 *                 messages:
 *                   type: string
 *                   description: Uğur mesajı
 *       400:
 *         description: Refresh token çatışmır və ya etibarsızdır
 *       401:
 *         description: Refresh token etibarsızdır
 *       404:
 *         description: Admin tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/auth/login:
 *   post:
 *     summary: Admin Giriş Et
 *     description: Adminin istifadəçi adı və şifrəsi ilə giriş etməsini təmin edir.
 *     tags: [Admin Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Admin istifadəçi adı
 *               password:
 *                 type: string
 *                 description: Admin şifrəsi
 *     responses:
 *       200:
 *         description: Giriş uğurlu oldu və token yaradıldı
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Əməliyyatın vəziyyəti
 *                 messages:
 *                   type: string
 *                   description: Uğur mesajı
 *                 tokens:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                       description: Giriş tokeni
 *                     refreshToken:
 *                       type: string
 *                       description: Refresh token
 *       400:
 *         description: Yanlış şifrə və ya istifadəçi adı
 *       404:
 *         description: Admin tapılmadı
 *       500:
 *         description: Server xətası
 */

/**
 * @swagger
 * /admin/auth/change-password:
 *   put:
 *     summary: Admin Şifrəni Dəyiş
 *     description: Adminin mövcud şifrəsini təsdiqləyərək yeni bir şifrə təyin etməsini təmin edir.
 *     tags: [Admin Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Mövcud şifrə
 *               newPassword:
 *                 type: string
 *                 description: Yeni şifrə
 *     responses:
 *       200:
 *         description: Şifrə uğurla dəyişdirildi
 *       400:
 *         description: Şifrə çatışmır və ya yanlışdır
 *       404:
 *         description: Admin tapılmadı
 *       500:
 *         description: Server xətası
 */

const AuthRouter = Router();

// Login
AuthRouter.post('/login', authController.login);
// Refresh Token
AuthRouter.get("/refresh-token", adminAuthenticateTokenWithRefresh, authController.refreshAccessToken);
// Change Password
AuthRouter.put('/change-password', adminAuthenticateToken, authController.changePassword);




export { AuthRouter };  