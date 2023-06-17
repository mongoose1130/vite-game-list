import React from 'react';
import * as GlobalApi from "../services/GlobalApi.jsx";

const GenreList = ({genreId}) => {
    const [genreList, setGenreList] = React.useState([]);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const getGenreList = () => {
        GlobalApi.getGenreList().then((res) => {
            setGenreList(res.data.results);
        })
    }

    React.useEffect(() => {
        getGenreList();
    }, [])

    return (
        <div>
            <h2 className="text-[30px] font-bold dark:text-gray-200">Genre</h2>
            {genreList.map((item, index) => (
                <div onClick={() => {setActiveIndex(index); genreId(item.id)}} className={`flex gap-2 item-center mb-3 cursor-pointer hover:bg-gray-300 hover:scale-105 p-2 rounded-lg hover:dark:bg-gray-700 ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-700' : null}`}>
                    <img src={item.image_background} alt={item.name} className="w-[100px] h-[100px] object-cover rounded-lg" />
                    <h3 className={`dark:text-gray-200 text-[20px] ${activeIndex === index ? 'font-bold' : null}`}>{item.name}</h3>
                </div>
            ))}

        </div>
    )
}

export default GenreList;
