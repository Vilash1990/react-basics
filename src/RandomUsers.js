/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { getRandomUsersList } from "./api/UserApi";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import UsersTable from "./UsersTable";
import "./RandomUser.css";
import RandomUsersTable from "./RandomUserTable";

const RandomUsers = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const fetchRandomUsers = useRef(() => []);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

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
    getRandomUsersList(numberOfUsers).then((randomUsersList) => {
      setRandomUsers(randomUsersList);
    });
  };

  useEffect(() => {
    fetchRandomUsers.current();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        id="filled-number"
        label="Number of Users"
        type="number"
        required
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        value={numberOfUsers}
        error={numberOfUsers < 0}
        onChange={(event) => {
          setNumberOfUsers(event.target.value);
        }}
      />
      <Button
        variant="contained"
        disabled={numberOfUsers <1}
        color="primary"
        style={numberOfUsers>0 ? { marginBottom: 20, marginLeft: 30, backgroundColor:"#488ff7", color:"white" } : {marginLeft: 30}}
        onClick={() => fetchRandomUsers.current()}
      >
        Fetch Random Users
      </Button>

      {/* <UsersTable users={randomUserData} /> */}
      <RandomUsersTable users={buildRandomUserRows(randomUsers)} />
    </div>
  );
};

export default RandomUsers;
