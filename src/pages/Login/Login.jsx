import { useState } from "react";
import { mockApiCall } from "../../common/utils";
import { LogIn } from "lucide-react";

// Login page component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock API call to simulate login
    try {
      let responseStatus = 200;
      if (username === "invalid") responseStatus = 400;
      if (username === "error") responseStatus = 500;

      await mockApiCall({ message: "Login successful" }, responseStatus);
      onLogin(); // Call the login success handler
    } catch (err) {
      if (err.status === 400) {
        setError("Invalid credentials. Please try again.");
      } else if (err.status === 500) {
        setError("Server error. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-inter">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="flex justify-center mb-6">
          <LogIn size={48} className="text-gray-700" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Broker Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex space-x-2">
            <span className="w-1/2 p-2 rounded-xl text-center bg-blue-100 text-blue-700 font-semibold cursor-pointer">
              Broker A
            </span>
            <span className="w-1/2 p-2 rounded-xl text-center bg-gray-100 text-gray-500 font-semibold cursor-not-allowed">
              Broker B
            </span>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center font-medium">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
