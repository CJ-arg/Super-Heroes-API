import React from 'react'
import { Link } from 'react-router-dom'

const GetBadTeam = () => {
    return (

        < div className=" contText">
            <div className=" noCardText">

                <h2>Here you can form the team of the Evil side. Select the baddest in town... don`t be shy</h2>
                <Link to='search'><button
                    className="btn btn btn-outline-light btn-lg goToSearch"
                >Get a Bad Team</button></Link> </div></div>
    )

}

export default GetBadTeam
