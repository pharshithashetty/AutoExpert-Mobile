# Auto-Expert: Your AI-Powered Vehicle Companion 🚗🛵🚛

AutoExpert Mobile is a React Native application that uses AI to diagnose vehicle problems based on user input. It leverages Google's Generative AI to provide detailed diagnosis reports, possible causes, recommended solutions, and maintenance tips.

## Features

- **Vehicle Diagnosis**: Input vehicle details and symptoms to get AI-generated diagnosis reports.
- **Interactive Form**: User-friendly form for entering vehicle information and problem descriptions.
- **AI Integration**: Powered by Google's Generative AI for accurate and structured responses.
- **Cross-Platform**: Runs on Android, iOS, and Web using Expo.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pharshithashetty/AutoExpert-Mobile.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the required API key:
   ```env
   GOOGLE_API_KEY=your-google-api-key
   ```

4. Start the development server:
   ```bash
   npm run start
   ```

## Usage

1. Launch the app on your preferred platform:
   - React Native : `npm run start`

3. Fill out the diagnosis form with vehicle details and symptoms.

4. Submit the form to receive a detailed diagnosis report.

## Project Structure

```
AutoExpert Mobile/
├── assets/                # Static assets like icons and images
├── components/            # React components (e.g., DiagnosisForm)
├── services/              # API services (e.g., gemini.ts)
├── App.tsx                # Main application entry point
├── index.ts               # Root component registration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .env                   # Environment variables
```

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: For cross-platform development.
- **Google Generative AI**: For generating diagnosis reports.
- **TypeScript**: For type-safe development.

## Environment Variables

This project uses the following environment variables:

- `GOOGLE_API_KEY`: Your API key for accessing Google's Generative AI.

Contributions are welcome! If you'd like to suggest features or improvements, please submit a pull request.

## Contact

For inquiries or collaborations, reach out at: **pharshithashetty@gmail.com**

---

**Keep your vehicle running smoothly with AI-powered diagnostics!** 🚘⚙️
```
