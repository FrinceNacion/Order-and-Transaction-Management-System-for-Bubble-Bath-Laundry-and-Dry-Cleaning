import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useState } from "react";
import { is } from "react-day-picker/locale";

function DueDatePicker() {
    const [selected, setSelected] = useState();
    const [isVisible, setVisible] = useState(false);

    return (
        <div>
            <div className="d-flex flex-column">
                <label htmlFor="dueDateBtn" className="form-label text-black">Due Date</label>
                <button id="dueDateBtn" onClick={() => setVisible((prev) => !prev)} className="btn btn-secondary d-flex flex-row gap-2">
                    <i className="bi bi-calendar"></i>
                    <p className="m-0">{selected ? `Selected: ${selected.toLocaleDateString()}` : "Select"}</p>
                </button>
            </div>
            <DayPicker
                className={!isVisible ? 'd-none' : ''}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={{ before: new Date() }}
                footer={
                    selected ? `Selected: ${selected.toLocaleDateString()}` : "Select"
                }
            />
        </div>
    );
}

export default DueDatePicker;