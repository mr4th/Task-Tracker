import React, { useState } from "react";
import "../assets/css/tracker.css";

function AddTracker({ AddTrackers }) {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Please enter an appointment");
			return;
		}
		AddTrackers({ text, day });
		setText("");
		setDay("");
	};

	return (
		<form className="formsdisp" onSubmit={onSubmit}>
			<label htmlFor="Appointment">Appointment</label>
			<input
				type="text"
				className="form-control"
				placeholder="enter new appointment"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<br />
			<label htmlFor="day">Day</label>
			<input
				type="text"
				className="form-control"
				placeholder="enter appointment day"
				value={day}
				onChange={(e) => setDay(e.target.value)}
			/>
			<br />
			<input type="submit" className="btn btn-block" value="SAVE DATA" /> <br />
		</form>
	);
}

export default AddTracker;
