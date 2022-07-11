import React from "react";
import "../assets/css/tracker.css";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

function Tracker({ trackers, onDelete, showMyAdd, showAddstyles }) {
	return (
		<div className="container-fluid trackerMain">
			<div className="trackerheader">
				<h2 className="appname">Tracker App</h2>
				<Button
					onAdd={showMyAdd}
					color={showAddstyles ? "red" : "rgb(9, 223, 238)"}
					text={showAddstyles ? "Close" : "Add Data"}
				/>
			</div>
			<div className="mytrackerdata">
				{trackers.map((track) => (
					<div
						className="getTracker"
						key={track.id}
						onClick={() => onDelete(track.id)}
					>
						<h3 className="appointment">
							{track.text}
							<FaTimes className="icon" />
						</h3>
						<p className="day">{track.day}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Tracker;
