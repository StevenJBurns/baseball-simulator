import { TValueObject } from "../../base/TValueObject";

type TUniqueId = TValueObject<string> & {
  type: 'UUID',
};

export const UniqueId = (value: string): TUniqueId => {
  if (!value.length) throw new Error('UniqueId can not be an empty string');

  return {
    type: 'UUID',
    value,
  }
};
