import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Dayjs } from "dayjs";

interface TimePickerProps {
  label: string;
  selectedTime: Dayjs | null;
  onTimeChange: (newTime: Dayjs | null) => void;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({
  label,
  selectedTime,
  onTimeChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker"]}>
        <TimePicker
          label={label}
          value={selectedTime}
          onChange={onTimeChange}
          slotProps={{
            textField: {
              size: "small",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
