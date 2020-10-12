import React from 'react';
import './index.css';
function SmallCard({ icon, pageViews, growth, social, title, up }) {
  return (
    <article class="card-small">
      <p class="card-small-views">{title}</p>
      <p class="card-small-icon">
        <img src={icon} alt={social} />
      </p>
      <p class="card-small-number">{pageViews}</p>
      <p class="card-small-percentage">
        <span>
          {up && (<img src="images/icon-up.svg" alt="Up" />)}
          {!up && (<img src="images/icon-down.svg" alt="Down" />)}
          {growth}%
        </span>
      </p>
    </article>
  );
}

export default SmallCard;