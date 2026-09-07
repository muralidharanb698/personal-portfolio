import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
  
    axios
      .get('http://127.0.0.1:8000/api/projects/')
      .then((res) => {
        console.log('Projects:', res.data)
        setProjects(res.data)
      })
      .catch((err) => {
        console.error('Projects error:', err)
      })

    axios
      .get('http://127.0.0.1:8000/api/skills/')
      .then((res) => {
        console.log('Skills:', res.data)
        setSkills(res.data)
      })
      .catch((err) => {
        console.error('Skills error:', err)
      })
  }, [])
  const categories = [
    'Frontend',
    'Backend',
    'Database',
    'Tools'
  ]

  return (
    <div className="app">


      <header className="hero">
        <h1>Muralidharan B</h1>
        <p>Full Stack Developer</p>
      </header>


      <section id="skills">

        <h2>Skills</h2>

        <div className="skills-grid">

          {categories.map((category) => {

            const categorySkills = skills.filter(
              (skill) =>
                skill.category.toLowerCase() ===
                category.toLowerCase()
            )

            return (
              <div
                className="skill-category"
                key={category}
              >

                <h3>
                  {category.toUpperCase()}
                </h3>

                <div className="skill-list">

                  {categorySkills.map((skill) => (
                    <span
                      className="skill"
                      key={skill.id}
                    >
                      {skill.name}
                    </span>
                  ))}

                </div>

              </div>
            )
          })}

        </div>

      </section>


      <section id="projects">

        <h2>Projects</h2>

        <div className="projects-container">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <h3>{project.title}</h3>

              <p className="description">
                {project.description}
              </p>

              <p className="tech">
                <strong>Tech:</strong>{' '}
                {project.tech_stack}
              </p>

              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-button"
                >
                  Live Demo
                </a>
              )}

            </div>

          ))}

        </div>

      </section>


      <footer>
        <p>Gmail: muralidharanb698@gmail.com</p>
      </footer>

    </div>
  )
}

export default App