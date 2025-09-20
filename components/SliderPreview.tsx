"use client";

import { useState } from "react";

export default function SliderPreview({ before, after }: { before: string, after: string | null }) {
  const [slider, setSlider] = useState(50);

  return (
    <div className="relative w-[400px] h-[300px] overflow-hidden border rounded-xl shadow-lg">
      <img src={before} className="absolute top-0 left-0 w-full h-full object-cover" />
      {after && (
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${slider}%` }}
        >
          <img src={after} className="w-full h-full object-cover" />
        </div>
      )}
      <input
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/2"
      />
    </div>
  );
}
