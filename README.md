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
git clone https://github.com/username/nama-dashboard.git # Clone the repository

cd nama-dashboard # Navigate to the project directory

npm install # Install all dependencies

npm run dev # Start the development server
```

## ⚙️ Configuration

Create file .env.local:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
Sesuaikan dengan kebutuhanmu.
```

## 🧩 Project Structure

```bash
app/
  ├── dashboard/
  ├── auth/
  ├── layout.tsx
components/
  ├── ui/
  └── sidebar.tsx
lib/
  ├── utils.ts
  └── auth.ts
public/
  └── preview.png
```

## ✍️ Lisensi

[MIT License](https://github.com/yogiyendri/metafora-template/blob/main/LICENSE)

## 👤 Author

- Yogi Yendri Saputra
- GitHub: [@yogiyendri](https://github.com/yogiyendri)
