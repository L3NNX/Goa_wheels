"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Fuel, Gauge } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cars as carData } from '@/data/selfdrive';

const SelfDrivePage = () => {
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

  const filteredCars = carData
    .filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === 'All Locations' || car.location === selectedLocation) &&
      (selectedType === 'All Types' || car.type === selectedType)
    )
    .sort((a, b) => {
      const priceA = a.basePrice || 2500;
      const priceB = b.basePrice || 2500;
      return sortOrder === 'lowToHigh' ? priceA - priceB : priceB - priceA;
    });

  const uniqueLocations = ['All Locations', ...new Set(carData.map(car => car.location))];
  const uniqueTypes = ['All Types', ...new Set(carData.map(car => car.type))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white pt-32 pb-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1683382305525-d1581285414a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 container-custom mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Self-Drive Car Rentals in Goa
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Explore the beaches and hinterlands of Goa at your own pace with our well-maintained fleet of self-drive cars.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Search + Listings */}
      <section className="py-12 bg-white">
        <div className="container-custom mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="lg:w-1/4 w-full bg-white p-6 border rounded-lg shadow self-start">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button onClick={resetFilters} className="text-sm text-primary-600 hover:underline">
                Reset All
              </button>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Location</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedLocation}
                onChange={e => setSelectedLocation(e.target.value)}
              >
                {uniqueLocations.map(loc => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Car Type Filter */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Car Type</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
              >
                {uniqueTypes.map(type => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Sorting Filter */}
            <div>
              <label className="block text-sm font-medium mb-1">Sort by</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value)}
              >
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </aside>

          {/* Right Column: Search + Listings */}
          <div className="lg:w-3/4 w-full space-y-6">
            {/* Search */}
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search by car name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
            </div>

            {/* Results */}
            {filteredCars.map(car => (
              <div
                key={car.id}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 p-6 flex items-center justify-center bg-white">
                    <div className="relative w-full max-w-[320px] aspect-[4/3]">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {car.type}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-6 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>
                        <div className="flex items-center mt-1 text-yellow-500 text-sm">
                          ★★★★★ <span className="text-gray-400 ml-2">(5 reviews)</span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-md text-sm font-medium">
                        Enquire Now
                      </button>
                    </div>

                    {/* Pricing Table */}
                    <table className="w-full text-sm border border-gray-200 rounded">
                      <thead className="bg-gray-100 text-gray-600">
                        <tr>
                          <th className="p-2">8 Hrs / 80 Kms</th>
                          <th className="p-2">Extra Km</th>
                          <th className="p-2">Extra Hr</th>
                          <th className="p-2">6–11 pm</th>
                          <th className="p-2">After 12 am</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white text-gray-800 text-center">
                        <tr>
                          <td className="p-2">₹ {car.basePrice || '2500'}</td>
                          <td className="p-2">₹ {car.extraKmRate || '18'}</td>
                          <td className="p-2">₹ {car.extraHourRate || '200'}</td>
                          <td className="p-2">₹ {car.nightCharge6to11 || '300'}</td>
                          <td className="p-2">₹ {car.nightChargeAfter12 || '500'}</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Tours */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded-md flex justify-between">
                        <span>North Goa Tour</span>
                        <span className="font-semibold">₹ {car.northGoaTour || '2000'}</span>
                      </div>
                      <div className="bg-green-50 border border-green-200 text-green-800 p-3 rounded-md flex justify-between">
                        <span>South Goa Tour</span>
                        <span className="font-semibold">₹ {car.southGoaTour || '2500'}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-600 text-sm pt-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary-500" />
                        {car.seats} Seats
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2 text-primary-500" />
                        {car.transmission}
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-2 text-primary-500" />
                        {car.fuel}
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2 text-primary-500" />
                        {car.mileage}
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

export default SelfDrivePage;
