import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PatientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="bloodGroup" source="bloodGroup" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirthAD" source="dateOfBirthAd" />
        <TextField label="dateOfBirthBS" source="dateOfBirthBs" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="marital status" source="maritalStatus" />
        <TextField label="middleName" source="middleName" />
        <TextField label="occupation" source="occupation" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
