import React, { Children, useState, useEffect } from 'react'
import 'styles/Carousel.css'

function Carousel({ children }) {
  const [selected, setSelected] = useState(0)
  const onNavButtonClick = (index) => {
    setSelected(index)
  }

  useEffect(() => {
    console.log(selected)
  }, [selected])

  const onRightBtnClick = () => {
    setSelected((selected+1) % Children.count(children))
  }

  const onLeftBtnClick = () => {
    var count = Children.count(children)
    setSelected((selected-1 + count) % count)
  }

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
        <button onClick={onLeftBtnClick}>Left</button>
        <button onClick={onRightBtnClick}>Right</button>
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