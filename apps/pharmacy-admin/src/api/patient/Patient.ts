export type Patient = {
  address: string | null;
  bloodGroup: string | null;
  createdAt: Date;
  dateOfBirthAd: Date | null;
  dateOfBirthBs: Date | null;
  email: number | null;
  firstName: string | null;
  gender?: "Male" | "Female" | "Others" | null;
  id: string;
  lastName: string | null;
  maritalStatus?: "Married" | "Single" | "Widow" | null;
  middleName: string | null;
  occupation: string | null;
  phone?: "Male" | "Female" | "Others";
  updatedAt: Date;
};
