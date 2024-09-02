import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from "./Movie";

function Row({title,fetchUrl,rowId}){
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        axios.get(fetchUrl).then((res)=>setMovies(res.data.results));
    },[fetchUrl])

    const slideLeft=()=>{
        let slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft-500;
    }
    const slideRight=()=>{
        let slider=document.getElementById('slider'+rowId);
        slider.scrollLeft=slider.scrollLeft+500;
    }
    return(
        <>
            <h1 className="text-white font-bold p-4">{title}</h1>
            <div className="flex items-center group relative ">
                <MdChevronLeft 
                onClick={slideLeft}
                className="absolute left-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10"
                size={40}
                />
                <div id={'slider'+rowId} className="w-full h-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap relative">
                    {movies.map((movie,id)=>(
                        <Movie movie={movie} key={id}/>
                    ))}
                </div>
                <MdChevronRight 
                onClick={slideRight}
                className="absolute right-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10"
                size={40}
                />
            </div>
        </>
    )
}

export default Row;