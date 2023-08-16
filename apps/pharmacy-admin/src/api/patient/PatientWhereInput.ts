import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatientWhereInput = {
  address?: StringNullableFilter;
  bloodGroup?: StringNullableFilter;
  dateOfBirthAd?: DateTimeNullableFilter;
  dateOfBirthBs?: DateTimeNullableFilter;
  email?: IntNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "Male" | "Female" | "Others";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  maritalStatus?: "Married" | "Single" | "Widow";
  middleName?: StringNullableFilter;
  occupation?: StringNullableFilter;
  phone?: "Male" | "Female" | "Others";
};
