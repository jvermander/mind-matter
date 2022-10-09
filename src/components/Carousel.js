import React, { Children, useState } from 'react'
import 'styles/Carousel.css'

function Carousel({ children }) {
  const [selected, setSelected] = useState(0)
  const onNavButtonClick = (index) => {setSelected(index)}

  const navButtons = 
    Children.map(children, (child, index) => (
      <CarouselNavButton selected={selected === index}
                         onClick={() => onNavButtonClick(index)}/> ))

  const items = 
    Children.map(children, (child, index) => (
      React.cloneElement(child, {selected: selected === index} )))


  return (
    <div className="carousel-ctn">
      <div className="carousel-display">
        {items}
      </div>
      <div className="carousel-nav">
        {navButtons}
      </div>
    </div>
  )
}

function CarouselItem({ id, selected }) {
  return (
    <div className={"carousel-item " + (selected? "selected" : "")} id={id} />
  )
}

function CarouselNavButton({ selected, onClick }) {
  return (
    <div className={"carousel-nav-btn " + (selected? "selected" : "")} onClick={onClick}/>
  )
}

Carousel.CarouselItem = CarouselItem
export default Carousel