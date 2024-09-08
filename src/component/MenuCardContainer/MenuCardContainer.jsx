import Card from '../Card/Card'
import MenuCard from '../MenuCard/MenuCard'
import burger from './../../assets/images/burger.jpg'
import greek_salad from './../../assets/images/greek-salad.jpg'
import lemon_dessert from './../../assets/images/lemon-dessert.jpeg'
import './MenuCardContainer.css'


function MenuCardContainer() {
    const menu_cards_details = [
        {
            title: 'Burger',
            image: burger,
            price: '9.75',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'order now'
        },
        {
            title: 'Greek Salad',
            image: greek_salad,
            price: '6.50',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'order now'
        },
        {
            title: 'Lemon Dessert',
            price: '5.00',
            image: lemon_dessert,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis eveniet dolores porro delectus, exercitationem, officiis maiores repudiandae reiciendis, odit aspernatur suscipit rerum aliquam quibusdam pariatur laborum! Optio, officiis?',
            link_title: 'order now',

        },
    ]
    return (
        <div className='menu_card_container'>
            <h3 className='title-text-center' >OUR MENU</h3>
            <div className="cards_container">

                {
                    menu_cards_details.map(c => {
                        return <MenuCard menu_cards_details={c} />
                    })
                }

            </div>
        </div>
    )
}

export default MenuCardContainer