import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";

// ✅ Relative imports (কারণ alias এখনো কাজ করছে না)
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// ✅ Pages
import NotFound from "./pages/NotFound.jsx";
import AdminDashboard from "./pages/admin-dashboard/index.jsx";
import Services from "./pages/services/index.jsx";

import Contact from "./pages/contact/index.jsx";
import About from "./pages/about/index.jsx";
import Homepage from "./pages/homepage/index.jsx";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/services" element={<Services />} />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
