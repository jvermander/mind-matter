import React from 'react'
import 'styles/Section.css'

function Section(props) {
  return (
    <section className={"section " + props.className}>
      {props.children}
    </section>
  )
}

export default Section