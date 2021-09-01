import { useState, useEffect, useRef } from "react";
import { getRandomUsersList } from "./api/UserApi";
import UsersTable from "./UsersTable";
import "./RandomUser.css";

const RandomUsers = () => {
  const [randomUserData, setRandomUserData] = useState([]);
  const fetchRandomUsers = useRef(() => []);

  fetchRandomUsers.current = () => {
    getRandomUsersList().then((randomUsersList) => {
      setRandomUserData(randomUsersList);
    });
  };

  useEffect(() => {
    fetchRandomUsers.current();
  }, []);

  return (
    <div>
      <button onClick={() => fetchRandomUsers.current()}>
        Fetch Random Users
      </button>

      <UsersTable users={randomUserData} />
    </div>
  );
};

export default RandomUsers;
