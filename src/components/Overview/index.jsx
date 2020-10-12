import React from 'react';
import SmallCard from '../SmallCard';

const CardList = [
  {
    id: 1,
    icon: 'images/icon-facebook.svg',
    pageViews: 87,
    growth: 3,
    social: 'facebook',
    title: 'Page Views',
    up: true
  },
  {
    id: 2,
    icon: 'images/icon-facebook.svg',
    pageViews: 52,
    growth: 2,
    social: 'facebook',
    title: 'Likes',
    up: true
  },
  {
    id: 3,
    icon: 'images/icon-instagram.svg',
    pageViews: 5462,
    growth: 2257,
    social: 'instagram',
    title: 'Likes',
    up: true
  },
  {
    id: 4,
    icon: 'images/icon-instagram.svg',
    pageViews: 5200000,
    growth: 1375,
    social: 'instagram',
    title: 'Profile Views',
    up: true
  },
  {
    id: 5,
    icon: 'images/icon-twitter.svg',
    pageViews: 117,
    growth: 303,
    social: 'twitter',
    title: 'Retweets',
    up: true
  },
  {
    id: 6,
    icon: 'images/icon-twitter.svg',
    pageViews: 507,
    growth: 553,
    social: 'twitter',
    title: 'Likes',
    up: true
  },
  {
    id: 7,
    icon: 'images/icon-youtube.svg',
    pageViews: 107,
    growth: 19,
    social: 'youtube',
    title: 'Likes',
    up: false
  },
  {
    id: 8,
    icon: 'images/icon-youtube.svg',
    pageViews: 1407,
    growth: 12,
    social: 'youtube',
    title: 'Total views',
    up: false
  },
]
const Overview = () => {

  return (
    <section class="overview">
      <div class="wrapper">
        <h2>Overview - Today</h2>
        <div class="grid">
          {CardList.map(elem => (
            <SmallCard key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;