import { NameParameters } from "./NameParameters";

export const Name = (newNameArgs: NameParameters): NameParameters => {
  const {
    lastName,
    firstName,
    middleName,
  } = newNameArgs;

  if (lastName.length < 2 || firstName.length < 2) {
    throw new Error('Name is required');
  };

  return {
    lastName,
    firstName,
    middleName: middleName ?? '',
  };
};
