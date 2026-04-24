import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="proyectos" className="container section fade">
      <h2><i className="bx bx-folder"></i> Proyectos</h2>

      <div className="projects">
        <ProjectCard
          title="ControlStock - Sistema de Inventario"
          description="Aplicación web para gestión de inventario."
          tech="React · JavaScript · HTML · CSS · LocalStorage"
          link="https://github.com/Ezegallardo0/Desafio1"
          tag="React App"
          icon="bx-package"
        />

        <ProjectCard
          title="App de Multas"
          description="Consulta de infracciones por patente o DNI."
          tag="En desarrollo"
          icon="bx-car"
        />

        <ProjectCard
          title="Portfolio Personal"
          description="Sitio donde presento mis proyectos."
          tag="Actual"
          icon="bx-user-circle"
        />
      </div>
    </section>
  );
}

export default Projects;