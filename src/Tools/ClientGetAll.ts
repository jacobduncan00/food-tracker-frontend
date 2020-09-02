export default async function getData() {
  const url = `https://backend-foodtracker.herokuapp.com/log`;
  let status;
  await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    status = response;
    if (response.status === 200) {
      console.log(
        `Response status code ${response.status}: Information was fetched from database`
      );
    } else {
      console.log(
        `Response status code ${response.status}: Unsuccessful attempt to fetch information from database`
      );
    }
  });
  return status;
}
