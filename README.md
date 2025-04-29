# InvisaInk - Protect Your Visual Content from AI Exploitation

![InvisaInk Logo](https://via.placeholder.com/800x200?text=InvisaInk)

## 📋 Overview

InvisaInk is a cutting-edge solution designed to protect your visual content from unauthorized AI training and misuse. Our technology disrupts AI interpretation at the pixel level while preserving human visibility, ensuring your images and videos remain secure without compromising the viewing experience.

## ✨ Features

- **AI-Resistant Protection**: Disrupts AI systems' ability to interpret and train on your visual content
- **Human-Friendly Viewing**: Maintains visual quality for human viewers while blocking AI systems
- **Watermarking Technology**: Invisible watermarking that preserves content integrity
- **Dashboard Management**: Easy-to-use interface for managing protected content
- **Supabase Integration**: Secure authentication and storage for your content
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS for a responsive experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```sh
   git clone <YOUR_REPOSITORY_URL>
   cd invisaink
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
    GEMINI_API_KEY=
    SUPABASE_URL=
    SUPABASE_SERVICE_ROLE_KEY=
   ```

4. Start the dev server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## 🛠️ Tech Stack

- **Frontend**:
  - [React](https://reactjs.org/) - UI library
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [Vite](https://vitejs.dev/) - Build tool and development server
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [shadcn/ui](https://ui.shadcn.com/) - UI component library
  - [React Router](https://reactrouter.com/) - Routing
  - [React Query](https://tanstack.com/query/latest) - Data fetching and state management

- **Backend**:
  - [Supabase](https://supabase.io/) - Backend-as-a-Service
  - [Supabase Auth](https://supabase.io/auth) - Authentication
  - [Supabase Storage](https://supabase.io/storage) - File storage
  - [Supabase Functions](https://supabase.io/edge-functions) - Serverless functions

## 📁 Project Structure

```
invisaink/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── integrations/    # Third-party service integrations
│   ├── lib/             # Utility functions and helpers
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── supabase/
│   ├── config.toml      # Supabase configuration
│   └── functions/       # Supabase Edge Functions
└── package.json         # Project dependencies and scripts
```

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application with development settings
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🔒 Authentication

InvisaInk uses Supabase Authentication for secure user management. The application supports:

- Email/password authentication
- Social login providers (configurable)
- JWT-based session management

## 🌐 Deployment

### Production Build

To create a production build:

```sh
npm run build
# or
yarn build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by the InvisaInk Team (Shaurya Bisht)