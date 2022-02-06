import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../store";
import { useAppLocationState } from "../../../common/hooks/useAppLocationState";
import { Site } from "../../../component/Site";

export const ItemPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useAppLocationState();
  const site = useAppSelector(
    (state) => state.websites.data.filter((s) => s.id === id)[0]
  );

  return <Site.Item {...site} mode={state.mode} />;
};
