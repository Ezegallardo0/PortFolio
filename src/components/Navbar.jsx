import ToggleMode from "./ToggleMode";

function Navbar() {
  return (
    <nav className="container nav">
      <a href="#sobre-mi"><i className="bx bx-user"></i> Sobre mí</a>
      <a href="#skills"><i className="bx bx-brain"></i> Tecnologías</a>
      <a href="#proyectos"><i className="bx bx-folder"></i> Proyectos</a>
      <a href="#contacto"><i className="bx bx-envelope"></i> Contacto</a>
      <ToggleMode />
    </nav>
  );
}

export default Navbar;