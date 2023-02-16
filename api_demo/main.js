const axios = require('axios');
var msg = [{
    name : 'ganesh'
},
{
    name : 'sai'
}]
// Make a request for a user with a given ID

// Optionally the request above could also be done as

const getdata = async() =>{
   await axios.get('https://63ec897dbe929df00cacf97e.mockapi.io/users/')
  .then(function (response) {
    // handle success
    msg = response
    // console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log(msg.status);
    msg.data.forEach(i => {
        console.log(i.name);
    });
  });

}
getdata()

