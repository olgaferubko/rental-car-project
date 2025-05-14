import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";

const MileageInput = () => {
  const dispatch = useDispatch();
  const { mileageFrom, mileageTo } = useSelector(selectFilters);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <>
      <input
        name="mileageFrom"
        type="number"
        placeholder="From"
        value={mileageFrom}
        onChange={handleChange}
      />
      <input
        name="mileageTo"
        type="number"
        placeholder="To"
        value={mileageTo}
        onChange={handleChange}
      />
    </>
  );
};

export default MileageInput;
