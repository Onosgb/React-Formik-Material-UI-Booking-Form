import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, mata] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };
  if (mata && mata.touched && mata.error) {
    configSelect.error = true;
    configSelect.helperText = mata.error;
  }

  return (
    <TextField {...configSelect}>
      {options
        ? options.map((item, pos) => {
            return (
              <MenuItem key={pos} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })
        : null}
    </TextField>
  );
};

export default SelectWrapper;
