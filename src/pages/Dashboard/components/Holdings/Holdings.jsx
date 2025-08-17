import { useEffect, useState } from "react";
import { mockApiCall } from "../../../../common/utils";
import { MOCK_HOLDINGS } from "../../../../common/data/MockedData";

const Holdings = ({ openOrderPad }) => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mockApiCall(MOCK_HOLDINGS, 200)
      .then((res) => setHoldings(res.data))
      .catch(() => setHoldings([])) // Handle error case
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading holdings...</div>
    );
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide">Stock</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right hidden sm:table-cell">
                Qty
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right hidden sm:table-cell">
                Avg. Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                Current Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-right">
                PNL
              </th>
            </tr>
          </thead>
          <tbody>
            {holdings.length > 0 ? (
              holdings.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } cursor-pointer hover:bg-gray-100`}
                  onClick={() => openOrderPad(item)}
                >
                  <td className="p-3 text-sm text-gray-700 font-medium">
                    <span className="block">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.ticker}</span>
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right hidden sm:table-cell">
                    {item.quantity}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right hidden sm:table-cell">
                    ₹{item.avgPrice.toFixed(2)}
                  </td>
                  <td className="p-3 text-sm text-gray-700 text-right">
                    ₹{item.currentPrice.toFixed(2)}
                  </td>
                  <td
                    className={`p-3 text-sm font-bold text-right ${
                      item.pnl >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₹{item.pnl.toFixed(2)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No holdings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;
