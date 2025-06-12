"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { vehicles } from "../data/vehicles";
import { taxis } from "../data/taxirental";
import { bikeRentals as bikes } from "../data/bikerental";
import { cars as selfdrive } from "../data/selfdrive";
import {  Calendar, Clock, Users } from "lucide-react";

type FilterType = 'All' | 'Taxi' | 'Bike' | 'Self-Drive';

const VehiclesSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('All');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      gsap.to(".vehicle-card", {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.4)",
      });
    }
  }, [inView]);

  useEffect(() => {
    gsap.fromTo(
      ".vehicle-card",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [filter]);

  const renderCard = () => {
    switch (filter) {
      case "Taxi":
        return taxis.map((taxi) => (
          <div
            key={taxi.id}
            className="vehicle-card card shadow-md scale-95 opacity-0 card-hover flex flex-col justify-between h-full"
          >
            <div className="relative h-60">
              <img
                src={taxi.image}
                alt={taxi.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {taxi.type}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-2">{taxi.name}</h3>

              <div className="text-sm text-gray-700 mb-2">
                <strong>Location:</strong> {taxi.location}
              </div>

              <div className="flex justify-between text-sm mb-4 text-primary-700">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  ₹{taxi.basePrice}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {taxi.seats} Seater
                </div>
              </div>

              <button className="btn btn-primary w-full text-sm">Book Now</button>
            </div>
          </div>
        ));

      case "Bike":
        return bikes.map((bike) => (
          <div
            key={bike.id}
            className="vehicle-card card shadow-md scale-95 opacity-0 card-hover flex flex-col justify-between h-full"
          >
            <div className="relative h-60">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {bike.type}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-2">{bike.name}</h3>

              <div className="text-sm text-gray-700 mb-2">
                <strong>Location:</strong> {bike.location}
              </div>

              <div className="flex justify-between text-sm mb-4 text-primary-700">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  ₹{bike.basePrice}/day
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {bike.seats} Seater
                </div>
              </div>

              <button className="btn btn-primary w-full text-sm">Book Now</button>
            </div>
          </div>
        ));
  case "Self-Drive":
        return selfdrive.map((car) => (
          <div key={car.id} className="vehicle-card card shadow-md scale-95 opacity-0 card-hover flex flex-col justify-between h-full">
            <div className="relative h-60">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">{car.type}</div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-2">{car.name}</h3>
              <div className="flex justify-between text-sm mb-4 text-primary-700">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> ₹{car.basePrice}/day</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-1" /> ₹{car.extraHourRate}/hour</div>
              </div>
              <button className="btn btn-primary w-full text-sm">Book Now</button>
            </div>
          </div>
        ));
      default: // All
        return vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="vehicle-card card shadow-md scale-95 opacity-0 card-hover flex flex-col justify-between h-full"
          >
            <div className="relative h-60">
              <img
                src={vehicle.imageUrl}
                alt={vehicle.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-3 right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {vehicle.type}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-semibold mb-2">{vehicle.name}</h3>

              <div className="flex justify-between text-sm mb-4 text-primary-700">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  ₹{vehicle.pricePerDay}/day
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  ₹{vehicle.pricePerHour}/hour
                </div>
              </div>

              <button className="btn btn-primary w-full text-sm">Book Now</button>
            </div>
          </div>
        ));
    }
  };

  return (
    <section id="vehicles" ref={ref} className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Our Vehicle Fleet</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Choose from a variety of vehicles to explore Goa comfortably and affordably.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {(['All', 'Taxi', 'Bike', 'Self-Drive'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn ${filter === type ? 'btn-primary' : 'btn-outline'} text-sm`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {renderCard()}
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;
