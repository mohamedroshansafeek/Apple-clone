import React from 'react';
import iphoneImage1 from "../assets/images/iphone-13.png";
import iphoneImage2 from "../assets/images/iphone-14.png";
import iphoneImage3 from "../assets/images/iphone-15.png";
import iphoneImage4 from "../assets/images/iphone-16.png";
import iphoneImage5 from "../assets/images/iphone-17.png";
import iphoneImage6 from "../assets/images/iphone-18.png";
import topVideo from "../assets/video/ipad-01.mp4";     
import bottomVideo from "../assets/video/ipad-02.mp4"; 

const Hero = () => {
    return (
        <section className="mt-10 px-4 md:px-0">
           
            <div className="relative w-full mt-6 md:mt-0 px-4 md:px-0">
                <video
                    src={topVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:h-screen object-cover mt-5"
                />
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <img className="w-full rounded-lg object-cover" src={iphoneImage1} alt="iPhone 13" />
                <img className="w-full rounded-lg object-cover" src={iphoneImage2} alt="iPhone 14" />
                <img className="w-full rounded-lg object-cover" src={iphoneImage3} alt="iPhone 15" />
                <img className="w-full rounded-lg object-cover" src={iphoneImage4} alt="iPhone 16" />
                <img className="w-full rounded-lg object-cover" src={iphoneImage5} alt="iPhone 17" />
                <img className="w-full rounded-lg object-cover" src={iphoneImage6} alt="iPhone 18" />
            </div>

           
            <div className="relative w-full mt-6 md:mt-0 px-4 md:px-0">
                <video
                    src={bottomVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:h-screen mt-5 object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
