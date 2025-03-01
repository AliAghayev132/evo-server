

// Models
import Admin from "#models/Admin.js";
// import Settings from "#models/Settings.js";
// Services
import { HashService } from "#services/HashService.js";


// const checkSettings = async () => {
//     try {
//         const settings = await Settings.findOne({});
//         if (!settings) {
//             await Settings.create();
//             console.log("Settings created");
//         }
//         console.log("Settings already exists");

//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }

const checkAdmin = async () => {
    try {
        const existAdmin = await Admin.findOne();

        if (existAdmin) {
            console.log("Admin account already exists");
            return;
        }

        const newAdmin = new Admin({
            username: "adminEvo",
            password: HashService.HashSync('adminpassword'),
            activities: [
                {
                    message: "Admin account created for first time",
                }
            ]
        })

        await newAdmin.save();
        console.log("New Admin account created");
    } catch (error) {
        console.log("ERROR:firstTimeStart file:Check Admin Method", error);
    }
};


const firstTimeStart = async () => {
    // await checkSettings();
    await checkAdmin();
};

export { firstTimeStart };