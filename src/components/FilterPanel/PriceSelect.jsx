import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";

const PriceSelect = () => {
  const dispatch = useDispatch();
  const { price } = useSelector(selectFilters);

  const handleChange = e => {
    dispatch(setFilters({ price: e.target.value }));
  };

  const prices = ["30", "40", "50", "60", "70", "80"];

  return (
    <select value={price} onChange={handleChange}>
      <option value="">Choose a price</option>
      {prices.map(p => (
        <option key={p} value={p}>
          {p}
        </option>
      ))}
    </select>
  );
};

export default PriceSelect;
