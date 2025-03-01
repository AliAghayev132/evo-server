import Instructor from "#models/Instructor.js";

class ValidatorService {
    static validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    }
    static validateInstructor(instructor) {
        const errors = [];

        if (!instructor.firstName || typeof instructor.firstName !== 'string') {
            errors.push("First name is required and must be a string.");
        }

        if (!instructor.description || typeof instructor.description !== 'string') {
            errors.push("Description is required and must be a string.");
        }
        if (!instructor.secondName || typeof instructor.secondName !== 'string') {
            errors.push("Second name is required and must be a string.");
        }

        if (!instructor.title || typeof instructor.title !== 'string') {
            errors.push("Title is required and must be a string.");
        }

        if (!Number.isInteger(instructor.yearsOfExperience) || instructor.yearsOfExperience < 0) {
            errors.push("Years of experience is required and must be a non-negative integer.");
        }

        if (!Array.isArray(instructor.certificates) || instructor.certificates.some(cert => typeof cert !== 'string')) {
            errors.push("Certificates are required and must be an array of strings.");
        }

        if (!Array.isArray(instructor.workExperience) || instructor.workExperience.some(exp => typeof exp !== 'string')) {
            errors.push("Work experience is required and must be an array of strings.");
        }

        if (!instructor.bio || typeof instructor.bio !== 'string') {
            errors.push("Bio is required and must be a string.");
        }

        if (!instructor.category || typeof instructor.category !== 'string') {
            errors.push("Category is required and must be a string.");
        }

        if (!instructor.socialMedia || typeof instructor.socialMedia !== 'string') {
            errors.push("Social media is required and must be a string.");
        }

        return {
            isValid: errors.length === 0,
            message: errors.length > 0 ? errors.join(' ') : "Instructor is valid."
        };
    }
    static async validateCourse(course) {
        const errors = [];

        if (!course.title || typeof course.title !== 'string') {
            errors.push("Title is required and must be a string.");
        }

        if (!course.slug || typeof course.slug !== 'string') {
            errors.push("Slug is required and must be a string.");
        }

        if (!course.description || typeof course.description !== 'string') {
            errors.push("Description is required and must be a string.");
        }

        if (!Array.isArray(course.instructors) || course.instructors.length === 0) {
            errors.push("Instructors must be a non-empty array.");
        } else {
            for (const instructorId of course.instructors) {
                if (typeof instructorId !== 'string') {
                    errors.push("Each instructor ID must be a string.");
                    break;
                }
                const instructor = await Instructor.findById(instructorId);
                if (!instructor || instructor.isDeleted) {
                    errors.push(`Instructor with ID ${instructorId} does not exist or is deleted.`);
                    break;
                }
            }
        }

        if (!course.duration || typeof course.duration !== 'string') {
            errors.push("Duration is required and must be a string.");
        }

        if (!Array.isArray(course.syllabus) || course.syllabus.some(item => typeof item.title !== 'string' || typeof item.description !== 'string')) {
            errors.push("Syllabus must be an array of objects with title and description as strings.");
        }

        if (course.imageUrl && typeof course.imageUrl !== 'string') {
            errors.push("Image URL must be a string if provided.");
        }

        return {
            isValid: errors.length === 0,
            message: errors.length > 0 ? errors.join(' ') : "Course is valid."
        };
    }
    static validateEvent(event) {
        const errors = [];

        if (!event.title || typeof event.title !== 'string') {
            errors.push("Title is required and must be a string.");
        }

        if (!event.slug || typeof event.slug !== 'string') {
            errors.push("Slug is required and must be a string.");
        }

        if (!event.date || typeof event.date !== 'string') {
            errors.push("Date is required and must be a string.");
        }

        if (!event.schedule || typeof event.schedule !== 'object') {
            errors.push("Schedule is required and must be an object.");
        } else {
            if (!event.schedule.openingTime || typeof event.schedule.openingTime !== 'string') {
                errors.push("Opening time is required and must be a string.");
            }
            if (!event.schedule.closingTime || typeof event.schedule.closingTime !== 'string') {
                errors.push("Closing time is required and must be a string.");
            }
        }

        if (!event.description || typeof event.description !== 'string') {
            errors.push("Description is required and must be a string.");
        }

        if (!Array.isArray(event.dailyPlans) || !event.dailyPlans.length > 0 || event.dailyPlans.some(plan => typeof plan !== 'string')) {
            errors.push("Daily plans must be an array of strings.");
        }

        if (!Array.isArray(event.organizers) || !event.organizers.length > 0 || event.organizers.some(org => typeof org.name !== 'string' || typeof org.position !== 'string' || typeof org.company !== 'string')) {
            errors.push("Organizers must be an array of objects with name, position, and company as strings.");
        }

        return {
            isValid: errors.length === 0,
            message: errors.length > 0 ? errors.join(' ') : "Event is valid."
        };
    }
    static validateVacancy(vacancy) {
        const errors = [];

        if (!vacancy.description || typeof vacancy.description !== 'string') {
            errors.push("Description is required and must be a string.");
        }
        
        if (!vacancy.title || typeof vacancy.title !== 'string') {
            errors.push("Title is required and must be a string.");
        }
        
        if (!Number.isInteger(vacancy.experienceYears) || vacancy.experienceYears < 0) {
            errors.push("Experience years is required and must be a non-negative integer.");
        }

        if (!Array.isArray(vacancy.requirements) || !vacancy.requirements.length > 0 || vacancy.requirements.some(req => typeof req !== 'string')) {
            errors.push("Requirements must be an array of strings.");
        }

        
        if (!Array.isArray(vacancy.duties) || !vacancy.duties.length > 0 || vacancy.duties.some(req => typeof req !== 'string')) {
            errors.push("Duties must be an array of strings.");
        }

        return {
            isValid: errors.length === 0,
            message: errors.length > 0 ? errors.join(' ') : "Vacancy is valid."
        };
    }
    static validateGraduate(graduate) {
        const errors = [];

        if (!graduate.firstName || typeof graduate.firstName !== 'string') {
            errors.push("First name is required and must be a string.");
        }

        if (!graduate.secondName || typeof graduate.secondName !== 'string') {
            errors.push("Second name is required and must be a string.");
        }

        if (!graduate.title || typeof graduate.title !== 'string') {
            errors.push("Title is required and must be a string.");
        }

        if (!graduate.employer || typeof graduate.employer !== 'string') {
            errors.push("Employer is required and must be a string.");
        }

        if (!graduate.comment || typeof graduate.comment !== 'string') {
            errors.push("Comment is required and must be a string.");
        }


        if (graduate.socialMedia && typeof graduate.socialMedia !== 'string') {
            errors.push("Social media must be a string if provided.");
        }

        return {
            isValid: errors.length === 0,
            message: errors.length > 0 ? errors.join(' ') : "Graduate is valid."
        };
    }
}

export { ValidatorService };