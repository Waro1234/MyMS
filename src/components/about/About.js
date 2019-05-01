import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';
import { Link } from 'react-router-dom';

import Banner from '../navigation/banner/Banner';

class About extends React.Component {

    componentDidMount() {
        Utility.setTitle("About");
    }

    getSubtitle() {
        return "What's this " + Config.server_name + " thing?";
    }

    render() {
        return (
            <div>
                <Banner title="About" subtitle={this.getSubtitle()} />
                <main className="about">
                    <section className="about-box"><center><a href="https://discord.gg/DufR4Me" target="_blank"><img src="images/DISCORD_IMG.png"/></a></center><h3>Current Updates:<br/><br/>
                    In game:<br/>
                    * Home map<br/>
                    * Rebirth map for players who has less than 150 rbs/ @rebirthmap<br/>
                    * MSI<br/>
                    * Tiny MSI in @rebirthmap<br/>
                    * Vote Points npc<br/>
                    * Event points npc<br/>
                    * Custom guild change/@go guild<br/>
                    * Hair and eyes/@style<br/>
                    * Gacha npc<br/>
                    * GM job/Skills<br/>
                    * Gender changer<br/> 
                    * Belts with stats <br/>
                    * Fishing map<br/>
                    * Added fishing system.<br/>
                    * Added sandbox.<br/>
                    * Fixed cash shop.<br/>
                    * Added Occupations<br/>
                    * BPQ it has 3 levels Easy/Normal/Hard<br/>
                    * Training maps instead of fm maps! use @portal to warp there<br/>
                    There are also 3 levels Easy/Normal/Hard.<br/>
                    * Player Tag NPC at @npc<br/>
                    * Fixed Auto JQ Event <br/>
                    * Donor Features #updated#<br/>
                    * Added Marriage system<br/>
                    * Website is 100% Working<br/>
                    * Voting System<br/><br/>
                    Events:<br/>
                    * Tag<br/>
                    * Unscramble<br/>
                    * Hit the Box<br/>
                    * Russian Roulette<br/>
                    * Hitman* Dodgebob<br/>
                    * DodgeBomb<br/>
                    * Raining bobs<br/>
                    * Boombayah<br/>
                    * Terrorist<br/>
                    * Last Man Standing<br/><br/>
                    Working on:<br/>
                    * Adding new content to website.<br/>
                    * Adding Player wide-options with @ cmd's.<br/>
                    * Adding perm ItemVAC&AutoRB&AutoDoll.<br/></h3></section>

                </main>
            </div>
        );
    }
}

export default About;
