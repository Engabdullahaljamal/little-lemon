import './CardsContainer.css'
import burger_img from './../../assets/images/menu.png'
import chefs_img from './../..//assets/images/chefs.png'
import restaurant_img from './../../assets/images/restaurant.jpg'
import Card from '../Card/Card'
function CardsContainer() {
    const cards_details = [
        {
            title: 'Our New Menu',
            image: burger_img,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'See our new menu ',
            link_url: '/Our_menu'
        },
        {
            title: 'We Have Best Chefs',
            image: chefs_img,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'see our chefs',
            link_url: '/About'
        },
        {
            title: 'Opening Hours',
            image: restaurant_img,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'See opening hours',
            link_url: '/Reservation'
        },
    ]
    return (
        <div id='features'>
            <h3 className='title-text-center' >FEATURES</h3>
            <div class="cards_container">

                {
                    cards_details.map(c => {
                        return <Card cards_details={c} />
                    })

                }
            </div>
        </div>
    )
}

export default CardsContainer