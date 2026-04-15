import PropTypes from "prop-types";
//
import "./Card.css";
import { Link } from "react-router-dom";

function Card({
  thumbnail,
  title,
  rating,
  runtime,
  genreList,
  summary,
}) {
  return (
    <Link to="/detail">
      <div className="card">
        <img src={thumbnail} alt={title} />
        <div>
          <h2>
            {title} | ({rating} / {runtime}min)
          </h2>
          <ul>
            {genreList.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Card;
