import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          URL Shortener
        </h1>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Enter a long URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com/very/long/link"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition"
          >
            Generate Short URL
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-500">
          After generating, your short URL will appear here.
        </div>
      </div>
    </div>
  );
};

export default Home;
