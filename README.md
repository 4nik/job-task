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
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Client ID
5. Set authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local` file

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

## Technologies Used

- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- **TailwindCSS** for styling
- **Google OAuth** for authentication

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)