import { VenueParameters } from "./VenueParams.ts";

export class Venue {
  private constructor(private readonly newVenueArgs: VenueParameters) {
  };

  static create(newVenueArgs: Required<VenueParameters>) {
    return new Venue(newVenueArgs);
  };

  get properties() {
    const {id, title, location } = this.newVenueArgs;
    
    return {
      id,
      title,
      location
    };
  };
};
