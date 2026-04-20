import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//
import Loading from "../component/Loading";
//
import "./Detail.css";

function Detail() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  //
  const { id } = useParams();
  const navi = useNavigate();

  async function fetchData() {
    if (!isLoading) {
      setIsLoading(true);
    }

    const API_URL = `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      alert("The Service is in error!\nPlease try again.");
      return;
    }

    const object = await response.json();

    setMovie(object.data.movie);
    setIsLoading(false);
  }

  function clickHome() {
    if (window.history.length > 1) {
      navi(-1);
    } else {
      navi("/");
    }
  }

  function imageError(event) {
    event.currentTarget.style.display = "none";
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <button onClick={clickHome}>home</button>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className="detail"
          style={{
            "--bg-url": `url(${movie.background_image_original})`,
          }}
        >
          <div className="head">
            <div>
              <img
                src={movie.medium_cover_image}
                alt={movie.id}
                onError={imageError}
              />
            </div>

            <div>
              <h1>{movie.title_long}</h1>
              <p>
                {movie.rating} | {movie.runtime}mintues
              </p>
              <p>{movie.description_full}</p>

              <div>
                <ul>
                  {movie.genres?.map((genre, index) => (
                    <li key={index}>{genre}</li>
                  )) || []}
                </ul>
              </div>
            </div>

            <div className="cast">
              <ul>
                {movie.cast?.map((actor, index) => (
                  <li key={index}>
                    <img
                      src={actor.url_small_image}
                      alt={index}
                      onError={imageError}
                    />
                    <div>
                      <p>
                        "
                        {actor.character_name || actor.name}
                        "
                      </p>
                      <p>- {actor.name}</p>
                    </div>
                  </li>
                )) || []}
              </ul>
            </div>
          </div>

          <div className="screenshot">
            <img
              src={movie.medium_screenshot_image1}
              alt={movie.id}
              onError={imageError}
            />
            <img
              src={movie.medium_screenshot_image2}
              alt={movie.id}
              onError={imageError}
            />
            <img
              src={movie.medium_screenshot_image3}
              alt={movie.id}
              onError={imageError}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
