<h3 align="center">A Fintech Bank Application</h3>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 💭 [App Flow Diagram](#app-flow-diagram)

## <a name="introduction">🤖 Introduction</a>

SubtleTech Banking is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.

## <a name="tech-stack">⚙️ Tech Stack (Full-Stack)</a>

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Appwrite](https://appwrite.io): Backend to manage authentication and database
- [Plaid](https://plaid.com): Securely connect user bank accounts and enable real-time transaction data and balance updates
- [Dwolla](https://www.dwolla.com): Securely send, receive, and request money
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev): Runtime type-checking
- [TailwindCSS](https://tailwindcss.com)
- [Chart.js](https://www.chartjs.org)
- [ShadCN](https://ui.shadcn.com)
- [Sentry](https://sentry.io)

## <a name="features">🔋 Features</a>

👉 **Authentication**: An ultra-secure SSR authentication with proper validations and authorization

👉 **Connect Banks**: Integrates with Plaid for multiple bank account linking

👉 **Home Page**: Shows general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc

👉 **My Banks**: Check the complete list of all connected banks with respective balances, account details

👉 **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks

👉 **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.

👉 **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.

👉 **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

👉 **Performance / Error Tracking**: Application performance monitoring & error tracking that will hide sensitive user data when logging errors.

## <a name="app-flow-diagram">💭 App Flow Diagram</a>

**Figma Link:** [SubtleTech Banking App Flow Diagram](https://www.figma.com/board/6byDMiPGoMF4KK81a4iA7f/SubtleTech-Banking-App-Flow?node-id=0-1&t=5kxIUPkpZczTrB57-1)

**Home Page (Desktop) Screenshot:** <img width="1680" alt="Screenshot 2024-06-29 at 4 58 46 PM" src="https://github.com/briannwaeke1/subtletech_banking/assets/94656081/31164603-2169-4b36-b8c7-83cca80be8c4">

**Home Page (Mobile) Screenshot:** <img width="1680" alt="Screenshot 2024-06-29 at 4 58 28 PM" src="https://github.com/briannwaeke1/subtletech_banking/assets/94656081/4ddc85ec-dc4b-49b2-917f-a9986507c90d">

**Transfer Funds Demo**

https://github.com/user-attachments/assets/5ab55b88-1a7a-46bc-bdbb-f26fefe7d65c




