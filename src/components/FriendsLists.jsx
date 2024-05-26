import { initialFriends } from "../data";
import Friend from "./Friend";

export default function FriendsLists() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
