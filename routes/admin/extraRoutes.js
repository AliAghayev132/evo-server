// Variables
import { Router } from "#constants/variables.js";
// Controller
import extraController from "#controllers/admin/extraController.js";
// Middelwares
import { parseJsonFields } from "#middlewares/parseJsonFields.js";
import { adminAuthenticateToken } from "#middlewares/adminAuthenticateToken.js";


const ExtraRouter = Router();

/**
 * @swagger
 * /admin/extra/vacancy-applications:
 *   get:
 *     summary: Get vacancy applications
 *     tags: 
 *       - Admin Extra
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved vacancy applications
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /admin/extra/course-applications:
 *   get:
 *     summary: Get course applications
 *     tags: 
 *       - Admin Extra
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Name to filter course applications (optional)
 *     responses:
 *       200:
 *         description: Successfully retrieved course applications
 *       401:
 *         description: Unauthorized
 */
ExtraRouter.get('/course-applications', adminAuthenticateToken, extraController.getCourseApplications);
ExtraRouter.get('/vacancy-applications', adminAuthenticateToken, extraController.getVacancyApplications);


export { ExtraRouter };