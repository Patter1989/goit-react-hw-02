import { useState } from "react";
import Section from "./components/Section/Section.jsx";
import Description from "./components/Description/Description.jsx"
import Notification from "./components/Notification/Notification.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";



const App = () => {
	const [feedbacks, setFeedbacks] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});
	const resetFeedback = () => {
		setFeedbacks({good: 0, neutral: 0, bad: 0})
	}
	const updateFeedback = (feedbackType) => {
		setFeedbacks({...feedbacks, [feedbackType]: feedbacks[feedbackType]+1})
	};

	const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
	const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);
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



