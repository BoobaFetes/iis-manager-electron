import { LinkProps } from "react-router-dom";
import { IAppLocationState } from "../common/hooks/useAppLocationState";

export interface AppLinkProps extends Omit<LinkProps, "state"> {
  state: IAppLocationState;
}

// const site:AppLinkProps={to:}

export const navigation = {
  site(id?: string) {
    const idPattern = id && `/${id}`;
    return `/site${idPattern}`;
  },
};
