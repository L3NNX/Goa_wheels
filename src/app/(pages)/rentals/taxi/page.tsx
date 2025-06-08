"use client";
import React, { useState } from "react";
import { Users, Gauge, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { taxis as taxiData } from "@/data/taxirental";

const TaxiRentalPage = () => {
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

  const filteredTaxis = taxiData
    .filter(taxi =>
      taxi.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === 'All Locations' || taxi.location === selectedLocation) &&
      (selectedType === 'All Types' || taxi.type === selectedType)
    )
    .sort((a, b) => {
      const priceA = a.basePrice || 1200;
      const priceB = b.basePrice || 1200;
      return sortOrder === 'lowToHigh' ? priceA - priceB : priceB - priceA;
    });

  const uniqueLocations = ['All Locations', ...new Set(taxiData.map(t => t.location))];
  const uniqueTypes = ['All Types', ...new Set(taxiData.map(t => t.type))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1653928359063-13eb336a4196?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
              <div className="absolute inset-0 bg-black/10 z-0" />
        <div className="relative z-10 container-custom mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Taxi Rentals in Goa with Driver
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Book a comfortable taxi with a professional driver for sightseeing, airport transfers, or intercity travel.
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Listings */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full bg-white p-6 border rounded-lg shadow self-start">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={resetFilters} className="text-sm text-primary-600 hover:underline">
                Reset All
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Location</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {uniqueLocations.map(loc => <option key={loc}>{loc}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Cab Type</label>
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
              placeholder="Search by cab name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />

            {filteredTaxis.map(taxi => (
              <div key={taxi.id} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 p-6 flex items-center justify-center bg-white">
                    <div className="relative w-full max-w-[320px] aspect-[4/3]">
                      <img
                        src={taxi.image}
                        alt={taxi.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {taxi.type}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-6 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{taxi.name}</h3>
                        {/* Description removed as it does not exist on taxi */}
                      </div>
                      <button className="mt-4 md:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
                        Book Now
                      </button>
                    </div>

                    {/* Fare Table */}
                    <table className="w-full text-sm border border-gray-200 rounded">
                      <thead className="bg-gray-100 text-gray-600">
                        <tr>
                          <th className="p-2">Base Fare</th>
                          <th className="p-2">Per Km</th>
                          <th className="p-2">Night Charge</th>
                          <th className="p-2">AC</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white text-gray-800 text-center">
                        <tr>
                          <td className="p-2">₹ {taxi.basePrice}</td>
                          <td className="p-2">₹ {taxi.extraKmRate}</td>
                          <td className="p-2">
                            ₹ {taxi.nightCharge6to11} / ₹ {taxi.nightChargeAfter12}
                          </td>
                          <td className="p-2">{taxi.ac ? "Yes" : "No"}</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-600 text-sm pt-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary-500" />
                        {taxi.seats} Seats
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2 text-primary-500" />
                        {taxi.transmission}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                        {taxi.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary-500" />
                        Driver: Available
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

export default TaxiRentalPage;
