import { useEffect, useState } from "react";
//
import Loading from "../component/Loading";
import Card from "../component/Card";
//
import "./Home.css";

function Home() {
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

    const object = await response.json();

    setMovieCount(object.data.movie_count);
    setMovieList(object.data.movies);
    setLastPage(
      Math.round(object.data.movie_count / LIMIT),
    );
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
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <h1>Hello Movie World!</h1>

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
            {movieList.map((movie) => (
              <Card
                key={movie.id}
                id={movie.id}
                thumbnail={movie.medium_cover_image}
                title={movie.title_long}
                rating={movie.rating}
                runtime={movie.runtime}
                genreList={movie.genres}
                summary={movie.summary}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
