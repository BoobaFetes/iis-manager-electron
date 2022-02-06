import { Grid, Paper } from "@mui/material";
import React, { FC, memo } from "react";
import { useAppSelector } from "../../../../store";
import { Site } from "../../../component/Site";

export const ListPage: FC = memo(() => {
  const data = useAppSelector((state) => state.websites.data);

  return (
    <Grid container>
      <Grid item flex="1 1 auto">
        <Paper>
          <Site.List data={data} />
        </Paper>
      </Grid>
    </Grid>
  );
});
