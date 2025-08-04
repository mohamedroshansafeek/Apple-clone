import { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-300 p-3 z-50">
      <ul className="flex justify-around items-center cursor-pointer text-sm sm:text-base lg:text-lg mx-4 md:mx-10 lg:mx-16 relative">
        {/* Apple Logo - always visible */}
        <li><FaApple /></li>

        {/* Store */}
        <li
          className="hidden sm:block"
          onMouseEnter={() => setActiveMenu("store")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Store
          {activeMenu === "store" && <Popup title="Store Products" items={["MacBook", "iMac", "iPhone", "iPad"]} />}
        </li>

        {/* Mac */}
        <li
          className="hidden sm:block"
          onMouseEnter={() => setActiveMenu("mac")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Mac
          {activeMenu === "mac" && <Popup title="Mac Products" items={["MacBook Air", "MacBook Pro", "iMac", "Mac Mini"]} />}
        </li>

        {/* iPad */}
        <li
          className="hidden sm:block"
          onMouseEnter={() => setActiveMenu("ipad")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          iPad
          {activeMenu === "ipad" && <Popup title="iPad Products" items={["iPad", "iPad Air", "iPad Pro", "iPad Mini"]} />}
        </li>

        {/* iPhone */}
        <li
          className="hidden sm:block"
          onMouseEnter={() => setActiveMenu("iphone")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          iPhone
          {activeMenu === "iphone" && <Popup title="iPhone Products" items={["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"]} />}
        </li>

        {/* Watch */}
        <li
          className="hidden md:block"
          onMouseEnter={() => setActiveMenu("watch")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Watch
          {activeMenu === "watch" && <Popup title="Apple Watch" items={["Watch SE", "Watch Series 9", "Watch Ultra 2"]} />}
        </li>

        {/* TV & Home */}
        <li
          className="hidden lg:block"
          onMouseEnter={() => setActiveMenu("tv")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          TV & Home
          {activeMenu === "tv" && <Popup title="TV & Home" items={["Apple TV", "HomePod", "HomePod Mini"]} />}
        </li>

        {/* Entertainment */}
        <li
          className="hidden lg:block"
          onMouseEnter={() => setActiveMenu("entertainment")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Entertainment
          {activeMenu === "entertainment" && <Popup title="Entertainment" items={["Apple Music", "Apple TV+", "Apple Arcade"]} />}
        </li>

        {/* AirPods */}
        <li
          className="hidden lg:block"
          onMouseEnter={() => setActiveMenu("airpods")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          AirPods
          {activeMenu === "airpods" && <Popup title="AirPods" items={["AirPods 2nd Gen", "AirPods Pro", "AirPods Max"]} />}
        </li>

        {/* Accessories */}
        <li
          className="hidden lg:block"
          onMouseEnter={() => setActiveMenu("accessories")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Accessories
          {activeMenu === "accessories" && <Popup title="Accessories" items={["Covers", "Chargers", "Cables"]} />}
        </li>

        {/* Support */}
        <li
          className="hidden lg:block"
          onMouseEnter={() => setActiveMenu("support")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          Support
          {activeMenu === "support" && <Popup title="Support" items={["Product Support", "Repairs", "Contact Us"]} />}
        </li>

        {/* Search - always visible */}
        <li
          onMouseEnter={() => setActiveMenu("search")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <FaSearch />
          {activeMenu === "search" && <Popup title="Search" items={["Search feature coming soon..."]} />}
        </li>

        {/* Shopping Bag - always visible */}
        <li
          onMouseEnter={() => setActiveMenu("bag")}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <FaShoppingBag />
          {activeMenu === "bag" && <Popup title="Shopping Bag" items={["Your bag is empty"]} />}
        </li>
      </ul>
    </nav>
  );
}

const Popup = ({ title, items }) => (
  <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6">
    <h2 className="text-lg font-semibold">{title}</h2>
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {items.map((item, index) => (
        <li key={index} className="p-3 border rounded hover:bg-gray-100">{item}</li>
      ))}
    </ul>
  </div>
);

export default Navbar;
