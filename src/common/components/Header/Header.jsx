const Header = ({ children }) => (
  <header className="bg-white p-4 shadow-md rounded-b-xl flex items-center justify-between">
    <h1 className="text-xl font-bold text-gray-800">Broker Platform</h1>
    {children}
  </header>
);

export default Header;
