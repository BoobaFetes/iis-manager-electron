import { Grid } from "@mui/material";
import React, { FC, memo, PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

interface IAppLayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
}
export const AppLayout: FC<IAppLayoutProps> = memo(({ header, footer }) => {
  return (
    <Grid container direction="column" wrap="nowrap" className="app-layout">
      {header && (
        <Grid container item className="header">
          {header}
        </Grid>
      )}
      <Grid
        container
        item
        direction="column"
        className="container"
        wrap="nowrap"
        style={{ flex: "1 1 auto" }}
      >
        <Outlet />
      </Grid>
      {footer && (
        <Grid container item className="footer">
          {footer}
        </Grid>
      )}
    </Grid>
  );
});
