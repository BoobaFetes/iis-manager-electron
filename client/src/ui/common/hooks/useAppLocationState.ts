import { useLocation } from "react-router-dom";
import { Location } from "history";
import { EditionMode } from "../enum/EditionMode";

export interface IAppLocationState extends Record<string, unknown> {
  mode?: EditionMode;
}

export interface IAppLocation extends Omit<Location, "state"> {
  state: IAppLocationState;
}
export function useAppLocationState(): IAppLocation {
  const location = useLocation() as IAppLocation;
  const mode = location?.state?.mode ?? EditionMode.Read;

  return {
    ...location,
    state: {
      ...location.state,
      mode,
    },
  };
}
