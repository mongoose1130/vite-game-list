import React from "react";
import * as GlobalApi from "../services/GlobalApi.jsx";

function Banner ({gameBanner}) {
    return (
        <div className="relative">
            <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
                <button className="bg-blue-500 text-gray-200 py-3 px-3.5 rounded-lg hover:bg-blue-400">Get Now</button>
                <h2 className="text-[24px] text-gray-300 font-bold">{gameBanner.name}</h2>
            </div>
            <img src={gameBanner.background_image} className="md:h-[320px] w-full object-cover object-top rounded-xl"/>
        </div>
    )
}

export default Banner;
