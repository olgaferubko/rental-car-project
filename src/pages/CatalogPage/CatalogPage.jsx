import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import CarCatalogList from "../../components/CarCatalogList/CarCatalogList";
import s from "./CatalogPage.module.css";
import { selectIsLoading, selectPage } from '../../redux/cars/selectors';
import { getAllCars } from '../../redux/cars/operations';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllCars(currentPage));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.container}>
      <CarCatalogList />
    </div>
  );
};

export default CatalogPage;