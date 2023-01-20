import { Routes, Route, useLocation } from "react-router-dom";

import BasicLayout from "./routes/BasicLayout";
import RequireAuth from "./components/RequireAuth";

import Auth from "./routes/Auth";
import Contact from "./routes/Contact";
import Landing from "./routes/Landing";
import Products from "./routes/Products";
import Product from "./routes/Product";
import Account from "./routes/Account";
import AfterSaleService from "./routes/AfterSaleService";

import NotFound404 from "./routes/NotFound404";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<BasicLayout />}>
          {/* Public Routes */}
          <Route index element={<Landing />} />
          <Route path='auth' element={<Auth />} />
          <Route path='produits' element={<Products />} />
          <Route path='produits/:productID' element={<Product />} />
          <Route path='nous-contacter' element={<Contact />} />
          <Route path='*' element={<NotFound404 />} />

          {/* Protected routes */}
          {/* Require Auth only */}
          <Route element={<RequireAuth />}>
            <Route path='service-apres-vente' element={<AfterSaleService />} />
            <Route path='compte' element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
