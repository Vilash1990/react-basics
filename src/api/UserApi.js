import axios from 'axios';

// pageNumber defaults to 1 if no page number provided
// This method is to retrieve the random user information on the page number provided
const getRandomUser = (pageNumber = 1) => axios
  .get(`https://randomuser.me/api?page=${pageNumber}`)
  .then((response) => response)
  .catch((exception) => {
    console.error(`Exception while retrieveing random user data${exception}`);
  });

const getRandomUsersList = (numberOfUsers = 5) => axios
  .get(`https://randomuser.me/api?results=${numberOfUsers}`)
  .then((response) => {
    console.info(response);
    return response.data.results;
  })
  .catch((exception) => {
    console.error(`Exception while retrieveing random user data${exception}`);
  });
export { getRandomUser, getRandomUsersList };
