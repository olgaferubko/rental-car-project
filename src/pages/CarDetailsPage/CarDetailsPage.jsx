import CarDetails from '../../components/CarDetails/CarDetails';
import Header from "../../components/Header/Header";
import s from "./CarDetailsPage.module.css"

const CarDetailsPage = () => {
  return (
      <>
        <Header />
        <div className={s.wrapper}>
        <CarDetails />
        </div>
      </>
  );
};

export default CarDetailsPage;
