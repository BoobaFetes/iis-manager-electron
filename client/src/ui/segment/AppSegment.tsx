import React, { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "../common/ui/AppLayout";
import { Footer } from "../common/ui/Footer";
import { Header } from "../common/ui/Header";
import { HomePage } from "../page/HomePage";
import { SiteSegment } from "./SiteSegment";

export const AppSegment: FC = memo(() => (
  <Routes>
    <Route
      path="/"
      element={<AppLayout header={<Header />} footer={<Footer />} />}
    >
      <Route index element={<HomePage />} />
      <Route path="site" element={<SiteSegment />} />
      <Route path="*" element={<div>not found</div>} />
    </Route>
  </Routes>
));
