import { Link } from "react-router-dom";
import "./styles.css";

function HeaderMain() {
  return (
    <header>
      <div className="container">
        <div className="log">
          <h1>Projeto de Posts</h1>
        </div>

        <div className="btn-newPost">
          <Link to="/posts">
            <button>Novo Post</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderMain;