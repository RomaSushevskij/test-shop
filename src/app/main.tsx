import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/store-provider";

import "./styles/index.css";
import App from "./App.tsx";
import { CartProvider } from "@/features/cart/model/cart-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
