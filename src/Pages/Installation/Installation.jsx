import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(ids);
    fetch("/data/apps.json").then(r=>r.json()).then(setAllApps);
  }, []);

  const uninstall = (id) => {
    const newList = installedApps.filter(i => i !== id);
    localStorage.setItem("installedApps", JSON.stringify(newList));
    setInstalledApps(newList);
    toast.info("App removed");
  };

  const installedDetails = allApps.filter(a => installedApps.includes(a.id));

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Your Installed Apps</h2>
      {installedDetails.length === 0 ? (
        <div>No apps installed</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {installedDetails.map(app => (
            <div className="card p-4" key={app.id}>
              <img src={app.image} alt={app.title} className="w-full h-36 object-cover rounded" />
              <h3 className="font-semibold mt-2">{app.title}</h3>
              <div className="mt-2 flex gap-2">
                <Link to={`/apps/${app.id}`} className="btn btn-sm btn-outline">View</Link>
                <button onClick={() => uninstall(app.id)} className="btn btn-sm btn-error">Uninstall</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
