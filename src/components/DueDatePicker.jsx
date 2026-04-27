import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

function DueDatePicker() {
  const [selected, setSelected] = useState<Date>(null);

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      disabled={{ before: new Date() }}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Select the due date."
      }
    />
  );
}

export default DueDatePicker;