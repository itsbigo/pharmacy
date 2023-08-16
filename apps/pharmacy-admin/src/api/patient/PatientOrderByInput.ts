import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  address?: SortOrder;
  bloodGroup?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirthAd?: SortOrder;
  dateOfBirthBs?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  maritalStatus?: SortOrder;
  middleName?: SortOrder;
  occupation?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
