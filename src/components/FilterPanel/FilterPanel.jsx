import { useSelector } from "react-redux";
import { selectBrandsList } from "../../redux/filters/selectors";
import BrandSelect from "./BrandSelect";
import PriceSelect from "./PriceSelect";
import MileageInput from "./MileageInput";
import SearchButton from "./SearchButton";

const FilterPanel = () => {
  const brandsListFromAPI = useSelector(selectBrandsList);

  return (
    <div>
      <BrandSelect brands={brandsListFromAPI} />
      <PriceSelect />
      <MileageInput />
      <SearchButton />
    </div>
  );
};

export default FilterPanel;