import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Applayout from "./pages/Applayout";
import Login from "./pages/Login";
import CityList from "./component/CityList";
import CountryList from "./component/CountryList";
import City from "./component/City";
import Form from "./component/Form";
import { CitiesProvider } from "./contexts/CItiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<Applayout />}>
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
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
