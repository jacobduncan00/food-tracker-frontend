export default async function getData(field: string, item: string) {
  const url = `https://backend-foodtracker.herokuapp.com/find-${field}/${item}`;
  let status;
  await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status === 200) {
      console.log(
        `Response status code ${response.status}: Information was fetched from database`
      );
      status = response;
    } else if (response.status === 404) {
      console.log(
        `Response status code ${response.status}: Unsuccessful attempt to fetch information from database`
      );
      status = 404;
    } else {
      console.log(
        `Response status code ${response.status}: Unsuccessful attempt to fetch information from database`
      );
      status = 0;
    }
  });
  return status;
}
