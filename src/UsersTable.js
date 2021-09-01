import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const UsersTable = ({users}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="left">Street Name</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">State</TableCell>
            <TableCell align="left">Postal Code</TableCell>
            <TableCell align="left">Country</TableCell>
            <TableCell align="left">Coordinates</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, id) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
              {user.name.title}.{user.name.first} {user.name.last}
              </TableCell>
              <TableCell align="left">{user.location.street.name}</TableCell>
              <TableCell align="left">{user.location.city}</TableCell>
              <TableCell align="left">{user.location.state}</TableCell>
              <TableCell align="left">{user.location.postcode}</TableCell>
              <TableCell align="left">{user.location.country}</TableCell>
              <TableCell align="left">{user.location.coordinates.longitude},{" "}
                {user.location.coordinates.latitude}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
