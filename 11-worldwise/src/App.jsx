import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtetedRoute from "./pages/ProtetedRoute";

import CityList from "./component/CityList";
import CountryList from "./component/CountryList";
import City from "./component/City";
import Form from "./component/Form";
import SpinnerFullPage from "./component/SpinnerFullPage";

// Code splitting and lazy loading (Most commmon is to split the code at route level)
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import Applayout from "./pages/Applayout";
// import Login from "./pages/Login";

// creating variable for lazy loading (When webpack or vite comes across lazy function they will split the bundle)
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Applayout = lazy(() => import("./pages/Applayout"));
const Login = lazy(() => import("./pages/Login"));

// dist/assets/index-a181c80e.css   30.38 kB │ gzip:   5.09 kB
// dist/assets/index-fb6b2398.js   587.76 kB │ gzip: 175.30 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {/* Suspense will suspend the rendering of page untill the it's bundle is received from server */}
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="products" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtetedRoute>
                    <Applayout />
                  </ProtetedRoute>
                }
              >
                {/*Below are Nested Route :  because it is a route inside a app layout rout */}
                {/*index rout : When if neither of the nested path matches then this index path will be displayed */}
                {/* 1st method : using this method does not go to destination with correct path. So we will have to take each station one by one 
          ex: below path goes to cities with path : http://localhost:5173/app (Will give error if wwe directly try to access cities)
          <Route
          index
          element={<CityList cities={cities} isLoading={isLoading} />}
          /> */}
                {/* 2nd Method : using navigate component of router dom it points to the correct chekpoints and reaches destination
          as soon as index route is hit it will redirect to cities route 
          ex: below method goes to the cities with path : http://localhost:5173/app/cities*/}
                <Route index element={<Navigate replace to="cities" />} />
                {/* Replace keyword to go back on the index path : Will replace current element in history stack*/}
                <Route path="cities" element={<CityList />}></Route>
                <Route path="cities/:id" element={<City />}></Route>
                <Route path="countries" element={<CountryList />}></Route>
                <Route path="form" element={<Form />}></Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
