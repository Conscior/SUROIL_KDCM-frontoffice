import { Routes, Route, useLocation } from "react-router-dom";

import RequireAuth from "./components/RequireAuth";

import BasicLayout from "./routes/BasicLayout";
import Auth from "./routes/Auth";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Product from "./routes/Product";
import Account from "./routes/Account";
import AfterSaleService from "./routes/AfterSaleService";

import { ROLES } from "./config/roles";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<BasicLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productID' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='service-apres-vente' element={<AfterSaleService />} />

          {/* Protected routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Customer]} />}>
            <Route path='account' element={<Account />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
