"use client";

import { useState } from "react";
import SliderPreview from "@/components/SliderPreview";
import UploadBox from "@/components/UploadBox";

export default function RestorePage() {
  const [before, setBefore] = useState<string | null>(null);
  const [after, setAfter] = useState<string | null>(null);

  return (
    <main className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-semibold mb-6">Upload Foto untuk Restorasi</h2>
      {!before ? (
        <UploadBox onUpload={(fileUrl) => setBefore(fileUrl)} />
      ) : (
        <SliderPreview before={before} after={after} />
      )}
    </main>
  );
}
