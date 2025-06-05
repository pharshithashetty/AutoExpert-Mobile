# AutoExpert Mobile

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

## Contributing

Contributions are welcome!

pharshithashetty: refer:````markdown name=README.md
# Auto-Expert: Your AI-Powered Vehicle Companion 🚗🛵🚛

## Overview
Auto-Expert is your **virtual vehicle expert**—an AI-powered assistant designed to diagnose problems across all types of vehicles. Whether it's your car, motorcycle, truck, or any other vehicle exhibiting strange noises, warning lights, or performance issues, Auto-Expert helps you quickly identify the problem and suggests the best solutions—all within minutes.

## Features

- **Smart Vehicle Diagnosis**: Enter vehicle details and symptoms to receive AI-generated troubleshooting steps.
- **Comprehensive Analysis**:
  - **Problem Diagnosis**: Structured breakdown of potential issues.
  - **Possible Causes**: List of likely reasons behind the problem.
  - **Recommended Fixes**: Step-by-step solutions with required tools.
  - **Maintenance Tips**: Best practices to prevent future breakdowns.
- **User-Friendly Interface**: Clean, intuitive Streamlit design for effortless navigation.
- **Instant Insights**: Fast and accurate AI-powered recommendations.

## Tech Stack

- **Frontend:** Streamlit
- **AI Model:** Google Gemini-Pro (via LangChain)
- **Backend:** Python, LangChain

## Getting Started

### Prerequisites

- **Python 3.8+** installed on your system
- API access to **Google Gemini AI**

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/gshreyasshetty/AutoExpert-Mobile.git
   cd AutoExpert-Mobile
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure API Key**
   - Create a `.env` file in the project directory.
   - Add your API key:
     ```
     GOOGLE_API_KEY=your_google_api_key_here
     ```

4. **Run the Application**
   ```bash
   streamlit run app.py
   ```

## How to Use

1. **Enter vehicle details** (Make, Model, Year, Mileage, etc.).
2. **Describe the problem** and symptoms.
3. **Click "Get Recommendations"** to generate AI-powered insights.
4. **Review the analysis**, including possible causes, solutions, and maintenance tips.

## Future Enhancements 🚀

- **Multilingual Support** 🌍
- **Image-Based Issue Detection** 📸
- **Integration with Local Repair Shops** 🔧
- **Mobile App Version** 📱

## Contributing

Contributions are welcome! If you'd like to suggest features or improvements, please submit a pull request.

## Contact

For inquiries or collaborations, reach out at: **pharshithashetty@gmail.com**

---

**Keep your vehicle running smoothly with AI-powered diagnostics!** 🚘⚙️
```
