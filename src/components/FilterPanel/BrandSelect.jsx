import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors";
import { setFilters } from "../../redux/filters/slice";

const BrandSelect = ({ brands }) => {
  const dispatch = useDispatch();
  const { brand } = useSelector(selectFilters);

  const handleChange = e => {
    dispatch(setFilters({ brand: e.target.value }));
  };

  return (
    <select value={brand} onChange={handleChange}>
      <option value="">Choose a brand</option>
      {brands.map(b => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  );
};

export default BrandSelect;
