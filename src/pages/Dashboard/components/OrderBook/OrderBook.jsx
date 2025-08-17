import { useEffect, useState } from "react";
import { mockApiCall } from "../../../../common/utils";
import { MOCK_ORDERBOOK } from "../../../../common/data/MockedData";
import PNLCard from "../PNLCard";

const Orderbook = ({ openOrderPad }) => {
  const [orderbook, setOrderbook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockApiCall(MOCK_ORDERBOOK, 200)
      .then((res) => setOrderbook(res.data))
      .catch(() => setOrderbook([])) // Handle error case
      .finally(() => setLoading(false));
  }, []);

  const unrealizedPNL = 1250.75; // Mock PNL values
  const realizedPNL = 5500.2;

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading orderbook...</div>
    );
  }

  return (
    <div className="p-4">
      <PNLCard
        title="Orderbook PNL"
        unrealizedPNL={unrealizedPNL}
        realizedPNL={realizedPNL}
      />
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide">Stock</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right hidden sm:table-cell">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right hidden sm:table-cell">
                Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Type
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orderbook.length > 0 ? (
              orderbook.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-3 text-sm text-gray-700 font-medium">
                    <span className="block">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.ticker}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right hidden sm:table-cell">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right hidden sm:table-cell">
                    ₹{item.price.toFixed(2)}
                  </td>
                  <td className="p-3 text-sm font-bold text-center">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        item.type === "BUY"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td className="p-3 text-sm font-bold text-center">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        item.status === "EXECUTED"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No past orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orderbook;
