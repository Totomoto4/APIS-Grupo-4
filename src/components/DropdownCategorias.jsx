import './DropdownCategorias.css';

import { Link } from 'react-router-dom';

export default function DropdownCategorias() {
    const categories = ['Comic','Funko','Juego','Ropa']
    return(
        <div className="dropdown">
          <button className="dropbtn">Categorias</button>
          <div className="dropdown-content">
            <Link to={"/catalogo/"}>Todas las categorias</Link>
            {categories.map((categoria) => (
              <Link to={`/catalogo/${categoria}`}>{categoria}</Link>
            ))}
          </div>
        </div>
    );
}