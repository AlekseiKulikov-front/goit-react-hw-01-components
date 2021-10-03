import PropTypes, { bool } from "prop-types";
import styles from "../FriendList/friendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={isOnline ? styles.statusOnline : styles.statusOffline}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: bool.isRequired,
};
export default FriendListItem;