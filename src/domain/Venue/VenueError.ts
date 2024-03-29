export class InvalidVenueNameError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'Invalid Venue Name';
  };
};
