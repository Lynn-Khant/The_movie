import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

function Home(){
    return(
        <div>
            <Main/>
            <Row title="Popular Movies" fetchUrl={requests.requestPopular} rowId="1"/>
            <Row title="Top Rated Movies" fetchUrl={requests.requestTopRated} rowId="2"/>
            <Row title="Trending Movies" fetchUrl={requests.requestTrending} rowId="3"/>
            <Row title="Horror Movies" fetchUrl={requests.requestHorror} rowId="4"/>
            <Row title="Upcoming Movies" fetchUrl={requests.requestUpcoming} rowId="5"/>
        </div>
    )
}
export default Home;