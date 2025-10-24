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
          <a href="#" className="btn btn-outline gap-2">
            <img src="/assets/icon-downloads.png" alt="" className="w-5 h-5" />
            Google Play
          </a>
          <a href="#" className="btn btn-primary gap-2">
            <img src="/assets/hero.png" alt="" className="w-5 h-5" />
            App Store
          </a>
        </div>

        {/* Hero Image - Phone mockup with floating icons */}
        <div className="relative max-w-md mx-auto">
          <img src="/assets/hero.png" alt="App Preview" className="mx-auto rounded-3xl shadow-2xl" />
          
          {/* Floating icons around the phone */}
          <div className="absolute -left-12 top-20 animate-bounce">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <img src="/assets/icon-downloads.png" alt="" className="w-6 h-6" />
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
      <section className="bg-primary text-white py-12">
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
                  <img src="/assets/icon-ratings.png" alt="rating" className="w-4 h-4" />
                  <span>{app.ratingAvg}</span>
                  <span className="text-gray-500">•</span>
                  <img src="/assets/icon-downloads.png" alt="downloads" className="w-4 h-4" />
                  <span>{(app.downloads / 1000000).toFixed(1)}M</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

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