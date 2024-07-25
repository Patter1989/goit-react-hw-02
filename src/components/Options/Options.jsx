import css from "./Options.module.css";


const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
	return (
		<ul className={css.optionsList}>
			<li>
				<button
					type='button'
					onClick={() => {
						updateFeedback("good");
					}}
				>
					Good
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={() => {
						updateFeedback("neutral");
					}}
				>
					Neutral
				</button>
			</li>
			<li>
				<button
					type='button'
					onClick={() => {
						updateFeedback("bad");
					}}
				>
					Bad
				</button>
			</li>
			{totalFeedback ? (
				<li>
					<button
						type='button'
						onClick={() => {resetFeedback()}}
					>
						Reset
					</button>
				</li>
			) : (
				""
			)}
		</ul>
	);
};

export default Options

