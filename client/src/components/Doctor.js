import React from "react";
import { useNavigate } from "react-router-dom";
function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div class="card w-90" >
    <img class="card-img-top cursor-pointer w-50 h-50" src={process.env.PUBLIC_URL + './images/194915.png'} alt="" width="25%" height= "25%"
   onClick={() => navigate(`/book-appointment/${doctor._id}`)} ></img>
    <div
      className="card-body p-2 cursor-pointer "
     // style="max-width: 18rem;"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Specialization : </b>
        {doctor.specialization} 
      </p>
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>

    </div>
    </div>
  );
}

export default Doctor;
