import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";

const DatePickerButton = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function DatePickerButton(props, ref) {
  return (
    <Button onClick={props.onClick} variant="outline" ref={ref}>
      {props.value}
    </Button>
  );
});

export default DatePickerButton;
