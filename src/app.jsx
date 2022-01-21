import { useEffect } from 'preact/hooks'
import { projects, links } from './data.json'

export const App = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
      })
    }, observerOptions)

    const sections = Array.from(document.getElementsByClassName('fadeup'))
    for (let section of sections) {
      observer.observe(section)
    }
  }, [])

  return (
    <main>
      <section id="s1">
        <div class="container fadeup">
          <h1>
            Creative web developer and visual/music producer(?).
          </h1>
          <h2>
            hello there. I'm a senior front-end developer. I've been creating beatiful user interfaces and experiences for more than 6 years.
            Scroll down ↘ for more information.
          </h2>
        </div>
      </section>
      <section id="s2" class="fadeup">
        <h1>featured projects</h1>
        {
          projects.map(({ imageUrl, title, desc, url }) => (
            <div class="pj">
              <img src={imageUrl} />
              <div class="container">
                <h1>{title}</h1>
                <p>{desc}</p>
                <a href={url}>visit project <i>↗</i></a>
              </div>
          </div>
          ))
        }
      </section>
      <footer class="fadeup">
        <div class="overlay" />
        <video autoplay muted loop id="myVideo">
          <source src="bg.mp4" type="video/mp4" />
        </video>
        <div class="content">
          <div class="col1">
            <h1>write me something cute:</h1> <a href="mailto:hello@vndre.io">hello@vndre.io</a>
          </div>
          <div class="col2">
            {links.map(({ name, url }) => (
              <a href="url">{name}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
