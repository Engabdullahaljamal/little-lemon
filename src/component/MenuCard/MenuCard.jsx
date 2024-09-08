import './MenuCard.css'



function MenuCard({ menu_cards_details }) {

    return (
        <div>
            <div class="menu_card">
                <img src={menu_cards_details.image} alt="" />
                <div className='menu_card_body'>
                    <div className='menu_title_con'>
                        <h4>{menu_cards_details.title}</h4>
                        <p>${menu_cards_details.price}</p>
                    </div>
                    <p>
                        {menu_cards_details.desc}
                    </p>
                    <a href="">{menu_cards_details.link_title} </a>
                </div>
            </div>
        </div>
    )
}

export default MenuCard