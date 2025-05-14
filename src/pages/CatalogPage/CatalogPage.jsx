import FilterPanel from "../../components/FilterPanel/FilterPanel";
import CarCatalog from "../../components/CarCatalog/CarCatalog";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={css.container}>
      <FilterPanel />
      <CarCatalog />
    </div>
  );
};

export default CatalogPage;