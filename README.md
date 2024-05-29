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
- [Zod](https://zod.dev)
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

Figma Link: [SubtleTech Banking App Flow Diagram](https://www.figma.com/board/6byDMiPGoMF4KK81a4iA7f/SubtleTech-Banking-App-Flow?node-id=0-1&t=5kxIUPkpZczTrB57-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2F6byDMiPGoMF4KK81a4iA7f%2FSubtleTech-Banking-App-Flow%3Fnode-id%3D0-1%26t%3D5kxIUPkpZczTrB57-1" allowfullscreen></iframe>
