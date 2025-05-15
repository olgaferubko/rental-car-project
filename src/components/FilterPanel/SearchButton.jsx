import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { clearCars } from "../../redux/cars/slice";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCars());
    dispatch(fetchCars());
  };

  return <button onClick={handleClick}>Search</button>;
};

export default SearchButton;
