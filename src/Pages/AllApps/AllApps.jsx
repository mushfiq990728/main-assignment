import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("/data/apps.json").then(r=>r.json()).then(setApps);
  }, []);

  const filtered = apps
    .filter(a => a.title.toLowerCase().includes(q.toLowerCase()))
    .sort((a,b) => {
      if (sort === "high-low") return b.downloads - a.downloads;
      if (sort === "low-high") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-4">
        <div>{filtered.length} Apps Found</div>
        <div className="flex gap-2 items-center">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search apps..." className="input input-bordered" />
          <select value={sort} onChange={e=>setSort(e.target.value)} className="select select-bordered">
            <option value="">Sort by</option>
            <option value="high-low">Downloads: High-Low</option>
            <option value="low-high">Downloads: Low-High</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-8">No App Found</div>
        ) : (
          filtered.map(a => (
            <Link key={a.id} to={`/apps/${a.id}`} className="card p-4 shadow hover:shadow-lg">
              <img src={a.image} alt={a.title} className="w-full h-36 object-cover rounded" />
              <h3 className="font-semibold mt-2">{a.title}</h3>
              <div className="text-sm text-gray-500">{a.downloads} downloads • {a.ratingAvg} ★</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AllApps;
