import React, { Children, useState, cloneElement, useRef } from 'react';
import 'styles/Carousel.css';

function Carousel({ children }) {
  const [order, setOrder] = useState(new Array(Children.count(children)).fill(0));
  const [active, setActive] = useState(0);
  const [transform, setTransform] = useState(0);
  const [willTransition, setWillTransition] = useState(true);
  const rightBtnRef = useRef();
  const leftBtnRef = useRef();

  const items = Children.map(children, (child, index) =>
    cloneElement(child, { order: order[index]})
  );
  const numItems = Children.count(children);
  const maxTransition = 100;

  const onLeftClick = () => {
    leftBtnRef.current.setAttribute("disabled", "disabled");
    rightBtnRef.current.setAttribute("disabled", "disabled");
    setWillTransition(false);
    setTransform(-maxTransition);
    const newActive = (active - 1 + numItems) % numItems;
    const newOrder = order;
    newOrder[newActive] -= 1;
    setOrder(newOrder);
    setActive(newActive);
    setTimeout(() => {
      setWillTransition(true);
      setTransform(0);
    }, 100);
  }
  const onRightClick = () => {
    leftBtnRef.current.setAttribute("disabled", "disabled");
    rightBtnRef.current.setAttribute("disabled", "disabled");
    setTransform(-maxTransition);
  }

  const onTransitionEnd = () => {
    if(transform < 0) { // right click 
      setWillTransition(false);
      setTransform(0);
      const newOrder = order;
      newOrder[active] += 1;
      setOrder(newOrder);
      setActive((active + 1) % numItems);
    }
    
    setTimeout(() => {
      setWillTransition(true);
      rightBtnRef.current.removeAttribute("disabled");
      leftBtnRef.current.removeAttribute("disabled");
    }, 100);
  }

  return (
    <div className="carousel-ctn" style={{width: `${maxTransition}%`}}>
      <div className="carousel-display">
        <div className="carousel-track" 
          style={{transform: `translateX(${transform}%)`,
                  transition: (willTransition? "all 1.5s ease" : "unset")}}
                  onTransitionEnd={onTransitionEnd}>
            {items}
        </div>
      </div>
      <button onClick={onLeftClick} ref={leftBtnRef} id="left-btn" >L</button>
      <button onClick={onRightClick} ref={rightBtnRef} id="right-btn">R</button>
    </div>
  )
}

function CarouselItem({ id, order }) {
  return (
    <div className="carousel-item" id={id} style={{ order: order }} />
  )
}

Carousel.CarouselItem = CarouselItem
export default Carousel 