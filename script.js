"use strict";

const elInput = document.querySelector("input");

const elBtn = document.querySelector("btn");
const elForm = document.querySelector("#form");
const elSelect = document.querySelector("#select");

const personText = document.querySelector(".card__text");
const bikeText = document.querySelector("#bike-text");
const carText = document.querySelector("#car-text");
const planeText = document.querySelector("#plane-text");

const personMin = document.querySelector("#person-min");
const bikeMin = document.querySelector("#bike-min");
const carMin = document.querySelector("#car-min");
const planeMin = document.querySelector("#plane-min");

const personSekund = document.querySelector("#person-sekund");
const bikeSekund = document.querySelector("#bike-sekund");
const carSekund = document.querySelector("#car-sekund");
const planeSekund = document.querySelector("#plane-sekund");

let speedPeople = 3.6;
let speedBike = 20.1;
let speedCar = 70;
let speedPlane = 800;

// let hourPerson;
// let hourBike;
// let hourCar;
// let hourPlane;

// let minPerson;
// let minBike;
// let minCar;
// let minPlane;

// let sekundPerson;
// let sekundBike;
// let sekundCar;
// let sekundPlane;

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let hourPerson = Math.trunc(elInput.value / speedPeople);
  let hourBike = Math.trunc(elInput.value / speedBike);
  let hourCar = Math.trunc(elInput.value / speedCar);
  let hourPlane = Math.trunc(elInput.value / speedPlane);

  let minPerson = Math.trunc((elInput.value / speedPeople - hourPerson) * 60);
  let minBike = Math.trunc((elInput.value / speedBike - hourBike) * 60);
  let minCar = Math.trunc((elInput.value / speedCar - hourCar) * 60);
  let minPlane = Math.trunc((elInput.value / speedPlane - hourPlane) * 60);

  let sekundPerson = Math.trunc(
    ((elInput.value / speedPeople - hourPerson) * 60 - minPerson) * 60
  );
  let sekundBike = Math.trunc(
    ((elInput.value / speedBike - hourBike) * 60 - minBike) * 60
  );
  let sekundCar = Math.trunc(
    ((elInput.value / speedCar - hourCar) * 60 - minCar) * 60
  );
  let sekundPlane = Math.trunc(
    ((elInput.value / speedPlane - hourPlane) * 60 - minPlane) * 60
  );

  personText.textContent = `${hourPerson} Soat`;
  bikeText.textContent = `${hourBike} Soat`;
  carText.textContent = `${hourCar} Soat`;
  planeText.textContent = `${hourPlane} Soat`;

  personMin.textContent = `${minPerson} Min`;
  bikeMin.textContent = `${minBike} Min`;
  carMin.textContent = `${minCar} Min`;
  planeMin.textContent = `${minPlane} Min`;

  personSekund.textContent = `${sekundPerson} Sekund`;
  bikeSekund.textContent = `${sekundBike} Sekund`;
  carSekund.textContent = `${sekundCar} Sekund`;
  planeSekund.textContent = `${sekundPlane} Sekund`;

  console.log(planeText, personMin, personSekund);
});
