import { City } from "../City/City";
import { Subdivision } from "../Subdivision/Subdivision";
import { Country } from "../Country/Country";

export type Location = {
  city: City,
  subdivision: Subdivision,
  country: Country,
};
