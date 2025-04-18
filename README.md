# Metafora Template - Next.js + Shadcn UI

A modern and minimalist dashboard template built with Next.js (App Router) and Shadcn UI, perfect for admin panels, monitoring systems, or custom CMS projects.

## ✨ Features

- Built with Next.js App Router
- Shadcn UI with Tailwind CSS
- Reusable UI components
- Modular and scalable structure
- Dark mode support
- Ready to deploy to Vercel

## 🛠️ Tech Stack

- Framework: Next.js
- UI Library: Shadcn UI
- Styling: Tailwind CSS
- State Management: (Opsional - can use Zustand, Redux, Context)
- Authentication: NextAuth/Auth.js

## 🚀 Installation

```bash
git clone https://github.com/yogiyendri/metafora-template.git # Clone the repository

cd metafora-template # Navigate to the project directory

npm install # Install all dependencies

npm run dev # Start the development server
```

## ⚙️ Configuration

Copy file .env.example and rename it to .env.local

```env
AUTH_SECRET="secret" # Added by `npx auth`. Read more: https://cli.authjs.dev
```

## 🧩 Project Structure

```bash
action/
app/
  ├── (dashboard)
  ├── api/
  ├── auth/
  ├── layout.tsx
components/
  ├── auth/
  ├── charts/
  ├── ui/
  ├── widgets/
  └── sidebar
config/
  ├── auth.config.ts
  ├── auth.ts
  └── fonts.ts
  └── nav-items.ts
  └── route.ts
hooks/
lib/
  ├── validations/
  └── utils.ts
```

## ✍️ Lisensi

[MIT License](https://github.com/yogiyendri/metafora-template/blob/main/LICENSE)

## 👤 Author

- Yogi Yendri Saputra
- GitHub: [@yogiyendri](https://github.com/yogiyendri)
