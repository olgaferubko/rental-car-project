import BrandSelect from "./BrandSelect";
import PriceSelect from "./PriceSelect";
import MileageInput from "./MileageInput";
import SearchButton from "./SearchButton";

const FilterPanel = ({ brands }) => {
  return (
    <div className="filters">
      <BrandSelect brands={brands} />
      <PriceSelect />
      <MileageInput />
      <SearchButton />
    </div>
  );
};

export default FilterPanel;
