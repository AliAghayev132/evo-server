// Variables
import { Router } from "#constants/variables.js";
// Routes
import { AuthRouter } from "./admin/authRoutes.js";
import { BlogRouter } from "./admin/blogRoutes.js";
import { ExtraRouter } from "./admin/extraRoutes.js";
import { EventRouter } from "./admin/eventRoutes.js";
import { CourseRouter } from "./admin/courseRoutes.js";
import { PartnerRouter } from "./admin/partnerRoutes.js";
import { VacancyRouter } from "./admin/vacancyRoutes.js";
import { GraduateRouter } from "./admin/graduateRoutes.js";
import { SettingsRouter } from "./admin/settingsRoutes.js";
import { InstructorRouter } from "./admin/instructorRoutes.js";


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
 *         graduatePath:
 *           type: string
 *           example: "public/uploads/graduates"
 *           description: Məzunlar üçün 
 *         blogPath:
 *           type: string
 *           example: "public/uploads/blogs"
 *           description: Bloglar üçün 
 *         resumePath:
 *           type: string
 *           example: "public/uploads/resumes"
 *           description: Cvlər. üçün 
 *         partnerPath:
 *           type: string
 *           example: "public/uploads/partners"
 *           description: Partnyorlar üçün 
 */


const AdminRouter = Router();

AdminRouter.use("/auth", AuthRouter);
AdminRouter.use("/blogs", BlogRouter);
AdminRouter.use("/extra", ExtraRouter);
AdminRouter.use("/events", EventRouter);
AdminRouter.use("/courses", CourseRouter);
AdminRouter.use("/partners", PartnerRouter);
AdminRouter.use("/vacancies", VacancyRouter);
AdminRouter.use("/settings", SettingsRouter);
AdminRouter.use("/graduates", GraduateRouter);
AdminRouter.use("/instructors", InstructorRouter);




export { AdminRouter };