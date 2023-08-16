import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
