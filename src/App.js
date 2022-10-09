import './App.css'
import Navbar from 'components/Navbar'
import Section from 'components/Section'
import Carousel from 'components/Carousel'

function App() {
  return (
      <div>
        <Navbar>
          <Navbar.Logo href="/" name="MindMatter Medical Logo"/>
          <Navbar.List>
            <Navbar.ListDropdown name="Procedures"/>
            <Navbar.ListLink name="Our Staff"/>
            <Navbar.ListLink name="About Us"/>
            <Navbar.ListLink name="Research"/>
            <Navbar.ListLink name="Inquiries"/>
          </Navbar.List>
        </Navbar>
        <Section className="carousel-section">
          <Carousel>
            <Carousel.CarouselItem id="carousel-item1"/>
            <Carousel.CarouselItem id="carousel-item2"/>
            <Carousel.CarouselItem id="carousel-item3"/>
          </Carousel>
        </Section>
      </div>
  )
}

export default App
