import React, { FC } from "react";
import { NavLink } from "react-router-dom";

export const Header: FC = () => (
  <div>
    <NavLink to="/">Acceuil</NavLink>&nbsp;|&nbsp;
    <NavLink to="/site">Web sites</NavLink>
  </div>
);
