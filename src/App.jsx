import axios from "axios";
function App() {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhNzMxZWRiMGU0MTI5NzFhNTYxZDE5NTcyMWIwYiIsInN1YiI6IjY1NDk5NzYxOTI0Y2U2MDEzYmI3OThmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDzR9rsSuSjWbWOJQwnIfVloAAyPmY2tlH6wPQYc4EY",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <>
      <h1 className="bg-red-200">hello</h1>
    </>
  );
}

export default App;
