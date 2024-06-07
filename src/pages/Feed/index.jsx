import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import MyMelody from "../../assets/myMelody.svg"
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://6650d72a20f4f4c442764754.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          {posts.map((post, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{post.titulo}</h2>
                  <img src={MyMelody} alt="Imagem" />
                </header>
                <div className="line"></div>
                <p>{post.descricao}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to="/update">
                      <button>editar</button>
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
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Feed;