import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Apps loaded:", data);
        setApps(data.slice(0, 8));
      })
      .catch(error => console.error("Error loading apps:", error));
  }, []);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Banner */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          We Build <br />
          <span className="text-primary">Productive</span> Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          At HERO.iO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
        
        {/* Store Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#" className="btn btn-outline btn-lg gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            Google Play
          </a>
          <a href="#" className="btn btn-primary btn-lg gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            App Store
          </a>
        </div>

        {/* Hero Image - Phone mockup with floating icons */}
        <div className="relative max-w-md mx-auto">
          <img src="/assets/hero.png" alt="App Preview" className="mx-auto rounded-3xl shadow-2xl" />
          
          {/* Floating icons around the phone */}
          <div className="absolute -left-12 top-20 animate-bounce">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">📱</span>
            </div>
          </div>
          <div className="absolute -left-16 bottom-32 animate-pulse">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">✓</span>
            </div>
          </div>
          <div className="absolute -left-12 bottom-12 animate-bounce delay-100">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">⚡</span>
            </div>
          </div>
          <div className="absolute -right-12 top-32 animate-pulse delay-200">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🎵</span>
            </div>
          </div>
          <div className="absolute -right-16 top-64 animate-bounce">
            <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">⏸</span>
            </div>
          </div>
          <div className="absolute -right-12 bottom-24 animate-pulse">
            <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💧</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted By Millions, Built For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-sm uppercase tracking-wide mb-2">Total Downloads</div>
              <div className="text-5xl font-bold mb-2">29.6M</div>
              <div className="text-sm opacity-90">21% More Than Last Month</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wide mb-2">Total Users</div>
              <div className="text-5xl font-bold mb-2">906K</div>
              <div className="text-sm opacity-90">18% More Than Last Month</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wide mb-2">Total Reviews</div>
              <div className="text-5xl font-bold mb-2">132+</div>
              <div className="text-sm opacity-90">In More Than 21 stores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">Trending Apps</h2>
          <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
        </div>

        {apps.length === 0 ? (
          <div className="text-center py-12">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="mt-4 text-gray-500">Loading apps...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <Link 
                key={app.id} 
                to={`/apps/${app.id}`} 
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <figure className="px-6 pt-6">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="rounded-xl w-full h-40 object-cover" 
                  />
                </figure>
                <div className="card-body items-center text-center p-4">
                  <h3 className="card-title text-lg">{app.title}</h3>
                  <p className="text-sm text-gray-600">{app.companyName}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span>⭐</span>
                    <span>{app.ratingAvg}</span>
                    <span className="text-gray-500">•</span>
                    <span>📥</span>
                    <span>{(app.downloads / 1000000).toFixed(1)}M</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link to="/apps" className="btn btn-primary btn-lg">
            Show All Apps
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;