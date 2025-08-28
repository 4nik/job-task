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

### 2. Google OAuth Setup

This app uses **NextAuth.js** with Google OAuth for authentication.

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. **Enable Google+ API**
4. Go to **Credentials** → **Create OAuth 2.0 Client ID**
5. Set **Authorized redirect URIs**:
   - For local development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://your-netlify-site.netlify.app/api/auth/callback/google`
6. Copy the **Client ID** and **Client Secret**

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. For Production (Netlify)

Update your `.env.local` with production values:

```env
NEXTAUTH_URL=https://your-netlify-site.netlify.app
NEXTAUTH_SECRET=your-random-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

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

## NextAuth.js Authentication

This app uses **NextAuth.js** as the primary authentication system with Google OAuth.

### **Authentication Flow**
- **Primary**: NextAuth.js with Google OAuth
- **Session Management**: Secure JWT-based sessions
- **Protected Routes**: Automatic route protection

### **Available Auth Methods**
- ✅ **Google OAuth** (via NextAuth.js) - Currently active
- 🔄 **Email/Password** (via NextAuth.js) - Can be added
- 🔄 **Social Logins** (via NextAuth.js) - Can be added

### **NextAuth.js Configuration**
The authentication is configured in `src/lib/auth.js` and `src/app/api/auth/[...nextauth]/route.js`.

**Key Features:**
- JWT-based sessions
- Secure cookie management
- CSRF protection
- Automatic session refresh

**Note:** NextAuth.js is the active authentication system with Google OAuth.

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **TailwindCSS** for styling
- **Google OAuth** for sign-in
- **Mock Data** for product management
- **Route Handlers** (/api) for backend

## Deployment to Netlify

### **Quick Deploy Steps:**
1. **Connect Repository** - Link your GitHub/GitLab repo to Netlify
2. **Set Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. **Add Environment Variables:**
   ```
   NEXTAUTH_URL=https://your-netlify-site.netlify.app
   NEXTAUTH_SECRET=your-random-secret-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```
4. **Deploy** - Netlify will build and deploy automatically

### **Google OAuth for Production:**
Before deploying, update your Google OAuth settings:
1. Go to **Google Cloud Console** → **Credentials**
2. Edit your OAuth 2.0 Client ID
3. Add your Netlify domain to **Authorized redirect URIs**:
   - `https://your-site-name.netlify.app/api/auth/callback/google`

### **Manual Deploy:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Netlify Deployment Guide](https://docs.netlify.com/get-started/)