import AboutCard from '../AboutCard/AboutCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import sectionData from '../../data/about-section.json'

function About() {
  const { id, title, list } = sectionData

  return (
    <section
      id={id}
      aria-labelledby="about-title"
      className="mx-auto max-w-site px-gutter-sm py-12 sm:px-gutter-md md:px-gutter-md md:py-16 lg:px-gutter-lg lg:py-24"
    >
      <SectionTitle id="about-title" title={title} />
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
