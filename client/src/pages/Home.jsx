import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "../config/axiosInstance";
import GameList from "../components/GameList";

export default function Home() {
    const [games, SetGame] = useState([]);
    const [myLists, SetMyList] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "/games",
        })
            .then(({ data }) => {
                console.log(data);

                SetGame(data);
            })
            .catch(console.log());
    }, []);

    const handleOnAdd = async (game) => {
        try {
            if (!myLists((item) => item.id === game.id)) {
                SetMyList([...myLists, game])
            }
        } catch (err) {
            console.log(err, "<<< e - handleOnDeleteMovie");
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-slate-900">
                <div className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-extrabold mb-4">
                        Welcome to GAMELIST
                    </h1>
                    <p className="text-xl mb-8 text-center">
                        Get your game collection and personal rating in one
                        place and share it with all world
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                        Explore Games
                    </button>
                </div>
                <div className="px-10 grid gap-5">
                    {games.map((game) => {
                        return <GameList key={game.id} game={game} handleOnAdd={handleOnAdd}/>;
                    })}
                </div>
                <div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            My List
                        </h2>
                        <div className="space-y-4">
                            {myLists.length > 0 ? (
                                myLists.map((game) => (
                                    <div
                                        key={game.id}
                                        className="flex items-center justify-between bg-gray-900 p-4 rounded-lg"
                                    >
                                        <p className="text-white">
                                            {game.name}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {game.released}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-400">
                                    Belum ada game di My List.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
