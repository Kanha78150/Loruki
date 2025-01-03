const formModel = require('../models/indexFormModel');

module.exports.homeController = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { name, email, company } = req.body;

            // Server-side validation
            if (!name || !email || !company) {
                return res.status(400).send("All fields are required.");
            }

            const newForm = new formModel({ name, email, company });
            await newForm.save();
            console.log(newForm);
            // Generate a unique success message
            const uniqueMessage = `Thank you, ${name}! Your form has been successfully submitted.`;

            return res.status(200).json({ success: true, message: uniqueMessage });

        } catch (error) {
            const errorMessage = error.code === 11000 ? "Email already exists." : "An error occurred.";
            return res.status(400).json(errorMessage);
        }
    } else {
        res.render("index"); // Render the form for GET requests
    }
};
