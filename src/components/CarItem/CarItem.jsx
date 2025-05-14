import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/favourites/slice";
import { selectFavorites } from "../../redux/favourites/selectors";

const CarItem = ({ car }) => {
  const {
    id,
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const [, city, country] = address.split(",");

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <div>
      <img src={img} alt={`${brand} ${model}`} width={300} />

      <div>
        <h3>
          {brand} {model}, {year}
        </h3>
        <p>Price: ${rentalPrice}</p>
        <p>Location: {city}, {country}</p>
        <p>Company: {rentalCompany}</p>
        <p>Type: {type}</p>
        <p>Mileage: {mileage.toLocaleString("en-US")} km</p>
      </div>

      <div>
        <button onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
        <button onClick={() => navigate(`/catalog/${id}`)}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarItem;
