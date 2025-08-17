// Order pad modal component
const OrderPad = ({ stock, type, onClose }) => {
  const isBuy = type === "buy";
  const themeColor = isBuy ? "green" : "red";
  const themeBgColor = isBuy ? "bg-green-500" : "bg-red-500";
  const themeHoverBgColor = isBuy ? "hover:bg-green-600" : "hover:bg-red-600";
  const currentPrice = stock?.currentPrice || stock?.avgPrice || 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm overflow-hidden">
        <div
          className={`p-4 flex justify-between items-center text-white ${themeBgColor}`}
        >
          <h2 className="text-xl font-bold">
            {isBuy ? "Buy" : "Sell"} {stock?.name || "Stock"}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-gray-500 text-sm mb-1">Stock</label>
            <p className="text-lg font-semibold text-gray-800">
              {stock?.ticker || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1">Price</label>
            <p className="text-lg font-semibold text-gray-800">
              ₹{currentPrice.toFixed(2)}
            </p>
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-semibold mb-1"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              defaultValue="1"
              min="1"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="orderType"
              className="block text-gray-700 font-semibold mb-1"
            >
              Order Type
            </label>
            <select
              id="orderType"
              className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="market">Market</option>
              <option value="limit">Limit</option>
            </select>
          </div>
          <button
            onClick={onClose}
            className={`w-full ${themeBgColor} ${themeHoverBgColor} text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors`}
          >
            Place {isBuy ? "Buy" : "Sell"} Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPad;
