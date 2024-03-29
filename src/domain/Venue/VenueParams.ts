import { Location } from '../common';
import { TUniqueId } from '../common/UniqueId/TUniqueId';

export type VenueParameters = {
  id: TUniqueId,
  title: string,
  location: Location,
};
