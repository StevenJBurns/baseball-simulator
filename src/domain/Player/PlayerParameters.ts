import { UniqueId, Name, Location } from "../common";

export type PlayerParameters = {
  id: ReturnType<typeof UniqueId>,
  name: typeof Name,
  dateBorn: Date,
  locationBorn: Location,
  dateDeceased: Date,
  locationDeceased: Location,
};
