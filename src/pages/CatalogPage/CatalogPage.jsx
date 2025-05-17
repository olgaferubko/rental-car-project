import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import CarCatalogList from "../../components/CarCatalogList/CarCatalogList";
import { selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars, getCarsBrands } from '../../redux/cars/operations';
import Header from "../../components/Header/Header";


const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars(currentPage));
    dispatch(getCarsBrands());
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <CarCatalogList />
    </div>
  );
};

export default CatalogPage;