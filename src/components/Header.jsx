import React from 'react';
import iphoneImages1 from "../assets/images/iphone-06.png";
import iphoneImages2 from "../assets/images/iphone-07.png";
import iphoneImages3 from "../assets/images/iphone-08.png";
import iphoneVideo from "../assets/video/ipad-03.mp4"; // make sure path is correct

const Header = () => {
    return (
        <header className="mt-14 md:mt0">
            {/* Banner Text */}
            <p className="text-center text-base md:mt-20 md:text-xl lg:text-2xl mt-8 px-4">
                Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00 instant cashback‡ on selected products with eligible cards.
            </p>

            {/* MP4 Video (full height on medium screens)
            <div className="relative w-full h-48 sm:h-64 md:h-screen mt-6 md:mt-0 px-4 md:px-0">
                <video
                    src={iphoneVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full sm:h-64 object-cover mt-5"
                />
            </div> */}

            <div className="relative w-full mt-6 md:mt-0 px-4 md:px-0">
    <video
        src={iphoneVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto md:h-screen object-cover mt-5"
    />
</div>


            {/* Responsive Image Layout */}
            <div className="mt-10 grid grid-cols-1 gap-6 px-4">
                <img className="mx-auto rounded-lg w-full object-cover" src={iphoneImages1} alt="iPhone 1" />
                <img className="mx-auto rounded-lg w-full object-cover" src={iphoneImages2} alt="iPhone 2" />
                <img className="mx-auto rounded-lg w-full object-cover" src={iphoneImages3} alt="iPhone 3" />
            </div>
        </header>
    );
};

export default Header;


