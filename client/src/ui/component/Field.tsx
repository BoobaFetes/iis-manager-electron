import React, { ChangeEventHandler, FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { EditionMode } from "../common/enum/EditionMode";
import { useEditMode } from "../common/hooks/useEditMode";

export interface IFieldProps<TModel extends object = any> {
  property: keyof TModel;
  label?: string;
  model: TModel;
  setModel: (model: TModel) => void;
  mode: EditionMode;
  props?: TextFieldProps;
}

export const Field: FC<IFieldProps> = ({
  label,
  property,
  model,
  setModel,
  mode,
  props,
}) => {
  const { canChange } = useEditMode(mode);

  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) =>
    setModel({ ...model, [property]: evt.target.value });

  return (
    <TextField
      {...props}
      label={label ?? property}
      value={model[property]}
      onChange={canChange && onChange}
      disabled={!canChange}
    />
  );
};
