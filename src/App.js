import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ContactPage from "./pages/ContactPage";
import CountriesDataPage from "./pages/CountriesDataPage";
import CountryPage from "./pages/CountryPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<CountriesDataPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/countries/:country" element={<CountryPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
