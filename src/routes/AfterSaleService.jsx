import { motion } from "framer-motion";

import AfterSaleServiceForm from "../components/AfterSaleService/AfterSaleServiceForm";
import AfterSaleServiceHeader from "../components/AfterSaleService/AfterSaleServiceHeader";

const AfterSaleService = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        {/* Header */}
        <AfterSaleServiceHeader />

        {/* Forms */}
        <AfterSaleServiceForm />
      </motion.div>
    </>
  );
};

export default AfterSaleService;
