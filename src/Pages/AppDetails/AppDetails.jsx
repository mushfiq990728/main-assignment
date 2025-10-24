import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch app data
  useEffect(() => {
    fetch("/data/apps.json")
      .then(res => res.json())
      .then(data => {
        const foundApp = data.find(x => String(x.id) === String(id));
        setApp(foundApp);
        const installedList = JSON.parse(localStorage.getItem("installedApps") || "[]");
        setInstalled(installedList.includes(Number(id)));
      })
      .finally(() => setLoading(false));
  }, [id]);

  // ✅ Handle app installation
  const handleInstall = () => {
    const installedList = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!installedList.includes(app.id)) {
      installedList.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedList));
      setInstalled(true);
      toast.success("App installed successfully!");
    } else {
      toast.info("App already installed!");
    }
  };

  // ✅ Handle loading / not found
  if (loading) return <div className="py-16 text-center">Loading...</div>;
  if (!app) return <div className="py-16 text-center">App not found</div>;

  // ✅ Prepare data for chart
  const chartData = app.ratings
    ? app.ratings.map(r => ({ name: r.name, count: r.count }))
    : [];

  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-10">
      {/* Left column: App image */}
      <div className="col-span-1">
        <img
          src={app.image}
          alt={app.title}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right column: App info */}
      <div className="col-span-2">
        <h1 className="text-3xl font-bold">{app.title}</h1>
        <p className="text-gray-600 mt-1">{app.companyName}</p>

        <div className="mt-2 text-gray-600 text-sm">
          📦 {app.size} MB • ⭐ {app.ratingAvg} • {app.reviews.toLocaleString()} reviews
          <br />
          📥 {app.downloads.toLocaleString()} downloads
        </div>

        {/* Install Button */}
        <div className="mt-5">
          <button
            disabled={installed}
            onClick={handleInstall}
            className={`px-6 py-2 rounded-lg font-medium ${
              installed
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>

        {/* Ratings Chart */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3 text-lg">Ratings</h3>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="font-semibold mb-2 text-lg">Description</h3>
          <p className="text-gray-700 leading-relaxed">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
