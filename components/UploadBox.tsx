"use client";

import { useRef } from "react";

export default function UploadBox({ onUpload }: { onUpload: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-400 p-10 rounded-2xl text-center">
      <p className="mb-4">Pilih foto lama kamu</p>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} />
    </div>
  );
}
