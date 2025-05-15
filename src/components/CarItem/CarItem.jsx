import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavourite } from "../../redux/favourites/slice";
import { selectFavourites } from "../../redux/favourites/selectors";

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

  const favourites = useSelector(selectFavourites);
  const isFavourite = favourites.some(fav => fav.id === car.id);

  const [, city, country] = address.split(",");

  const handleToggle = () => {
    dispatch(toggleFavourite(car));
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
        <button onClick={handleToggle}>
          {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
        </button>
        <button onClick={() => navigate(`/catalog/${id}`)}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default CarItem;
