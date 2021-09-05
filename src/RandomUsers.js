/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { getRandomUsersList } from './api/UserApi';
import UsersTable from './UsersTable';
import './RandomUser.css';
import RandomUsersTable from './RandomUserTable';

const RandomUsers = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const fetchRandomUsers = useRef(() => []);

  const buildRandomUserRows = (randomUsersList) => {
    const randomUserRowsData = [];
    randomUsersList.forEach((randomUser) => {
      const randomUserRowData = {};
      randomUserRowData.fullName = `${randomUser.name.title}.${randomUser.name.first} ${randomUser.name.last}`;
      randomUserRowData.id = randomUser.id.value;
      randomUserRowData.streetName = randomUser.location.street.name;
      randomUserRowData.city = randomUser.location.city;
      randomUserRowData.state = randomUser.location.state;
      randomUserRowData.postalCode = randomUser.location.postcode;
      randomUserRowData.country = randomUser.location.country;
      randomUserRowData.coordinates = `${randomUser.location.coordinates.longitude},${randomUser.location.coordinates.latitude}`;
      randomUserRowsData.push(randomUserRowData);
    });
    return randomUserRowsData;
  };

  fetchRandomUsers.current = () => {
    getRandomUsersList().then((randomUsersList) => {
      setRandomUsers(randomUsersList);
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

      {/* <UsersTable users={randomUserData} /> */}
      <RandomUsersTable users={buildRandomUserRows(randomUsers)} />
    </div>
  );
};

export default RandomUsers;
