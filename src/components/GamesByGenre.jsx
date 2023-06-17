import React from 'react';

function GamesByGenre({games}) {
    return (
        <div>
            <h2 className="text-[30px] dark:text-gray-200 font-bold mt-8">Popular Games</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                {games.map((item, index) => index < 8 && (
                    <div className="bg-[#76a8f75e] rounded-b-lg hover:scale-110 transition-all duration-300 ease-in-out">
                        <img src={item.background_image} className="h-[270px] rounded-t-lg object-cover"/>
                        <h2 className="dark:text-gray-200 text-[20px] font-bold p-2">{item.name}
                            <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">{item.metacritic}</span>
                        </h2>
                        <h2 className="dark:text-gray-400 text-gray-500 text-[20px] font-bold p-2">
                            ⭐️ {item.rating}&nbsp;&nbsp;💬 {item.reviews_count}&nbsp;&nbsp;🔥 {item.suggestions_count}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GamesByGenre;