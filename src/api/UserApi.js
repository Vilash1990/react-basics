import axios from "axios";

//pageNumber defaults to 1 if no page number provided
//This method is to retrieve the random user information on the page number provided
const getRandomUser = (pageNumber=1) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then((response) => {
      return response;
    })
    .catch((exception) => {
      console.error("Exception while retrieveing random user data"+ exception);
    });
};


const getRandomUsersList = () => {
    return axios
      .get(`https://randomuser.me/api?results=20`)
      .then((response) => {
          console.info(response);
        return response.data.results;
      })
      .catch((exception) => {
        console.error("Exception while retrieveing random user data"+ exception);
      });
  };
export {getRandomUser, getRandomUsersList};