/*import { team } from "../../dummydata"

const TeamCard = () => {
    return (
        <>
            {team.map((val) => (
                <div className='items shadow'>
                    <div className='img'>
                        <img src={val.cover} alt='' />
                        <div className='overlay'>
                            <i className='fab fa-facebook-f icon'></i>
                            <i className='fab fa-twitter icon'></i>
                            <i className='fab fa-instagram icon'></i>
                            <i className='fab fa-telegram icon'></i>
                            <i className='fab fa-github icon'></i>
                        </div>
                    </div>
                    <div className='details'>
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard*/

import { team } from "../../dummydata"

const TeamCard = () => {
    return (
        <>
            {team.map((val, index) => (
                <div className='items shadow' key={index}>
                    <div className='img'>
                        <img src={val.cover} alt='' />
                        <div className='overlay'>
                            <i className='fab fa-facebook-f icon'></i>
                            <i className='fab fa-twitter icon'></i>
                            <i className='fab fa-instagram icon'></i>
                            <i className='fab fa-telegram icon'></i>
                            <i className='fab fa-github icon'></i>
                        </div>
                    </div>
                    <div className='details'>
                        <h2>{val.name}</h2>
                        <p>{val.work}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard
