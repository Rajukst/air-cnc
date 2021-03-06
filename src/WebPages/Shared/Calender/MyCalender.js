import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
const MyCalender = () => {
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          //   label="Basic example"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default MyCalender;
