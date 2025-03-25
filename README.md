# Upcraft - AI-Powered Upwork Proposal Generator

Upcraft is a specialized AI-powered tool designed to help Upwork users write compelling proposals and job descriptions. Built with modern web technologies, it helps freelancers save their connects by generating high-converting proposals and assists clients in creating effective job postings.

## Features

- 🤖 **AI-Powered Writing**: Generate tailored proposals and job descriptions using advanced AI
- 💰 **Save Your Connects**: Ensure higher success rates with optimized proposals
- ✨ **Best Practices Built-in**: Follow proven templates and strategies
- 🔒 **User Authentication**: Secure account management with Clerk
- 💾 **Proposal Management**: Save and organize your generated proposals
- 🎨 **Modern UI**: Beautiful, responsive design using Tailwind CSS and Shadcn UI

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel
- **Typography**: Geist Font Family

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.17 or later
- PostgreSQL database
- npm or yarn package manager

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
GEMINI_API_KEY=

#supabase

SUPABASE_URL=
SUPABASE_PRIVATE_KEY=optional
SUPABASE_ANON_KEY=optional
# Connect to Supabase via connection pooling with Supavisor.

DATABASE_URL=""

# Direct connection to the database. Used for migrations.
DIRECT_URL=""


#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/raheesahmed/upcraft.git
cd upcraft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the database:

```bash
npx prisma generate
npx prisma db push
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable UI components
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and client

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Support

For support, email support@upcraft.ai or open an issue in the repository.
