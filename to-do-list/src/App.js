import { useEffect, useState } from "react";
//
import Loading from "./Loading";
//
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const [movieCount, setMovieCount] = useState(0);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  //
  const LIMIT = 20;
  const ORDERBY = "desc";
  const SORTBY = "rating";
  const MINRATING = 8.5;

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);
      setMovieList([]);
    }

    const param = new URLSearchParams({
      limit: LIMIT,
      order_by: ORDERBY,
      sort_by: SORTBY,
      minimum_rating: MINRATING,
      page: page,
    });

    const API_URL = `https://movies-api.accel.li/api/v2/list_movies.json?${param}`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      alert("The Service is in error!\nPlease try again.");
      return;
    }

    const data = await response.json();

    setMovieCount(data.data.movie_count);
    setMovieList(data.data.movies);
    setLastPage(Math.round(data.data.movie_count / LIMIT));
    setIsLoading(false);
  }

  function clickPrev() {
    if (page === 1) {
      alert("No more pages.");
      return;
    }

    setPage((current) => current - 1);
  }

  function clicNext() {
    if (page === lastPage) {
      alert("No more pages.");
      return;
    }

    setPage((current) => current + 1);
  }

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <h1>Hello Moive World!</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h4>total search counts: {movieCount}</h4>
          <p>
            <button onClick={clickPrev}>prev</button>
            {page} / {lastPage}
            <button onClick={clicNext}>next</button>
          </p>
          <div className="container">
            {movieList.map((item) => (
              <div key={item.id} className="card">
                <img src={item.medium_cover_image} />
                <div>
                  <h2>
                    {item.title_long} | ({item.rating} /{" "}
                    {item.runtime}min)
                  </h2>
                  <ul>
                    {item.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                    ))}
                  </ul>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
