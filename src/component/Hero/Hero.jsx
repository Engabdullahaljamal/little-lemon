import './Hero.css'
import hero_img from './../../assets/images/hero.jpg'
function Hero() {
    return (
        <div class="hero">
            <img src={hero_img} alt="" />
            <div class="over_lay">
                <h3>25% off this weekend</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque nemo consequatur ullam blanditiis
                    commodi rem deleniti! Cumque, mollitia non. Asperiores maiores facere optio adipisci enim molestias
                    minima amet non.</p>
            </div>

        </div>
    )
}

export default Hero