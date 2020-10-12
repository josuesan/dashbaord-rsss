import React from './node_modules/react';
import Card from '../Card';

const cardListData = [
  {
    id: 1,
    username: '@josuesan',
    followers: 1987,
    todayFollowers: 12,
    icon: 'images/icon-facebook.svg',
    social: 'facebook'

  },
  {
    id: 2,
    username: '@josuesan95',
    followers: 500,
    todayFollowers: 20,
    icon: 'images/icon-twitter.svg',
    social: 'twitter'

  },
  {
    id: 3,
    username: '@josue.sanchezz',
    followers: 1987,
    todayFollowers: 30,
    icon: 'images/icon-instagram.svg',
    social: 'instagram'

  },
  {
    id: 4,
    username: '@juggers95',
    followers: 0,
    todayFollowers: -50,
    icon: 'images/icon-youtube.svg',
    social: 'youtube'

  },
]
function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map(elem => (
            <Card key={elem.id} {...elem} />
          ))}
          <article className="card twitter">
            <p className="card-title">
              <img src="images/icon-twitter.svg" alt="Twitter" />
              @josuesan95
            </p>
            <p className="card-followers">
              <span className="card-followers-number">500</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="Up" />
                12 Today
            </p>
          </article>
          <article className="card instagram">
            <p className="card-title">
              <img src="images/icon-instagram.svg" alt="Instagram" />
                @josue.sanchezz
            </p>
            <p className="card-followers">
              <span className="card-followers-number">1987</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="Up" />
              12 Today
            </p>
          </article>
          <article className="card youtube">
            <p className="card-title">
              <img src="images/icon-youtube.svg" alt="Youtube" />
              @juggers95
            </p>
            <p className="card-followers">
              <span className="card-followers-number">0</span>
              <span className="card-followers-title">Followers</span>
            </p>
            <p className="card-today">
              <img src="images/icon-up.svg" alt="Up" />
              12 Today
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
