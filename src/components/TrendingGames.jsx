import React from 'react';

function TrendingGames({games}) {
    return (
        <div className="mt-8 hidden md:block">
            <h2 className="text-[30px] dark:text-gray-200 font-bold">Trending Games</h2>
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {games.map((item, index) => index < 4 && (
                    <div className="bg-[#76a8f75e] rounded-b-lg hover:scale-110 transition-all duration-300 ease-in-out">
                        <img src={item.background_image} className="h-[270px] rounded-t-lg object-cover"/>
                        <h2 className="dark:text-gray-200 text-[20px] font-bold p-2">{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingGames;
