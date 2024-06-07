import Header from "../../components/Header";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("Titulo obrigatório")
    .max(40, "Limite 40 caracters"),
  descricao: yup
    .string()
    .required("Descrição obrigatório")
    .max(150, "Limite 150 caracters"),
  conteudo: yup
    .string()
    .required("Conteúdo obrigatório")
    .max(500, "Limite 500 caracters"),
});

function Update() {
  useEffect(() => {
    axios
      .get(`https://6650d72a20f4f4c442764754.mockapi.io/posts/${id}`)
      .then((response) => {
        reset(response.data);
      });
  });

  const {id} = useParams();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm({ resolver: yupResolver(validationPost) });

  const addPost = (data) =>
    axios
      .put(`https://6650d72a20f4f4c442764754.mockapi.io/posts/${id}`, data)
      .then(() => {
        console.log("Deu certo");
        navigate("/");
      })

      .catch(() => console.log("Deu errado"));

  return (
    <div>
      <Header />

      <main>
        <div className="card-post">
          <h1>Editar Postagem</h1>
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

export default Update;