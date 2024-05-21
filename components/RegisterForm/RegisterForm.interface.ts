import { GenderEnum } from "@/enums/gender.enum";

export interface IRegisterForm {
  firstName: string;

  lastName: string;

  gender: GenderEnum;

  institute: string;

  specialty: string;

  country: string;

  city: string;

  address: string;

  postalCode: string;

  phone: string;

  email: string;

  description: string;

  role: string;

  password: string;
}
