const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Twilio credentials (replace these with your own Twilio Account SID and Auth Token)
const accountSid = 'ACe411730d18f8894571174afc1530fa70';  // Add your Twilio Account SID
const authToken = 'e56684e8337afcc336531ab2e34ae7a6';    // Add your Twilio Auth Token
const twilioPhoneNumber = '+12185953619'; // Add your Twilio phone number

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Endpoint to handle sending SMS
app.post('/send-sms', (req, res) => {
    const { patientName, patientPhone, patientMessage } = req.body;

    // Validate phone number format (ensure it's in E.164 format)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(patientPhone)) {
        return res.status(400).json({ message: 'Invalid phone number format. Please use E.164 format, e.g., +1234567890' });
    }

    // Send the SMS using Twilio
    client.messages.create({
        to: patientPhone, // Patient's phone number
        from: twilioPhoneNumber, // Your Twilio phone number
        body: patientMessage, // Message body
    })
    .then((message) => {
        // Respond with success message
        res.json({ message: 'SMS sent successfully!', sid: message.sid });
    })
    .catch((error) => {
        console.error("Error sending SMS:", error);  // Log the error for debugging
        // Respond with a detailed error message
        res.status(500).json({ message: 'Failed to send SMS. Error: ' + error.message });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
