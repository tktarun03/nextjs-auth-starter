# nextjs-auth-starter

A simple authentication system in Next.js using NextAuth.js for secure login.

## 🚀 Features
- Uses **NextAuth.js** for authentication.
- Supports **Google sign-in**.
- Fully **Next.js 12** compatible.

## 📂 Project Structure
```
nextjs-auth-starter/
│── pages/
│   ├── index.js  # UI with authentication logic
│   ├── api/
│   │   ├── [...nextauth].js  # NextAuth.js API route
│── .env.local  # Environment variables
│── package.json  # Dependencies
│── README.md
```

## 🛠 Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/tktarun03/nextjs-auth-starter.git
   cd nextjs-auth-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```bash
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000/` and sign in with Google.

## 👨‍💻 About the Author

🚀 Created by [Arunkumar Thamilarasu](https://github.com/tktarun03) | UI Technical Architect | Next.js & Authentication Expert

## ⭐ Contribute & Support
- Fork & Star this repository! ⭐
- Submit Issues and PRs to improve authentication.

---
🎯 **Follow me on GitHub**: [@tktarun03](https://github.com/tktarun03)
