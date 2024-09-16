import React, { Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<HomePage />}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Outlet />
    </Suspense>
  );
};

export default Router;
