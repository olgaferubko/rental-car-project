import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import AccessoryList from "@/components/AccessoryList";
import RentalConditions from "@/components/RentalConditions";
import BookingForm from "@/components/BookingForm";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars/${id}`)
      .then(({ data }) => setCar(data));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <section className="car-details">
      <div>
        <img src={car.img} alt={car.model} width="400" />
      </div>

      <div>
        <h2>{car.brand} {car.model}, {car.year}</h2>
        <p><strong>{car.address}</strong></p>
        <p>Mileage: {car.mileage.toLocaleString("en-US")} km</p>
        <p><strong>${car.rentalPrice}</strong></p>
        <p>{car.description}</p>

        <RentalConditions conditions={car.rentalConditions} />

        <div>
          <h3>Car Specifications:</h3>
          <ul>
            <li>Year: {car.year}</li>
            <li>Type: {car.type}</li>
            <li>Fuel Consumption: {car.fuelConsumption}</li>
            <li>Engine Size: {car.engineSize}</li>
          </ul>
        </div>

        <AccessoryList items={[...car.accessories, ...car.functionalities]} />
      </div>

      <BookingForm />
    </section>
  );
};

export default CarDetailsPage;
