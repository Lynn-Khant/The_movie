import React, { useState } from "react";
import { UserAuth } from "../contextAPI/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { db } from "../firebase";

function Movie({movie}){
    const [like,setLike]=useState(false);
    const [saved,setSaved]=useState(false);
    const {user}=UserAuth();
    const movieId=doc(db,"users",`${user?.email}`);
    const saveMovie=async()=>{
        if(user?.email){
            setLike(!like);
            setSaved(true);
            await updateDoc(movieId,{
                savedShows:arrayUnion({
                    id:movie.id,
                    title:movie.title,
                    img:movie.backdrop_path
                })
            })
        }else{
            alert("You must login first.")
        }
    }
    return(
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-4 cursor-pointer relative">
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt={movie?.title}
            />
            <div className="absolute left-0 top-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="text-xs md:text-sm font-bold flex items-center justify-center h-full text-center">{movie?.title}</p>
                <p onClick={saveMovie}>
                    {like ? (
                    <FaHeart className='absolute top-4 left-4 text-gray-300' />
                    ) : (
                    <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
                    )}
                </p>
            </div>
        </div>
    )
}

export default Movie;