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

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (local or Neon)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/fernando-arancibia/Beer-E-Commerce.git
cd Beer-E-Commerce
```

2. **Setup Backend**
```bash
cd back
npm install
```

Create a `.env` file in the `back/src` directory:
```env
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=beer_ecommerce
JWT_SECRET=your_secret_key
# For production with Neon
DATABASE_URL=postgresql://user:pass@host/dbname?sslmode=require
```

3. **Setup Frontend**
```bash
cd ../front
npm install
```

Create a `.env` file in the `front` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Running Locally

1. **Start the backend**
```bash
cd back
npm start
```
Backend will run on `http://localhost:3001`

2. **Start the frontend**
```bash
cd front
npm run dev
```
Frontend will run on `http://localhost:3000`

## 🌐 Deployment

### Backend Deployment (Vercel)

1. Create a new project on [Vercel](https://vercel.com)
2. Select the repository
3. Configure:
   - **Root Directory**: `back`
   - **Framework Preset**: Other
4. Add environment variables:
   ```
   DATABASE_URL=your_neon_postgresql_url
   JWT_SECRET=your_secret_key
   ```
5. Deploy

### Frontend Deployment (Vercel)

1. Create another project on Vercel
2. Select the same repository
3. Configure:
   - **Root Directory**: `front`
   - **Framework Preset**: Next.js
4. Add environment variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
   ```
5. Deploy

### Database Setup (Neon)

1. Create a free account on [Neon](https://neon.tech)
2. Create a new project
3. Copy the **Pooled Connection** string
4. Add to Vercel backend environment variables
5. Visit `https://your-backend.vercel.app/seed` to initialize data

## 📚 API Endpoints

### Authentication
- `POST /users/register` - Register new user
- `POST /users/login` - User login

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

### Orders
- `POST /orders` - Create new order
- `GET /orders` - Get user orders

## 🔐 Environment Variables

### Backend
| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string (Production) | Yes |
| `DB_HOST` | Database host (Development) | Yes |
| `DB_PORT` | Database port (Development) | Yes |
| `DB_USER` | Database user (Development) | Yes |
| `DB_PASSWORD` | Database password (Development) | Yes |
| `DB_NAME` | Database name (Development) | Yes |
| `JWT_SECRET` | Secret key for JWT | Yes |
| `PORT` | Server port | No (default: 3001) |

### Frontend
| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

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