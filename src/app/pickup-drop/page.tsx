"use client";
import React, { useState } from "react";
import { Users, Gauge, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pickupDropServices as pickupData } from "@/data/pickupdrop";

const PickupDropPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedType, setSelectedType] = useState('All Types');
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('All Locations');
    setSelectedType('All Types');
    setSortOrder('lowToHigh');
  };

  const filteredServices = pickupData
    .filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === 'All Locations' || service.location === selectedLocation) &&
      (selectedType === 'All Types' || service.type === selectedType)
    )
    .sort((a, b) => {
      const priceA = a.basePrice || 400;
      const priceB = b.basePrice || 400;
      return sortOrder === 'lowToHigh' ? priceA - priceB : priceB - priceA;
    });

  const uniqueLocations = ['All Locations', ...new Set(pickupData.map(s => s.location))];
  const uniqueTypes = ['All Types', ...new Set(pickupData.map(s => s.type))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2611830/pexels-photo-2611830.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 container-custom mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pickup & Drop Services in Goa
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Reliable and comfortable pickup and drop services across Goa. From airports to beaches, we've got your transportation covered.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 w-full bg-white p-6 border rounded-lg shadow self-start">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={resetFilters} className="text-sm text-primary-600 hover:underline">
                Reset All
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Pickup Location</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {uniqueLocations.map(loc => <option key={loc}>{loc}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Service Type</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {uniqueTypes.map(type => <option key={type}>{type}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Sort by</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="lowToHigh">Fare: Low to High</option>
                <option value="highToLow">Fare: High to Low</option>
              </select>
            </div>
          </aside>

          {/* Listings */}
          <div className="lg:w-3/4 w-full space-y-6">
            <input
              type="text"
              placeholder="Search by service name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />

            {filteredServices.map(service => (
              <div key={service.id} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 p-6 flex items-center justify-center bg-white">
                    <div className="relative w-full max-w-[320px] aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {service.type}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-6 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 flex items-center">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-md text-sm font-medium whitespace-nowrap">
                          Book Now
                        </button>
                      </div>
                    </div>


                    {/* Fare Table */}
                    <table className="w-full text-sm border border-gray-200 rounded">
                      <thead className="bg-gray-100 text-gray-600">
                        <tr>
                          <th className="p-2">Base Fare</th>
                          <th className="p-2">Per Km</th>
                          <th className="p-2">Waiting Charges</th>
                          <th className="p-2">AC</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white text-gray-800 text-center">
                        <tr>
                          <td className="p-2">₹ {service.basePrice}</td>
                          <td className="p-2">₹ {service.extraKmRate}</td>
                          <td className="p-2">₹ {service.waitingCharge}</td>
                          <td className="p-2">{service.ac ? "Yes" : "No"}</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-600 text-sm pt-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary-500" />
                        {service.seats} Seats
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2 text-primary-500" />
                        {service.transmission}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                        {service.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary-500" />
                        On-Time Pickup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PickupDropPage;