import React from 'react'
import { Link } from 'react-router-dom'

const GetATeam = () => {
    return (
        < div className=" contText">
            <div className=" noCardText">
                <h2>It's time to recreate the ancient struggle of good against evil</h2> <p>There are a few RULES the team maximun number is 6 Heroes. The Good and the Bad side have 3
                    places each. Select your favourites  heroes using your mind your heart and also maths... </p>
                <Link to='search'><button
                    className="btn btn btn-outline-light btn-lg goToSearch"
                >Get a Good Team</button></Link> </div></div>
    )
}

export default GetATeam
