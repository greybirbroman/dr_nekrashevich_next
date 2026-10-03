import AboutCard from '../AboutCard/AboutCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import sectionData from '../../data/about-section.json'

function About() {
  const { id, title, list } = sectionData

  return (
    <section
      id={id}
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl px-5 py-14 sm:px-7 md:px-8 md:py-20 lg:px-10 lg:py-24"
    >
      <SectionTitle id="about-title" title={title} />
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => (
          <li key={item.id} className="h-full">
            <AboutCard title={item.title} list={item.list} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
