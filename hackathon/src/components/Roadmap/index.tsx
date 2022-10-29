import React from 'react'
import './Roadmap.scss'
import spaceplan from '../../assets/img/spaceplan.png'
import plancube from '../../assets/img/plancube.png'


const Roadmap: React.FC = () => {
    return (
        <div className="main_roadmap page__section_3">
        <div className="grad"><img src={spaceplan} alt=""/></div>
        <div className="grad6"><img src={plancube} alt=""/></div>



        <div className="roadmap_section wrapper ">
            <div className="roadmap_title _anim-items">ROADMAP</div>
            <div className="roadmap_list">
                <div className="line"></div>
                <div className="line-active"></div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Space mission</span><br/>
                        Welcome aboard the metagalactic ship Evolviar. Our team is starting preparations for one of the largest space travels, we are looking for volunteers who are ready to go to explore the boundless space. At this stage, the Evolviar team will build a community, collaborate with other projects, attract promoters and hold various contests and events. We will also do small tours of our ship.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Invitation to board</span><br/>
                        To become part of our metaverse, we release a limited number of rooms on the spaceship. These rooms will allow their owners to fully immerse themselves and receive all sorts of privileges from the Evolviar metaverse. In total there will be 3 housing zones of the ship: Quantum, Hyreno, Ozesa. They differ in the size of the rooms, the Quantum zone has the largest rooms, Hyreno has medium rooms, and finally Ozesa is famous for the most compact rooms. To get your own room, you will need to mint a pass (pass = room on the Evolviar metagalactic ship).
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Meet the Vixi robot</span><br/>
                        Vixi is a smart robot designed to maintain the technological level of the ship. After listing our collection, Vixi will sweep the floor. He will buy passes on marketplaces at the floor price and reward the winners of contests, promoters and the most active members of our community with the purchased passes.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Get closer to space</span><br/>
                        Randomly selected spaceship room holders will be sent 50 telescopes from our partners.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Time to look around</span><br/>
                        Demo version of the metagalactic ship. Everyone will be able to see the rooms of different zones, walk along the technological corridors of our ship and take part in the first event.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Sector System & Airdrop</span><br/>
                        With the help of a unique system of sectors, the airdrop of the second collection of special rooms will be calculated. This system is designed to maintain the floor, burn NFT and provide holders with the opportunity to get a lounge zone.You can learn more about the sector system <a data-goto=".page__section_6" href="" className="menu__link spaceship_more">here</a>
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Special premises & P2E</span><br/>
                        <div>Sale of the second collection of special premises. At this stage, everyone will be able to purchase premises such as: rooms with space equipment (space equipment is required for P2E), space offices and workshops (where you can create your own starship, rent it out or go into outer space in it).</div>
                        <div className="roadmap_text_desc">For those who keep at least one room for 30 days after the release of the first collection, there will be in guaranteed place in the whitelist.</div>
                </div>
                    </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Takeoff</span><br/>
                        <nav>
                            <ul>
                                <li>   Our metagalactic spaceship Evolviar leaves the Earth's orbit and sets off on a long journey. The engineering team brings to your attention:
                                </li>
                                <li>   Room designer, which allows you to change the interior of the room.
                                </li>
                                <li>    The main hall, where various events will be held from our partners, famous brands and famous personalities.
                                </li>
                                <li>    An entertainment zone, where you and your friends can join a variety of mini-games, competitions and famous card games.
                                </li>
                                <li>   Voice and regular chat to communicate with your friends.
                                </li>
                                <li>  Character builder, create whoever you want to be on our metagalactic ship.
                                </li>
                                <li>   Room add-ons: TV, Music Station, play area and more.
                                </li>
                                <li>   Garden of the Great Explorers
                                </li>
                                <li>Marketplace</li>
                            </ul>
                        </nav>
                        <div className="roadmap_text_desc">Before the official launch, we will begin testing the Evolviar metaverse. Professional testers, owners of rooms, special premises and active people of our community will be invited here. All participants in this event will be rewarded.</div>

                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Official launch</span><br/>
                        The metaverse opens its doors! Invite your friends and spend time with them. We will invite our partners, global companies and popular personalities to have fun. From this moment on, all previously introduced functionality is available to you.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Space Currency</span><br/>
                        A token designed to reward the owners of rooms and premises, the operation of P2E games within the metaverse, the purchase of unique items from the Evolviar ecosystem.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Dr. Quant</span><br/>
                        Doctor with a good soul, but with not very good intentions. The Quant is going to blow up one of the fuel blocks of the metagalactic ship, which will not allow the ship to return to Earth. All members of the expedition will have to adapt to the circumstances, equip the ship, go beyond it in search of resources and lost things after the explosion.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Open space</span><br/>
                        A play-to-earn game in which players have to put on a space suit and go outside the ship. You can obtain a space suit by either owning a room with space equipment or renting it from the owner of this room. There will be 4 areas in total where you can find various resources, ranging from expensive metals to rare NFTs. All supplies found in space have all sorts of uses: furnishing rooms, upgrading space suits, character customization, building starships and much more.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Planet X and Planet Y</span><br/>
                        According to Dr. Quant's calculations, at the point in the route where the Evolviar spacecraft will run out of fuel, there are two planets in close proximity. The crew of the ship will have to go to explore new lands using the built starships. At the moment we have little information about these planets:
                        Planet X is a terrestrial planet, similar to the Earth in size, mass and temperature regime. Suitable for colonization.
                        Planet Y is a planet that does not have suitable conditions for life, but is rich in the resources needed to populate Planet X.
                    </div>
                </div>
                <div className="roadmap_item">
                    <div className="roadmap_bullet"></div>
                    <div className="roadmap_text">
                        <span className="roadmap_text_title">Closed space club</span><br/>
                        Our plans include space exploration not only in the metaverse, but also in real life. We plan to create our own laboratory, which will be engaged in space research. The closed space club will allow all holders of our collections to meet in the most interesting places on the planet Earth, hold parties, observe space and share discoveries.
                        <div className="roadmap_text_desc">Roadmap goes beyond the human mind. After the completion of all existing points, a new part of the roadmap will be released.</div>
                    </div>
                </div>                    
            </div>
        </div>
    </div>

    )
}

export default Roadmap;
