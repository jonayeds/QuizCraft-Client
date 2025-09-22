# QuizCraft Client 🌟

A modern, responsive React Next.js frontend application for QuizCraft - an intelligent quiz creation and management platform with beautiful UI/UX and AI-powered features.

## Live Demo
🔗 **[QuizCraft Live Demo](https://quizcraft-client.vercel.app/)**

## 🚀 Features

### 🎨 Modern UI/UX
- **Beautiful gradient design** with glassmorphism effects
- **Fully responsive** design for all device sizes
- **Tailwind CSS** with custom styling and animations
- **Radix UI components** for consistent, accessible interface
- **Dark theme optimized** for better user experience

### 🔐 Authentication System
- **NextAuth.js integration** with Google OAuth
- **JWT token management** with secure cookie storage
- **Social login** with Google Sign-In
- **Session management** and protected routes
- **User profile management** with authentication state

### 🧠 AI-Powered Quiz Creation
- **Intelligent quiz generation** using AI
- **Topic-based question creation** with custom categories
- **Real-time question preview** and editing
- **Automatic scoring calculation** for fair assessment
- **Dynamic difficulty adjustment** based on content

### 📊 Quiz Management
- **Create and manage quizzes** with intuitive interface
- **Join quizzes with codes** for easy participation
- **Real-time quiz taking** with progress tracking
- **Answer review and analytics** with detailed insights
- **Leaderboard and scoring** system for competitive learning

### 📱 Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Touch-friendly interactions** for mobile devices
- **Adaptive layouts** for tablets and desktops
- **Smooth animations** and transitions
- **Optimized performance** across all devices

### 🎯 User Experience
- **Interactive dashboard** with quiz statistics
- **Real-time notifications** using React Hot Toast
- **Form validation** with React Hook Form and Zod
- **Loading states and error handling** for better UX
- **Keyboard navigation** and accessibility features

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework
- **NextAuth.js** - Complete authentication solution
- **Radix UI** - Low-level UI primitives
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation
- **React Hot Toast** - Beautiful notifications
- **Moment.js** - Date and time manipulation
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
quizcraft-client/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (withCommonLayout)/ # Layout group
│   │   │   ├── about/          # About page
│   │   │   ├── create-quiz/    # Quiz creation
│   │   │   ├── join-quiz/      # Quiz joining
│   │   │   ├── my-quizzes/     # User's quizzes
│   │   │   │   ├── created/    # Created quizzes
│   │   │   │   └── joined/     # Joined quizzes
│   │   │   └── topics/         # Available topics
│   │   ├── auth/               # Authentication pages
│   │   ├── api/                # API routes
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/             # React components
│   │   ├── auth/              # Authentication components
│   │   ├── forms/             # Form components
│   │   ├── quiz/              # Quiz-related components
│   │   ├── question/          # Question components
│   │   ├── ui/                # Reusable UI components
│   │   └── providers/         # Context providers
│   ├── services/              # API service functions
│   │   ├── auth/              # Authentication services
│   │   ├── quiz/              # Quiz services
│   │   ├── topic/             # Topic services
│   │   └── user/              # User services
│   ├── types/                 # TypeScript type definitions
│   ├── config/                # Configuration files
│   └── auth.ts                # NextAuth configuration
├── public/                    # Static assets
├── .env                       # Environment variables
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**
- **QuizCraft Server** running (see backend README)

### 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jonayeds/QuizCraft-Client.git
   cd QuizCraft-Client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   # Server Configuration
   SERVER_URL=http://localhost:8000/api/v1
   LOCAL_SERVER_URL=http://localhost:8000/api/v1
   ENVIRONMENT=development
   
   # NextAuth Configuration
   AUTH_SECRET=your-super-secret-nextauth-key-here
   NEXTAUTH_URL=http://localhost:3000
   
   # Google OAuth Configuration
   AUTH_GOOGLE_ID=your-google-oauth-client-id
   AUTH_GOOGLE_SECRET=your-google-oauth-client-secret
   ```

4. **Set up Google OAuth:**
   
   **Create Google OAuth Credentials:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable Google+ API
   - Go to Credentials → Create Credentials → OAuth 2.0 Client ID
   - Set authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://your-domain.vercel.app/api/auth/callback/google` (production)
   - Copy Client ID and Client Secret to your `.env` file

5. **Generate NextAuth Secret:**
   ```bash
   openssl rand -base64 32
   # Copy the output to AUTH_SECRET in your .env file
   ```

### 🏃‍♂️ Running the Application

**Development mode with hot reload:**
```bash
npm run dev
# or
yarn dev
```

**Production build:**
```bash
# Build the project
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

**Linting:**
```bash
npm run lint
# or
yarn lint
```

The application will start on `http://localhost:3000` by default.

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `SERVER_URL` | Backend API URL | ✅ Yes | - |
| `LOCAL_SERVER_URL` | Local backend URL | ❌ No | - |
| `ENVIRONMENT` | Environment mode | ❌ No | development |
| `AUTH_SECRET` | NextAuth secret key | ✅ Yes | - |
| `NEXTAUTH_URL` | Application base URL | ✅ Yes | - |
| `AUTH_GOOGLE_ID` | Google OAuth Client ID | ✅ Yes | - |
| `AUTH_GOOGLE_SECRET` | Google OAuth Secret | ✅ Yes | - |

### Tailwind Configuration

The project uses Tailwind CSS v4 with custom configuration:
- **Custom color palette** with gradient themes
- **Responsive breakpoints** for all device sizes
- **Custom animations** for smooth interactions
- **Glassmorphism utilities** for modern design effects

### TypeScript Configuration

- **Strict mode enabled** for better type safety
- **Path aliases** configured for clean imports
- **Custom type definitions** for API responses
- **Component prop types** for better development experience

## 🎨 Styling Guide

### Design System

- **Primary Gradient:** `from-[#907CD3] to-[#4d438b]`
- **Glass Effects:** `bg-white/10 backdrop-blur-md`
- **Border Styles:** `border border-white/20`
- **Text Hierarchy:** White primary, white/80 secondary, white/60 tertiary

### Component Patterns

```tsx
// Glassmorphism Card
<div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
  {/* Content */}
</div>

// Gradient Button
<button className="bg-gradient-to-r from-[#907CD3] to-[#4d438b] text-white rounded-xl px-6 py-3">
  {/* Button Text */}
</button>

// Responsive Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid Items */}
</div>
```

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Usage |
|------------|-------------|-------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Small desktops |
| `xl` | 1280px+ | Large desktops |
| `2xl` | 1536px+ | Extra large screens |

## 🧪 Testing

**Run linting:**
```bash
npm run lint
```

**Type checking:**
```bash
npx tsc --noEmit
```

**Manual testing checklist:**
- [ ] Authentication flow (login/logout)
- [ ] Quiz creation and editing
- [ ] Quiz taking and submission
- [ ] Responsive design on different devices
- [ ] Error handling and loading states

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard:**
   - `SERVER_URL` → Your production backend URL
   - `AUTH_SECRET` → Your NextAuth secret
   - `AUTH_GOOGLE_ID` → Google OAuth Client ID
   - `AUTH_GOOGLE_SECRET` → Google OAuth Secret
   - `NEXTAUTH_URL` → Your Vercel app URL

3. **Update Google OAuth redirect URIs:**
   - Add your Vercel domain to authorized redirect URIs
   - Format: `https://your-app.vercel.app/api/auth/callback/google`

4. **Deploy automatically on push**

### Manual Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Other Deployment Platforms

**Netlify:**
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `out` (if using static export)
4. Add environment variables

**Railway:**
1. Connect your GitHub repository
2. Add environment variables
3. Deploy automatically

## 🔍 Troubleshooting

### Common Issues

**Build Failures:**
- Check all environment variables are set
- Ensure backend server is accessible
- Verify TypeScript types are correct

**Authentication Issues:**
- Verify Google OAuth credentials
- Check redirect URIs are correctly configured
- Ensure AUTH_SECRET is properly set

**API Connection Issues:**
- Verify SERVER_URL is correct
- Check CORS configuration on backend
- Ensure backend server is running

**Styling Issues:**
- Clear Tailwind CSS cache: `npm run build`
- Check for conflicting CSS classes
- Verify responsive breakpoints

### Debug Mode

Enable debug mode by adding to your `.env`:
```env
NEXTAUTH_DEBUG=true
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes with proper TypeScript types**
4. **Test your changes thoroughly**
5. **Commit your changes:**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines

- Use **TypeScript** for all new code
- Follow **React best practices** and hooks patterns
- Use **Tailwind CSS** for styling (no custom CSS unless necessary)
- Implement **proper error handling** and loading states
- Write **meaningful commit messages**
- Add **comments** for complex logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **NextAuth.js** for seamless authentication
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible component primitives
- **Vercel** for excellent deployment platform

## 📧 Support

For support:
- Create an issue in the repository
- Check existing issues for solutions
- Contact the development team

---

**Built with ❤️ for better learning experiences! 🎓**

