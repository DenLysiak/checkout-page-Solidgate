React TypeScript Checkout Page — Solidgate Integration Demo

- [DEMO LINK](https://denlysiak.github.io/checkout-page-Solidgate/)

PLEASE NOTE THAT 'CARD NUMBER' USES LUHN ALGORITHM TO CHECK FOR VALID NUMBER; USE '0000 0000 0000 000' TO CHECK WITH POSITIVE VALIDATION.

This project is a fully responsive and interactive checkout page built as a frontend integration demo for the Solidgate payment platform. It’s a single-page application (SPA) that demonstrates how to securely collect card payment information using the Solidgate JavaScript SDK. The main goal of the project is to simulate a production-ready, branded payment form that handles user interaction and integrates easily into any e-commerce frontend.

Technologies Used:
- React (with TypeScript) — UI logic and component structure

- CSS Modules or Styled Components — Custom styling and animations

- Responsive Web Design — Optimized for mobile, tablet, and desktop

- Vite — Fast development server and builds

- GitHub Pages — Static deployment

Main Features:
1. Secure Payment Form:
  - Uses Solidgate’s hosted fields to collect card data securely.

  - Fields include:
    - Card Number (masked, formatted, with brand detection);
    - Expiration Date;
    - CVC/CVV with a tooltip icon (e.g. ℹ️ with hover text);
    - Payment card logos update dynamically based on input;
    - Card data is never exposed to the frontend app, maintaining PCI compliance;
  
2. Intelligent UX
 - Form validation with user-friendly error messages.
 - Real-time feedback for invalid card numbers or missing fields;
 - Dynamic button state: submit button is disabled until the form is valid.
 - Tooltip on the CVC input gives contextual help for users unfamiliar with the term.

3. UI and Styling
 - Clean, modern UI inspired by real-world payment forms.
 - Mobile-first layout — works well across screen sizes.
 - Visual emphasis on security and trust (secure badge, info icons).

4.Payment Flow Simulation
 - Simulates the user flow of entering card data and clicking “Pay”.
 - Handles and logs success/error events after submitting the form.
 - Mimics what would happen in production (tokenization → backend → Solidgate API).

🧑‍💻 Author
Den Lysiak
Frontend Developer

