import React from 'react';
import './index.css';
function Card({ username, followers, todayFollowers, icon, social }) {
  return (
    <article className={`card ${social}`}>
      <p className="card-title">
        <img src={icon} alt={social} />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="images/icon-up.svg" alt="Up" />
        {todayFollowers} Today
      </p>
    </article>
  );
}

export default Card;