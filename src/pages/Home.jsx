import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import FAQ from '../components/FAQ/FAQ'
import homepageData from '../data/homepageData'

function Home({ onContactClick }) {
  return (
    <>
      <Hero banner={homepageData.banner} onContactClick={onContactClick} />
      <About about={homepageData.about} />
      <Services services={homepageData.services} />
      <WhyUs whyUs={homepageData.whyUs} />
      <FAQ faq={homepageData.faq} />
    </>
  )
}

export default Home