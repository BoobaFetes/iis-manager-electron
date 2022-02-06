import { EditionMode } from "../enum/EditionMode";
import { useMemo } from "react";

export interface IEditionModeResult {
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canChange: boolean;
}

export function useEditMode(mode: EditionMode): IEditionModeResult {
  const result = useMemo(() => {
    const canCreate = (mode & EditionMode.Create) === EditionMode.Create;
    const canRead = (mode & EditionMode.Read) === EditionMode.Read;
    const canUpdate = (mode & EditionMode.Update) === EditionMode.Update;
    const canDelete = (mode & EditionMode.Delete) === EditionMode.Delete;

    return {
      canCreate,
      canRead,
      canUpdate,
      canDelete,
      canChange: canCreate || canUpdate,
    };
  }, [mode]);
  return result;
}
