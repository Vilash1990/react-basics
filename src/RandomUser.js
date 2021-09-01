import { useState, useEffect, useRef } from "react";
import { getRandomUser } from "./api/UserApi";
import './RandomUser.css';

const RandomUser = () => {
  const [userInfos, setUserInfos] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);

  const fetchNextUser = useRef(() => {});

  fetchNextUser.current = () => {
    getRandomUser(nextPageNumber).then((randomUserData) => {
      const newUserInfos = [...userInfos, ...randomUserData.data.results];
      setUserInfos(newUserInfos);
      setNextPageNumber(nextPageNumber + 1);
    });
  };

  useEffect(() => {
    fetchNextUser.current();
  }, []);
  return (
    <div>
      <button onClick={() => fetchNextUser.current()}>Fetch next user</button>
      <table className="userTable">
        {userInfos.map((userInfo, id) => (
          <tr key={id}>
            <td>
              {userInfo.name.title}.{userInfo.name.first} {userInfo.name.last}
            </td>
            <td>
              <image src={userInfo.picture.thumbnail} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default RandomUser;
