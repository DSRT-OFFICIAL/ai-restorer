import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-200 to-purple-200">
      <h1 className="text-4xl font-bold mb-4">Restore Foto Lama Jadi Jernih</h1>
      <p className="mb-6 text-lg text-gray-700">Upload foto lama dan biarkan AI memperbaikinya</p>
      <Link href="/restore">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-md hover:bg-purple-700">
          Mulai Restorasi
        </button>
      </Link>
    </main>
  );
}
