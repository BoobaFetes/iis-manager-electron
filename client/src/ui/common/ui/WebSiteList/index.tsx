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
import { IWebSite, WebSiteStatus } from "../../../../store";

export const WebSiteList: FC<{ data: IWebSite[] }> = memo(({ data }) => (
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
      <IconButton
        aria-label="edit"
        onClick={() => console.log(`should open script panel of '${id}'`)}
      >
        <Icons.KeyboardDoubleArrowRight />
      </IconButton>
    </Grid>
  </Grid>
);
