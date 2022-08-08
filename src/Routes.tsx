import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./components/404/404";
import CountryDetail from "./components/CountryDetail/CountryDetail";
// type RoutesPropsType = {
//   children: React.ReactElement;
// };
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<App />} />
        <Route path="/404" index={false} element={<NotFound />} />
        <Route path="/:id" index={false} element={<CountryDetail />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
