# 🍺 Beer E-Commerce

A full-stack e-commerce application for craft beers, built with Next.js, Express, TypeORM, and PostgreSQL.

![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)
![Express](https://img.shields.io/badge/Express-4.18.2-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-blue)

## 🌟 Features

- **User Authentication**: Secure login and registration with JWT
- **Product Catalog**: Browse through a selection of craft beers
- **Shopping Cart**: Add/remove products with real-time cart updates
- **Order Management**: Create and track orders
- **Responsive Design**: Optimized for mobile and desktop
- **Server-Side Rendering**: Fast page loads with Next.js
- **RESTful API**: Built with Express and TypeORM

## 🚀 Live Demo

- **Frontend**: [https://beer-e-commerce-front.vercel.app](https://beer-e-commerce-front.vercel.app)
- **Backend API**: [https://beer-e-commerce-back.vercel.app](https://beer-e-commerce-back.vercel.app)

  ## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Notifications**: SweetAlert2

### Backend
- **Runtime**: Node.js
- **Framework**: Express 4.18.2
- **Language**: TypeScript
- **ORM**: TypeORM 0.3.20
- **Database**: PostgreSQL (Neon)
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt
- **Validation**: Custom DTOs

### DevOps
- **Hosting**: Vercel (Serverless)
- **Database**: Neon PostgreSQL
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
Beer-E-Commerce/
├── front/                  # Next.js Frontend
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # React components
│   │   ├── contexts/      # Context API providers
│   │   ├── interfaces/    # TypeScript interfaces
│   │   └── mocks/         # Mock data
│   ├── public/            # Static assets
│   └── package.json
│
├── back/                   # Express Backend
│   ├── src/
│   │   ├── config/        # Database & environment config
│   │   ├── controllers/   # Route controllers
│   │   ├── dtos/          # Data Transfer Objects
│   │   ├── entities/      # TypeORM entities
│   │   ├── helpers/       # Utility functions
│   │   ├── middlewares/   # Express middlewares
│   │   ├── repositories/  # Database repositories
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── utils/         # Helper utilities
│   ├── api/               # Vercel serverless functions
│   └── package.json
│
└── README.md
```

## 👨‍💻 Author

**Fernando Arancibia**
- GitHub: [@fernando-arancibia](https://github.com/fernando-arancibia)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for seamless deployment
- Neon for PostgreSQL hosting
- All contributors and supporters

---

⭐ If you found this project helpful, please give it a star!
