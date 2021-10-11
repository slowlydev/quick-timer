import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Container from "../components/Container";
import Controllbar from "../components/Controllbar";

export default function Home() {

	const [time, setTime] = useState([]);
	const [step, setStep] = useState(0);
	const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString())

	function updateTimeNow() {
		setTimeNow(new Date().toLocaleTimeString());
	}

	setInterval(updateTimeNow, 1000);

	function resetTime() {
		setTime([]);
		setStep(0);
	}

	function addTime() {
		setTime([...time, { time: Date.now() }])
		setStep(step + 1);
	}

	function totwoDigit(value) {
		const string = value.toString();
		if (string.length == 1) {
			return "0" + value;
		} else {
			return value;
		}
	}

	function isEven(value) {
		if (value % 2 == 0)
			return true;
		else
			return false;
	}

	function calcDiff(valueA, valueB) {
		let delta = Math.abs(valueA - valueB) / 1000;

		const days = Math.floor(delta / 86400);
		delta -= days * 86400;

		const hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		const minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		const seconds = Math.floor(delta % 60);

		return hours + ":" + totwoDigit(minutes) + ":" + totwoDigit(seconds);
	}

	function calcArray(array) {

		function calcDiffHours(valueA, valueB) {
			let delta = Math.abs(valueA - valueB) / 1000;

			const days = Math.floor(delta / 86400);
			delta -= days * 86400;

			const hours = Math.floor(delta / 3600) % 24;
			delta -= hours * 3600;

			return hours;
		}

		function calcDiffMinutes(valueA, valueB) {
			let delta = Math.abs(valueA - valueB) / 1000;

			const days = Math.floor(delta / 86400);
			delta -= days * 86400;

			const hours = Math.floor(delta / 3600) % 24;
			delta -= hours * 3600;

			const minutes = Math.floor(delta / 60) % 60;
			delta -= minutes * 60;

			return minutes;
		}

		let totalHours = 0;
		let totalMinutes = 0;

		for (const timeItem of array) {
			if (isEven(array.indexOf(timeItem))) {
				if (array[array.indexOf(timeItem) + 1]) {
					totalHours = totalHours + calcDiffHours(timeItem.time, time[array.indexOf(timeItem) + 1].time);
					totalMinutes = totalMinutes + calcDiffMinutes(timeItem.time, time[array.indexOf(timeItem) + 1].time);
				} else {
					totalHours = totalHours + calcDiffHours(timeItem.time, Date.now());
					totalMinutes = totalMinutes + calcDiffMinutes(timeItem.time, Date.now());
				}
			}
		}

		return totalHours + ":" + totwoDigit(totalMinutes);
	}

	return (
		<Container>
			<h1>QuickTimer</h1>
			<h2>{calcArray(time)}</h2>
			<motion.div className="display">
				{time.map((timeItem, index) => isEven(index) ? (
					<motion.div className="section">
						<p>{new Date(timeItem.time).toLocaleTimeString()}</p>
						{time[time.indexOf(timeItem) + 1] && (
							<p>{calcDiff(timeItem.time, time[time.indexOf(timeItem) + 1].time)}</p>
						)}
						{time[time.indexOf(timeItem) + 1] && (
							<p>{new Date(time[time.indexOf(timeItem) + 1].time).toLocaleTimeString()}</p>
						)}
						{!time[time.indexOf(timeItem) + 1] && (
							<p>{calcDiff(timeItem.time, Date.now(timeNow))}</p>
						)}
						{!time[time.indexOf(timeItem) + 1] && (
							<p>{timeNow}</p>
						)}
					</motion.div>
				) : (
					<motion.div className="break">
						{time[time.indexOf(timeItem) + 1] && (
							<p>{calcDiff(timeItem.time, time[time.indexOf(timeItem) + 1].time)}</p>
						)}
						{!time[time.indexOf(timeItem) + 1] && (
							<p>{calcDiff(timeItem.time, Date.now(timeNow))}</p>
						)}
					</motion.div>
				))}
			</motion.div>
			<Controllbar resetTime={resetTime} addTime={addTime} />
		</Container>
	)
}