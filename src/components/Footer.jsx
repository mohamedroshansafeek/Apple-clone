import React from 'react';


const footerLinks = [
  {
    title: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Apple Values",
    links: ["Accessibility", "Environment", "Privacy", "Supplier Responsibility"],
  },
  {
    title: "About Apple",
    links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
  },
];


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 p-8 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-xs text-center mt-6 text-gray-500">
        © 2025 Apple Inc. All rights reserved. | Privacy Policy | Terms of Use | Site Map
      </div>
    </footer>
  );
};


export default Footer;
