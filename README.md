#  Signalist - Stock Tracker Web App

Signalist is a modern **Stock Tracking & Market Analysis Web Application** built with **Next.js**.  
It provides real-time stock market insights, watchlist management, market heatmaps, and personalized user experience.

This project is designed with a clean UI and modern architecture using Next.js App Router.

---

##  Features

✅ User Authentication (Sign Up / Sign In)  
✅ Personalized Signup Form (Country, Goals, Risk Tolerance, Industry)  
✅ Stock Dashboard with Market Overview  
✅ Stock Heatmap Visualization  
✅ Watchlist Add / Remove Feature  
✅ TradingView Widgets Integration  
✅ Clean Responsive UI  
✅ Inngest Integration (for background workflows/events)  
✅ Modern Component-Based UI Structure  

---

##  Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS  
- **Backend:** Next.js Server Actions + API Routes  
- **Authentication:** Better Auth  
- **Database:** MongoDB (Mongoose)  
- **Background Jobs / Events:** Inngest  
- **Charts / Widgets:** TradingView Widgets  
- **UI Components:** Custom Components + Shadcn UI  
- **Deployment:** Vercel  

---

##  Project Structure

```bash
Stock_Tracker/
│── app/
│   ├── (auth)/          # Authentication routes (sign-in, sign-up)
│   ├── (root)/          # Main dashboard pages
│   ├── api/             # API routes (inngest etc.)
│
│── components/
│   ├── forms/           # Form components (InputField, SelectField etc.)
│   ├── ui/              # UI components (buttons, dropdown etc.)
│
│── lib/
│   ├── actions/         # Server actions (auth, watchlist etc.)
│   ├── better-auth/     # Authentication config
│   ├── inngest/         # Inngest client and functions
│   ├── constants.ts     # Static options/constants
│
│── database/
│   ├── models/          # Mongoose models
│
│── public/              # Images and icons
│── styles/              # Global styling
