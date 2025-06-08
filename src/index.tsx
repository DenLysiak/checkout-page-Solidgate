import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { CheckoutContextProvider } from './store/CheckoutStore';

createRoot(document.getElementById('root') as HTMLElement).render(
  <CheckoutContextProvider>
    <App />
  </CheckoutContextProvider>,
);
