# ProductApp

A simple product management application built with Next.js 15 (App Router) and NextAuth.js for authentication.

## Features

- **Landing Page (/)**: Hero section, product highlights, and navigation
- **Authentication**: Google OAuth integration using NextAuth.js
- **Product Management**:
  - Public product listing (/products)
  - Product details pages (/products/[id])
  - Protected add product page (/dashboard/add-product)
- **Responsive Design**: Built with TailwindCSS

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-generate-a-random-string

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# Firebase Configuration (For Authentication)
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Set authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local` file

### 4. Firebase Setup (For Authentication)

To use Firebase Authentication alongside NextAuth.js:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication service
4. Go to Project Settings > General > Your apps
5. Add a web app and copy the configuration values
6. Update your `.env.local` file with the Firebase config values

**Required Firebase Configuration:**
- **API Key**: Found in Project Settings > General > Your apps
- **Auth Domain**: `your-project.firebaseapp.com`
- **Project ID**: Your Firebase project ID

**Optional Firebase Services:**
- **Firestore**: Enable for database functionality (not included in this setup)
- **Storage**: Enable for file storage (not included in this setup)
- **Analytics**: Enable for user analytics (not included in this setup)

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/
│   │   │   └── route.js
│   │   └── products/
│   │       ├── route.js
│   │       └── [id]/
│   │           └── route.js
│   ├── dashboard/
│   │   └── add-product/
│   │       └── page.js
│   ├── login/
│   │   └── page.js
│   ├── products/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── providers.js
├── components/
│   ├── landing/
│   │   ├── Hero.js
│   │   └── ProductHighlights.js
│   ├── Footer.js
│   └── Navbar.js
└── lib/
    ├── auth.js
    └── mockData.js
```

## API Routes

- `GET /api/products` - Get all products
- `POST /api/products` - Add a new product (requires authentication)
- `GET /api/products/[id]` - Get a single product
- `PUT /api/products/[id]` - Update a product (requires authentication)
- `DELETE /api/products/[id]` - Delete a product (requires authentication)

## Firebase Authentication

This app uses Firebase Authentication alongside NextAuth.js to provide additional authentication options:

### **Authentication Flow**
- **Primary**: NextAuth.js with Google OAuth (configured and working)
- **Secondary**: Firebase Auth (available for additional auth methods)
- **Hybrid Approach**: You can use both or choose one

### **Available Auth Methods**
- **Google OAuth** (via NextAuth.js) - Currently active
- **Email/Password** (via Firebase Auth) - Ready to implement
- **Phone Authentication** (via Firebase Auth) - Ready to implement
- **Social Logins** (via Firebase Auth) - Ready to implement

### **Using Firebase Auth**
The Firebase authentication helpers are available in `src/lib/firebaseAuth.js`:

```javascript
import { signInWithGoogle, signOutFirebase, onAuthStateChange } from '../lib/firebaseAuth';

// Sign in with Google using Firebase
await signInWithGoogle();

// Sign out
await signOutFirebase();

// Listen to auth state changes
onAuthStateChange((user) => {
  console.log('User:', user);
});
```

**Note:** Currently using NextAuth.js for authentication. Firebase Auth is configured for future use if needed.

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **TailwindCSS** for styling
- **Google OAuth** for authentication
- **Firebase** for additional authentication options

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)