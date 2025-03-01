// Variables
import { Router } from "#constants/variables.js";
// Routes
import { AuthRouter } from "./admin/authRoutes.js";
import { EventRouter } from "./admin/eventRoutes.js";
import { CourseRouter } from "./admin/courseRoutes.js";
import { InstructorRouter } from "./admin/instructorRoutes.js";
import { VacancyRouter } from "./admin/vacancyRoutes.js";


/**
 * @swagger
 * components:
 *   schemas:
 *     FilePaths:
 *       type: object
 *       properties:
 *         coursePath:
 *           type: string
 *           example: "public/uploads/courses"
 *           description: Kurslar üçün dosya yükleme yolu
 *         vacancyPath:
 *           type: string
 *           example: "public/uploads/vacancies"
 *           description: İş elanları üçün dosya yükleme yolu
 *         instructorPath:
 *           type: string
 *           example: "public/uploads/instructors"
 *           description: Eğitmenler üçün dosya yükleme yolu
 */


const AdminRouter = Router();

AdminRouter.use("/auth", AuthRouter);
AdminRouter.use("/events", EventRouter);
AdminRouter.use("/courses", CourseRouter);
AdminRouter.use("/vacancies", VacancyRouter);
AdminRouter.use("/instructors", InstructorRouter);



export { AdminRouter };