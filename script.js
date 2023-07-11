const flightBtn = document.querySelector(".flightBtn");
const hotelBtn = document.querySelector(".hotelBtn");
const rentalBtn = document.querySelector(".rentalBtn");
const flightBooking = document.querySelector(".flightBooking");
const hotelBooking = document.querySelector(".hotelBooking");
const rentalBooking = document.querySelector(".rentalBooking");

hotelBtn.addEventListener("click", function () {
    hotelBtn.classList.add("active");
    flightBtn.classList.remove("active");
    rentalBtn.classList.remove("active");
    hotelBooking.style.display = "block";
    flightBooking.style.display = "none";
    rentalBooking.style.display = "none";
  });
  
  flightBtn.addEventListener("click", function () {
    flightBtn.classList.add("active");
    hotelBtn.classList.remove("active");
    rentalBtn.classList.remove("active");
    flightBooking.style.display = "block";
    rentalBooking.style.display = "none"; 
    hotelBooking.style.display = "none";
  });
  
  rentalBtn.addEventListener("click", function () {
    rentalBtn.classList.add("active");
    flightBtn.classList.remove("active");
    hotelBtn.classList.remove("active");
    rentalBooking.style.display = "block";
    hotelBooking.style.display = "none";
    flightBooking.style.display = "none";
  });
