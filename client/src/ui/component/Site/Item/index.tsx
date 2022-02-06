import { Grid } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { IWebSite } from "../../../../store";
import { EditionMode } from "../../../common/enum/EditionMode";
import { Field, IFieldProps } from "../../Field";

interface IItemProps extends IWebSite {
  mode: EditionMode;
}
export const Item: FC<IItemProps> = ({ mode, ...site }) => {
  const [model, setModel] = useState(site);
  useEffect(() => {
    if (site) {
      setModel(site);
    }
  }, [site]);

  const field: Record<keyof IWebSite, IFieldProps<IWebSite>> = {
    id: { property: "id", model, setModel, mode },
    name: { property: "name", model, setModel, mode },
    status: { property: "status", model, setModel, mode },
  };

  return (
    <Grid container>
      <Grid item>
        <Field {...field.id} />
      </Grid>
      <Grid item>
        <Field {...field.name} />
      </Grid>
      <Grid item>
        <Field {...field.status} />
      </Grid>
    </Grid>
  );
};
