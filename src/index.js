import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import MainLayout from "./CommonComponents/Layout/MainLayout";
import { configureStore } from "./store/configureStore";

const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <MainLayout>
          <Routes />
        </MainLayout>
      </Provider>
    </PersistGate>
  </BrowserRouter>,
  document.getElementById("root")
);
