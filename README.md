Margadarshi - Your Career Path Navigator
🚀 About The Project

Margadarshi is your tech-powered guide from classroom to career. In a world full of choices, it's easy for students to feel lost. Our smart quiz identifies your unique technical, creative, and analytical talents, creating a visual roadmap to your dream job. Connect with expert mentors and build your future. Your path to a successful future starts here.

This project is the frontend application built with a modern, scalable tech stack.
✨ Features

    Passwordless Authentication: Secure and easy sign-in using email links, powered by Firebase Authentication.

    Onboarding Flow: A smooth, animated introduction for new users to select their language and understand the app's purpose.

    Discovery Quiz: An engaging, gamified quiz to help students discover their strengths and interests across Technical, Creative, Social, and Analytical categories.

    Aspiration Map: A dynamic, personalized dashboard that visualizes quiz results with charts and provides tailored career path recommendations.

    Mentor Directory: A searchable and filterable directory of professional mentors, allowing students to connect with experts in their field of interest.

    English Wing: A dedicated section with vocabulary flashcards and mock interview questions to help students improve their professional English skills.

    Shareable Profile: A public, read-only version of the student's Aspiration Map that can be shared with parents, teachers, or mentors via a unique link.

🛠️ Built With

    React 18 - A JavaScript library for building user interfaces.

    Vite - A blazingly fast frontend build tool.

    TypeScript - A typed superset of JavaScript that compiles to plain JavaScript.

    Tailwind CSS - A utility-first CSS framework for rapid UI development.

    Firebase - Used for authentication (Auth) and as a database (Firestore).

    React Router v6 - For declarative routing in the application.

    Framer Motion - For smooth, declarative animations.

    Recharts - For creating beautiful and responsive charts.

🏁 Getting Started

To get a local copy up and running, follow these simple steps.
Prerequisites

You must have Node.js (version 16 or later) and npm installed on your machine.
Installation & Setup

    Clone the repository (or download the source code):

    git clone [https://github.com/your-username/margadarshi-frontend.git](https://github.com/your-username/margadarshi-frontend.git)

    Navigate to the project directory:

    cd margadarshi-frontend

    Install NPM packages:

    npm install

    Set up your Firebase Environment Variables:

        Create a new file in the root of the project named .env.

        Go to your Firebase Project Settings and find your web app's configuration object.

        Add your Firebase project keys to the .env file. It must follow this format:

        VITE_FIREBASE_API_KEY="YOUR_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_APP_ID"

    Run the development server:

    npm run dev

    The application will be available at http://localhost:5173.

📂 Folder Structure

This project uses a feature-based folder structure to keep the code organized, scalable, and easy to maintain.

/src
├── components/      # Shared, reusable components (e.g., Navbar)
├── features/        # Main application features
│   ├── auth/        # Authentication (Login, Signup)
│   ├── onboarding/  # New user onboarding flow
│   ├── quiz/        # The discovery quiz
│   └── ...          # Other features (mentors, profile, etc.)
├── hooks/           # Custom React hooks (e.g., useAuth)
├── layout/          # Layout components (e.g., RootLayout)
├── lib/             # External libraries configuration (e.g., Firebase)
├── pages/           # Top-level pages (e.g., HomePage)
└── ...

