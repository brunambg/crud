import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationPost = yup.object().shape({
  titulo: yup.string().required("Titulo obrigatório").max(40, "Limite 40 caracters"),
  descricao: yup.string().required("Descrição obrigatório").max(150, "Limite 150 caracters"),
  conteudo: yup.string().required("Conteúdo obrigatório").max(500, "Limite 500 caracters")
});

function Posts() {
  const {register,handleSubmit, formState: { errors }} = useForm({resolver:yupResolver(validationPost)});
  const addPost = (data) =>
  axios
    .post("https://6650d72a20f4f4c442764754.mockapi.io/posts", data)
    .then(() => {
      console.log("Deu certo");
      navigate("/");
    })

    .catch(() => console.log("Deu errado"));
    
  let navigate = useNavigate();

  return (
    <div>
      <Header />
      <main>
        <div className="card-post">
          <h1>Criar Postagem</h1>
          <hr />
          <div className="card-body-post">
            <form onSubmit={handleSubmit(addPost)}>
              <div className="fields">
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo" {...register("titulo")} />
                <p className="error-message">{errors.titulo?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="titulo">Descrição</label>
                <input type="text" id="descricao" {...register("descricao")} />
                <p className="error-message">{errors.descricao?.message}</p>
              </div>

              <div className="fields">
                <label htmlFor="conteudo">Conteúdo</label>
                <textarea
                  cols="30"
                  rows="10"
                  type="text"
                  {...register("conteudo")}
                />
                <p className="error-message">{errors.conteudo?.message}</p>
              </div>

              <div className="btn-post">
                <button type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Posts;