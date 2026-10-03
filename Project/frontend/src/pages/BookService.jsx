import { useState } from "react";

function BookService() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      vehicleNumber,
      vehicleModel,
      service,
      date,
      time,
    });

    alert("Service booked successfully!");
  };

  return (
    <div className="booking-page">
      <div className="booking-card">

        <h2>Book Vehicle Service</h2>

        <p>
          Enter your vehicle details and select the required service.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Vehicle Number</label>
          <input
            type="text"
            placeholder="Example: TS09AB1234"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />

          <label>Vehicle Model</label>
          <input
            type="text"
            placeholder="Example: Hyundai i20"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            required
          />

          <label>Select Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="">Select a service</option>
            <option value="General Service">General Service</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Brake Service">Brake Service</option>
            <option value="AC Service">AC Service</option>
            <option value="Full Service">Full Service</option>
          </select>

          <label>Service Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label>Service Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <button type="submit">
            Book Service
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookService;