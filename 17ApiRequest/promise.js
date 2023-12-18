// Promise reruires a function and that function require two parameters 1. resolve, 2.reject

// .then() is directly connected to resolve

// Method-1 (by two parts)
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async is Created");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promised Consumed");
});

// Method-2 (by single part method)
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is created");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promised is again consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Ankit", email: "ankit@gmail.com" });
  }, 1000);
}); // here we can see that resolve have connection with .then() beacuse all the values inside resolve can access by using .then()
promiseThree.then((user) => {
  console.log(user);
});

// using both resolve and reject
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ankit", password: "12345" });
    } else {
      reject("Something Went wrong");
    }
  }, 2000);
});

promiseFour()
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolve or rejectd");
  });

// Using async and await method where try and catch will be used
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Vikas", password: "133445" });
    } else {
      reject("Something Went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const rsesponse = await promiseFive;
    console.log(Response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

/*--------- Fetch -------------

fetch() is a modern JavaScript function used to make network requests. It is a part of the Web API and allows you to make HTTP requests to a server and handle the response asynchronously. 

1. The fetch() method starts the process of fetching a resource from a server.

2. The fetch() method returns a Promise that resolves to a Response object.


let URL = "https://api.github.com/users/ankitchoubeyy";
let githubAPI = fetch(URL);
githubAPI.then((res)=>{
  res.json();
}).then((data)=>{
  console.log(data);
})

*/
const username = 'ankitchoubeyy'; // Replace with the GitHub username you want to fetch details for

fetch(`https://api.github.com/users/${username}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(user => {
    // Handle the user data here
    console.log('GitHub User Details:', user);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error fetching GitHub user details:', error);
  });
