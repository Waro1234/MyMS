import React from 'react';
import Jobs from '../../../Jobs';

class Player extends React.Component {

    getGuild() {
      if (this.props.player.guild_name) {
          return this.props.player.guild_name;
      }
      return "No Guild";
    }

    render() {
        var items = [this.props.player.hair, this.props.player.face];
        var skinId = parseInt("200" + this.props.player.skincolor);
        var hasElfEars = false;
        if (this.props.rank) {
            var rank = (
                <span className="rank">#{this.props.rank}</span>
            );
        }

        return (
            <section className="player">
                <div className="avatar">
                    <img src={"https://maplestory.io/api/gms/latest/character/compact/" + skinId + "/" + items.join(',') + "/stand1?showears=" + hasElfEars} alt={this.props.player.name} />
                </div>
                <h2>#{this.props.player.rank} {this.props.player.name}</h2>
                <h3><span className="level">Level {this.props.player.level}</span></h3>
                <h3>{Jobs[this.props.player.job].name}</h3>
                <h3>{this.props.player.rebirths} Rebirths</h3>
            </section>
        );
    }
}

export default Player;
