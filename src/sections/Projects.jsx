import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="proyectos" className="container section fade">
      <h2><i className="bx bx-folder"></i> Proyectos</h2>

      <div className="projects">
        <ProjectCard
          title="ControlStock - Sistema de Inventario"
          description="Aplicación web para gestión de inventario. En desarrollo"
          tech="React · JavaScript · CSS · LocalStorage"
          link="https://github.com/Ezegallardo0/Desafio1"
          icon="bx-package"
        />

        <ProjectCard
          title="App de Multas (Solo Frontend)"
          description="Consulta de infracciones por patente o DNI."
          tech="React · JavaScript · CSS"
          icon="bx-car"
          link="https://github.com/Ezegallardo0/checkmultas"
        />
        <ProjectCard 
        title="EstrenosStudios"
        description="Pagina de Frontend de seleccion de peliculas"
        tech="React · JavaScript · CSS"
        icon="bx bx-movie"
        link="https://github.com/Ezegallardo0/Estrenos-Arg-main"/>
        <ProjectCard
        title="UnchartedWiki"
        description="Una pagina dedicada a la saga de videojuego Uncharted"
        tech="React · JavaScript · CSS"
        icon="bx bx-joystick"
        link="https://github.com/Ezegallardo0/uncharted_wiki"/>
      </div>
    </section>
  );
}

export default Projects;