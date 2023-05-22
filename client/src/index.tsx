import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import client from "./gql/client";
import ContinentsPage from "./routes/continents";
import CountryPage from "./routes/countries/[id]";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "continents",
        element: <ContinentsPage />,
        children: [
          {
            path: ":continentId",
            element: <ContinentsPage />,
          },
        ],
      },
      {
        path: ":countryId",
        element: <CountryPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
