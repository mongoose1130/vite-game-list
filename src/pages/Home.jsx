import React from 'react';
import * as GlobalApi from "../services/GlobalApi.jsx";
import GenreList from "../components/GenreList.jsx";
import Banner from "../components/Banner.jsx";
import TrendingGames from "../components/TrendingGames.jsx";
import GamesByGenre from "../components/GamesByGenre.jsx";


const Home = () => {
    const [gameList, setGameList] = React.useState([]);
    const [gameListByGenre, setGameListByGenre] = React.useState([]);
    const getGameList = () => {
        GlobalApi.getGameList().then((res) => {
            setGameList(res.data.results);
        })
    }

    const getGamesByGenre = (genreId) => {
        GlobalApi.getGamesByGenre(genreId).then((res) => {
            setGameListByGenre(res.data.results);
        })
    }

    React.useEffect(() => {
        getGameList();
        getGamesByGenre(4);
    }, [])

    return (
        <div className="grid grid-cols-4 px-8">
            <div className="hidden md:block">
                <GenreList genreId = {(genreId) => getGamesByGenre(genreId)} />
            </div>
            <div className="col-span-4 md:col-span-3">
                {gameList?.length > 0 && gameListByGenre.length > 0 ?
                    <div>
                        <Banner gameBanner = {gameList[0]} />
                        <TrendingGames games = {gameList} />
                        <GamesByGenre games = {gameListByGenre} />
                    </div>
                : null}
            </div>
        </div>
    )
}

export default Home;
