import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectLoading } from "../../redux/cars/selectors";
import { loadMore, fetchCars } from "../../redux/cars/operations";
import CarItem from "../CarItem/CarItem";

const CarCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);

  const handleLoadMore = () => {
    dispatch(loadMore());
    dispatch(fetchCars());
  };

  return (
    <section className="car-catalog">
      <div className="car-grid">
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>

      {!isLoading && (
        <div className="load-more-wrapper">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      )}
    </section>
  );
};

export default CarCatalog;