import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import * as Icons from "@mui/icons-material";
import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { IWebSite, WebSiteStatus } from "../../../../store";

interface IListProps {
  data: IWebSite[];
}

export const List: FC<IListProps> = memo(({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Status</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {(data ?? []).map((row) => (
        <TableRow>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{WebSiteStatus[row.status]}</TableCell>
          <TableCell>
            <RowActions id={row.id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
));

const RowActions: FC<Pick<IWebSite, "id">> = ({ id }) => (
  <Grid container>
    <Grid item>
      <NavLink to={`/sites/${id}`}>
        <IconButton aria-label="edit">
          <Icons.KeyboardDoubleArrowRight />
        </IconButton>
      </NavLink>
    </Grid>
  </Grid>
);
