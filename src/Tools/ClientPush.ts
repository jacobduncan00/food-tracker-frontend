// Function that is used to communicate with the backend and send the data JSON object
// to be stored in the MongoDB database
export default async function sendInfo(newObj: object) {
  let flag = await fetch("http://localhost:3001/insert", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newObj),
  }).then((response) => {
    if (response.status === 200) {
      console.log(
        `Response status code ${response.status}: Information was added to database`
      );
      return 1;
    } else {
      console.log(
        `Response status code ${response.status}: Unsuccessful attempt to add information to database`
      );
      return 0;
    }
  });
  return flag;
}
