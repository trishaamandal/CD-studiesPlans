import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
    const location = useLocation()

    return (
        <>
            <section className='back'>
                <h2>Home / {location.pathname.split("/")[1]}</h2>
                <h1>{title}</h1>
            </section>
            <div className='margin'></div>
        </>
    )
}
Back.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Back