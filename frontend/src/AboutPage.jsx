import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>
      <p className="text-lg">This is the about page. Learn more about the app here.</p>
      <Link
        to="/"
        className="mt-4 text-blue-500 hover:text-blue-700"
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default AboutPage;
