/** @format */

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux-store";
import { NotificationProvider } from "./context";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <NotificationProvider>
            <App />
        </NotificationProvider>
    </Provider>
);
