import Profile from "./components/Profile/Profile.jsx";
import FriendList from "./components/FriendList/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import Section from "./components/Section/Section.jsx";
import userData from "./backend-data/userData.json";
import friends from "./backend-data/friends.json";
import transactions from "./backend-data/transactions.json"


const App = () => {
	return (
		<>
			<Section>
				<Profile
					name={userData.username}
					tag={userData.tag}
					location={userData.location}
					image={userData.avatar}
					stats={userData.stats}
				/>
			</Section>
			<Section>
				<FriendList friends={friends} />
			</Section>
			<Section>
				<TransactionHistory items={transactions} />
			</Section>
		</>
	);
};

export default App;



