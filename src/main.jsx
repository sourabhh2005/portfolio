import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

function Preloader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-primary">
      <div className="w-14 h-14 rounded-full border-2 border-white/20 border-t-accent animate-spin"></div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
