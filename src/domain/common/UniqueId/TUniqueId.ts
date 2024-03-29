import { TValueObject } from "../../base/TValueObject";

export type TUniqueId = TValueObject<string> & {
  type: string,
};
