export type PatientUpdateInput = {
  address?: string | null;
  bloodGroup?: string | null;
  dateOfBirthAd?: Date | null;
  dateOfBirthBs?: Date | null;
  email?: number | null;
  firstName?: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  lastName?: string | null;
  maritalStatus?: "Married" | "Single" | "Widow" | null;
  middleName?: string | null;
  occupation?: string | null;
  phone?: "Male" | "Female" | "Others";
};
