import Profile from "./profile/Profile";
import user from "./profile/user.json";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import Statistics from "./Statistics/Statistics";
import statisticalData from "./Statistics/statistical-data.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <FriendList friends={friends} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
