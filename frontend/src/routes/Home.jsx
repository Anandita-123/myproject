import React from 'react'
import CollectionCard from '../components/CollectionCard'
import Button from '../components/Button'
import RadioButton from '../components/RadioButton'
import Modal from '../components/Modal'

const cards = [
  {
    image: "https://b.zmtcdn.com/data/collections/a2611dbaaed9db9090eead8cf9ed0059_1528284670.jpg",
    title: "Vegetarians Delight",
    place: "5 Places",
    slug: "/veg"

  },
  {
    image: "https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582082248.jpg",
    title: "For the Family",
    place: "12 Places",
    slug: "/family"
  },
  {
    image: "https://b.zmtcdn.com/data/collections/532af3ab24d29dbddcdcd16921ada06f_1535628640.jpg",
    title: "Great Breakfasts",
    place: "10 Places",
    slug: "/breakfast"
  },
  {
    image: "https://b.zmtcdn.com/data/collections/f672e9556e44fe33ff47bf751639c0bd_1535356450.jpg",
    title: "Best Pizza Places In Town",
    place: "8 Places",
    slug: "/pizza"
  },
]

const filters = [
  {
    text: "Filters",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-filter-3583346-3007732.png?f=webp&w=256"
  },
  {
    text: "Rating: 4.0+"
  },
  {
    text: "Open Now"
  },
  {
    text: "Outdoor Seating"
  },
  {
    text: "Serving Alcohol"
  },
]

const radiobtns = [{ name: "Popularity", checked : true }, { name: "Rating: High to Low" }, { name: "Cost: Low to High" }, { name: "Cost: High to Low" }, { name: "Distance" }]

export default function Home() {
  return (
    <>
      <section className='collection py-3 pb-5' style={{ backgroundColor: "#F8F8F8" }}>
        <div className="container">
          <h2>Collections</h2>
          <br />
          <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Siliguri, based on trends</p>

          <div className="cards gap-3 " style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {
              cards.map((item) => (
                <CollectionCard image={item.image} title={item.title} place={item.place} slug={item.slug} />
              ))
            }
          </div>
        </div>
      </section>
      <section className='filter'>
        <div className="container d-flex align-items-center gap-3">
          <Modal title="Filter" radio={radiobtns}/>
        </div>
      </section>
    </>
  )
}
