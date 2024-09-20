import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Bookappointment.css'; // Import the CSS file for custom styles
import './Bookappointment1.css'; // Import the CSS file for custom styles

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Time slots data
  const slots = [
    '9:00AM', '9:30AM', '9:45AM', '10:00AM', '10:30AM', '10:45AM',
    '11:00AM', '11:30AM', '11:45AM', '12:00PM', '12:30PM', '12:45PM',
    '1:00PM', '1:30PM', '1:45PM', '2:00PM', '2:30PM', '2:45PM',
    '3:00PM', '3:30PM', '4:15PM', '5:00PM'
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <section id="book" className="py-4">
    <div className='container1'>
      <div className='container345'>
        <div className='fieldset'>
          <div className='row'>
            <div className="col-md-12">
              <h1>Book an appointment</h1>
              <form>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd-MM-yyyy"
                  className="datepicker"
                />
                <div id="timeSlots" className="row">
                  {slots.map((slot, index) => (
                    <div key={index} className="col-md-2 col-4 my-1 px-2">
                      <div
                        className={`cell py-1 ${selectedSlot === slot ? 'select' : ''}`}
                        onClick={() => handleTimeSlotClick(slot)}
                      >
                        {slot}
                      </div>
                    </div>
                  ))}
                </div>
                <h1>Car Information</h1>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="carmodelnumber" className="form-label">Car Model Number</label>
                    <input type="text" className="form-control" id="carmodelnumber" placeholder="Model Number" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="vehicleNumber" className="form-label">Vehicle Number</label>
                    <input type="text" className="form-control" id="vehicleNumber" placeholder="Vehicle Number" />
                  </div>
                </div>
                <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                <div className='vehical-container'>
                  <div className='row'>
                    <div className="col-6">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="sedan" />
                        <label className="form-check-label" htmlFor="sedan">Sedan</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="sportsCar" />
                        <label className="form-check-label" htmlFor="sportsCar">Sports car</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Coupe" />
                        <label className="form-check-label" htmlFor="Coupe">Coupe</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Wagon" />
                        <label className="form-check-label" htmlFor="Wagon">Wagon</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Pickup" />
                        <label className="form-check-label" htmlFor="Pickup">Pickup</label>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Hatchback" />
                        <label className="form-check-label" htmlFor="Hatchback">Hatchback</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Convertible" />
                        <label className="form-check-label" htmlFor="Convertible"> Convertible</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Sport Utility Vehical" />
                        <label className="form-check-label" htmlFor="Sport Utility Vehical">Sport Utility Vehical</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Minivan" />
                        <label className="form-check-label" htmlFor="Minivan">Minivan</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="vehicleType" id="Other" />
                        <label className="form-check-label" htmlFor="Other">Other</label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add other vehicle types */}
                <h1>Customer Information</h1>
                <div className="row">
                  <div className="col">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First name" />
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="mobileNo">Mobile Number</label>
                    <input type="text" className="form-control" id="mobileNo" placeholder="Enter mobile no" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="address2">Address 2</label>
                    <input type="text" className="form-control" id="address2" placeholder="Apartment, studio, or floor" />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="city">City</label>
                  <input type="text" className="form-control" id="city" placeholder="City" />
                </div>
                <h1>Services</h1>
                <div className="row">
                  <div className="col-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="oilChange" />
                      <label className="form-check-label" htmlFor="oilChange">Oil Change</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Battery" />
                      <label className="form-check-label" htmlFor="Battery">Battery</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Brakes" />
                      <label className="form-check-label" htmlFor="Brakes">Brakes</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Suspention Repair" />
                      <label className="form-check-label" htmlFor="Suspention Repair">Suspention Repair</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Wiper Blade Installation" />
                      <label className="form-check-label" htmlFor="Wiper Blade Installation">Wiper Blade Installation</label>
                    </div>
                  </div>
                  {/* Add other services */}
                <div className="col-4">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Auto Engine Diag" />
                      <label className="form-check-label" htmlFor="Auto Engine Diag">Auto Engine Diag</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="A/C Serivices" />
                      <label className="form-check-label" htmlFor="A/C Serivices">A/C Serivices</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Engine Repair" />
                      <label className="form-check-label" htmlFor="Engine Repair">Engine Repair</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Painting" />
                      <label className="form-check-label" htmlFor="Painting">Painting</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="General Repaire Maintainance" />
                      <label className="form-check-label" htmlFor="General Repaire Maintainance">General Repaire M</label>
                    </div>
                  </div>
                  <div className="col-4">
                  <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Air Conditioning" />
                      <label className="form-check-label" htmlFor="Air Conditioning">Air Conditioning</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Electrical Repairing" />
                      <label className="form-check-label" htmlFor="Electrical Repairing">Electrical Repairing</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Auto Detailing" />
                      <label className="form-check-label" htmlFor="Auto Detailing">Auto Detailing</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Diagonostic Service" />
                      <label className="form-check-label" htmlFor="Diagonostic Service">Diagonostic Service</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="Others" />
                      <label className="form-check-label" htmlFor="Others">Others</label>
                    </div>
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DateTimePicker;
