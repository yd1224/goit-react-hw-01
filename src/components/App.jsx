import userData from "../userData.json";
import friends from "../FriendList.json";
import transactions from "../transactions.json";
import { Profile } from "./Profile"
import { FriendList } from "./FriendList"
import {TransactionHistory} from "./TransactionHistory"
export const  App=()=> {
  

  return (
    <div>
      <Profile name={userData.username} tag={userData.tag} location={userData.location} image={userData.avatar} action={userData.stats} />
      <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </div>
  );
}


