// Models
import Settings from "#models/Settings.js";
// Services
import { MessagesService } from "#services/MessagesService.js";

const getSettings = async (_, res) => {
    try {
        const settings = await Settings.findOne({});
        res.status(200).json({ success: true, message: MessagesService.success.S200, settings });
    } catch (error) {
        res.status(500).json({ message: MessagesService.error.E500 });
    }
};

const toggleBitrixForwarding = async (_, res) => {
    try {
        const settings = await Settings.findOne({});
        const newBitrixForwarding = !settings.bitrixForwarding;
        settings.bitrixForwarding = newBitrixForwarding;
        await settings.save();
        res.status(200).json({ success: true, message: MessagesService.success.S200, bitrixForwarding: newBitrixForwarding });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: MessagesService.error.E500 });
    }
};


export default { getSettings, toggleBitrixForwarding };