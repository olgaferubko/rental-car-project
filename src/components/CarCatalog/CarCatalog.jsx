import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectLoading } from "../../redux/cars/selectors";
import { fetchCars } from "../../redux/cars/operations";
import { incrementPage } from "../../redux/cars/slice";
import CarItem from "../CarItem/CarItem";

const CarCatalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars) || [];
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCars());
  };

  return (
    <section className="car-catalog">
      <div className="car-grid">
        {Array.isArray(cars) && cars.map(car => (
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
