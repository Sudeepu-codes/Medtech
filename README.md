# Medical Reminder System

A **Medical Reminder System** designed to help doctors manage patient medication schedules and remind patients to take their medications on time. The system sends automated reminders via **SMS** or **Email** and allows both doctors and patients to update health vitals such as BP, sugar levels, and more.

---

## Features

### **Doctor's Portal**:
- **Enter Patient Details**: Add patient information, including their name, phone number, health conditions, and prescribed medications.
- **Set Medication Schedule**: Define a schedule for medications and send reminders to the patient via SMS or Email.
- **Monitor Health Vitals**: View updated health vitals from the patient, including BP and sugar levels.
  
### **Patient's Portal**:
- **View Medication Schedule**: See the list of prescribed medications and the timing for each.
- **Confirm Medication**: Confirm whether medications were taken as per the schedule.
- **Update Health Vitals**: Update the patient's health vitals (BP, sugar, temperature).
  
### **Automated Reminders**:
- **SMS and Email Reminders**: Doctors can send automatic medication reminders to patients' mobile numbers or emails.
- **Customized Messages**: Doctors can customize the reminder message to suit the patient's needs.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **SMS Service**: Twilio or BulkSMS (depending on the configuration)
- **Email Service**: SendGrid or Nodemailer
- **Version Control**: Git, GitHub

---



### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- **Twilio** or **BulkSMS** account (for sending SMS reminders)
- **SendGrid** account (for sending email reminders)

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/yourusername/medical-reminder-system.git
```