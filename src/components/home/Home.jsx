import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hblog from "./Hblog"
import Hero from "./Hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
    return (
        <>
            <Hero />
            <AboutCard />
            <HAbout />
            <Testimonal />
            <Hprice />
            <Hblog />
        </>
    )
}
export default Home