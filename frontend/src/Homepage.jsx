import { useState } from "react";

function HomePage() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${backendUrl}/api/send-info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Send Info to Backend</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Send
        </button>
      </form>

      {response && (
        <p className="mt-4 text-green-600 font-semibold">{response}</p>
      )}
    </div>
  );
}

export default HomePage;
