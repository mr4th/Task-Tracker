import React, { useState } from "react";
// external resource

import "./App.css";
import AddTracker from "./component/AddTracker";
import Tracker from "./component/Tracker";
//internal resource

function App() {
	const [showAdd, setShowAdd] = useState(false);
	const [trackers, setTracker] = useState([
		{
			id: 1,
			text: "Develop a React App",
			day: "monday  july 2022 at 2:00pm",
		},

		{
			id: 2,
			text: "Develop a Flutter App",
			day: "Tuesday  july 2022 at 2:00pm",
		},

		{
			id: 3,
			text: "Develop a React Native App",
			day: "Wednessday  july 2022 at 2:00pm",
		},

		{
			id: 4,
			text: "Develop a Django App",
			day: "thursday  july 2022 at 2:00pm",
		},

		{
			id: 5,
			text: "Develop a Rest API",
			day: "Friday  july 2022 at 2:00pm",
		},
	]);
	const [hello, setHello] = useState("hi");

	const AddTrackers = (tracker) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTracker = { id, ...tracker };
		console.log(id, newTracker);
		const arr = [...trackers, newTracker];
		setTracker(arr);
		setHello("changed");
	};

	const deleteTracker = (id) => {
		setTracker(trackers.filter((tracker) => tracker.id !== id));
	};
	const cha = () => {};
	return (
		<div className="container-fluid main">
			{showAdd && <AddTracker AddTrackers={AddTrackers} />}

			<Tracker
				showMyAdd={() => setShowAdd(!showAdd)}
				trackers={trackers}
				showAddstyles={showAdd}
				onDelete={deleteTracker}
			/>
		</div>
	);
}

export default App;
