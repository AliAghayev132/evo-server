class BitrixService {
    static async sendApplication(data) {
        try {
            const url = "https://evoacademy.bitrix24.com/rest/1/abzrfvhxavav8yl5/crm.lead.add.json";
            const payload = {
                fields: {
                    TITLE: `Sayt müraciət: ${data.name}`,
                    NAME: data.name.split(" ")[0] || "",
                    LAST_NAME: data.name.split(" ").slice(1).join(" ") || "",
                    EMAIL: [{
                        VALUE: data.email,
                        VALUE_TYPE: "WORK"
                    }],
                    PHONE: [{
                        VALUE: `${data.phone}`,
                        VALUE_TYPE: "WORK"
                    }],
                    COMMENTS: `Seçilmiş kurs: ${data.course}`,
                    Cins:"kişi",
                }
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            return response.json();
        } catch (error) {
            console.error('Error sending application:', error);
            throw error;
        }
    }
}
export { BitrixService };