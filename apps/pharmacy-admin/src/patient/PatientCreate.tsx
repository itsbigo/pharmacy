import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="bloodGroup" source="bloodGroup" />
        <DateInput label="dateOfBirthAD" source="dateOfBirthAd" />
        <DateInput label="dateOfBirthBS" source="dateOfBirthBs" />
        <NumberInput step={1} label="email" source="email" />
        <TextInput label="firstName" source="firstName" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Others", value: "Others" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="lastName" source="lastName" />
        <SelectInput
          source="maritalStatus"
          label="marital status"
          choices={[
            { label: "Married", value: "Married" },
            { label: "Single", value: "Single" },
            { label: "Widow", value: "Widow" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="middleName" source="middleName" />
        <TextInput label="occupation" source="occupation" />
        <SelectInput
          source="phone"
          label="phone"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "others", value: "Others" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
