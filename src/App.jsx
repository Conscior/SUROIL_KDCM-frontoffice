import { Routes, Route, useLocation } from "react-router-dom";

import RequireAuth from "./components/RequireAuth";

import BasicLayout from "./routes/BasicLayout";
import Auth from "./routes/Auth";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Product from "./routes/Product";
import Account from "./routes/Account";

import { ROLES } from "./config/roles";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<BasicLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='products' element={<Shop />} />
          {/* <Route path='products/all' element={<Shop />} /> */}
          <Route path='products/:productID' element={<Product />} />
          <Route path='contact' element={<Contact />} />

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
