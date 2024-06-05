import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Pena from "../../assets/myMelody.svg"
import './style.css';

function Feed() {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h1>Consumindo API</h1>
              <img src={Pena} alt="Imagem" />
            </header>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, eveniet eligendi. Sunt nostrum, architecto
              voluptatibus fugit repellat excepturi id, commodi quasi illo
              voluptate laudantium molestias quam, earum magnam tempora
              voluptas?
            </p>
            <div className="btns">
              <div className="btn-edit">
                <Link to="/update">
                  <button>Editar</button>
                </Link>
              </div>

              <div className="btn-readmore">
                <Link to="/more">
                  <button>Ler Mais</button>
                </Link>
              </div>

              <div className="btn-delete">
                <button>Apagar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
