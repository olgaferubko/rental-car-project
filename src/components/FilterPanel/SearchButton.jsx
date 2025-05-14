import { useDispatch } from "react-redux";
import { resetCars, fetchCars } from "../../redux/cars/operations";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetCars());
    dispatch(fetchCars());
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;
