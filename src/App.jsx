import { useState, useEffect } from "react";
import Section from "./components/Section/Section.jsx";
import Description from "./components/Description/Description.jsx"
import Notification from "./components/Notification/Notification.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";



const App = () => {
	const [feedbacks, setFeedbacks] = useState(() => {
		const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
		if (savedFeedbacks !== null) {
			return JSON.parse(savedFeedbacks);
		}
		return {
		good: 0,
		neutral: 0,
		bad: 0,
	}
	});
	useEffect(() => {
		window.localStorage.setItem(
			"saved-feedbacks",
			JSON.stringify(feedbacks)
		);
	}, [feedbacks]);
	const resetFeedback = () => {
		setFeedbacks({good: 0, neutral: 0, bad: 0})
	}
	const updateFeedback = (feedbackType) => {
		setFeedbacks({...feedbacks, [feedbackType]: feedbacks[feedbackType]+1})
	};

	const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
	const positiveFeedback = totalFeedback ? Math.round((feedbacks.good / totalFeedback) * 100) : 0;
	return (
		<>
			<Section>
				<Description />
				<Options
					good={feedbacks.good}
					neutral={feedbacks.neutral}
					bad={feedbacks.bad}
					updateFeedback={updateFeedback}
					totalFeedback={totalFeedback}
					resetFeedback={resetFeedback}
				/>
				{totalFeedback ? (
					<Feedback
						good={feedbacks.good}
						neutral={feedbacks.neutral}
						bad={feedbacks.bad}
						totalFeedback={totalFeedback}
						positiveFeedback={positiveFeedback}
					/>
				) : (
					<Notification />
				)}
			</Section>
		</>
	);
};

export default App;



