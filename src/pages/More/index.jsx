import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HeaderMain from '../../components/HeaderMain';
import MyMelody from '../../assets/myMelody.svg';
import LoadingGif1 from '../../assets/myMelody.gif';
import LoadingGif2 from '../../assets/myMelody2.gif';
import './style.css';

function More() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loadingGif, setLoadingGif] = useState(null);

  useEffect(() => {
    // Escolhe um GIF aleatoriamente
    const randomGif = Math.random() < 0.5 ? LoadingGif1 : LoadingGif2;
    setLoadingGif(randomGif);

    axios
      .get(`https://6650d72a20f4f4c442764754.mockapi.io/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, [id]);

  if (!post) {
    return (
      <div className="loading">
        <img src={loadingGif} alt="Carregando..." className="loading-gif" />
      </div>
    );
  }

  return (
    <div>
      <HeaderMain />

      <main>
        <div className="card">
          <header>
            <h2>{post.titulo}</h2>
            <img src={MyMelody} alt="Imagem" />
          </header>
          <div className="line"></div>
          <p>{post.descricao}</p>
        </div>
      </main>
    </div>
  );
}

export default More;
