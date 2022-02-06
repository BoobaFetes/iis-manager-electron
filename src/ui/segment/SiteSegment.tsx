import React, { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { SitePage } from "../page/SitePage";

export const SiteSegment: FC = memo(() => (
  <Routes>
    <Route path="/">
      <Route index element={<SitePage.ListPage />} />
      <Route path="/:id" element={<SitePage.ItemPage />} />
    </Route>
  </Routes>
));
