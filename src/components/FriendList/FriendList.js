import React from "react";

import styles from "./friendList.module.css";
import FriendListItem from "./friendsListItem";

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map((friend) => {
      return (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>
);

export default FriendList;
