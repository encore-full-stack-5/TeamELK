import Hero from "../components/IntroduceHero";
import IntroduceNavbar from "../atom/IntroduceNavbar";
import About from "../components/IntroduceAbout";
import Skill from "../components/IntroduceSkill";
import Footer from "../components/IntroduceFooter";

const Introduce = () => {
    return (
    <div>
        <header className="header mb-4 pb-3">
            <IntroduceNavbar />
        </header>
        <Hero />
        <About />
        <Skill />
        <Footer />
    </div>
    )
}

export default Introduce;