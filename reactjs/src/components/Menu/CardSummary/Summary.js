import React from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  return (
    <section className={styles.summary}>
      <h2>Codealo Camp</h2>
      <p>
        Hace unas semanas, en un live hablé de lo qué es y hace un mentor por
        otro programador que está empezando o quiere mejorar sus habilidades y
        adquirir conocimientos. Tener mentor en programación, es importante
        porque agiliza tu aprendizaje, te enseña a cómo implementar tus
        conocimientos y te desafía lo que hace que salgas de tu zona de confort
        y te arriesgues con nuevos y grandes proyectos.💪🏻 ✨
      </p>
      <p>
      Johnnie Tirado, mentor para los Codevs
      </p>
    </section>
  );
};

export default Summary;