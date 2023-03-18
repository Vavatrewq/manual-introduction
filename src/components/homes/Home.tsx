import React from 'react'
import icon_book from '../../assets/icons/icon_book.png'
import icon_fap from '../../assets/icons/fap-logo.png'
import './leave.css'

export function Home(): JSX.Element {
  return (
    <>
      <section className="body-right">
        <div className="show-content">
          <img className="logo_fap space-top" src={icon_fap} alt="logo_fap" />

          <p className="show-text space-top">
            Esse projeto foi pensado para cumprir com dever de ensinar pessoas
            com dificuldades em informática básica. Portanto nos alunos da FAP
            oferecemos um manual básico e selecionamos níveis de experiencia
            para cada um.
          </p>

          <div className="show-btn space-top">
            <button>exemplo</button>
            <button>exemplo</button>
            <button>exemplo</button>
          </div>

          <div className="space-top">
            <ul className="student-authors">
              <li>Name: Student</li>
              <li>Name: Student</li>
              <li>Name: Student</li>
              <li>Name: Student</li>
              <li>Name: Student</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="body-left">
        <img className="img_book" src={icon_book} alt="img_book" />
        <h1 className="title-text">Informática Básica Online - Manual</h1>
      </section>
    </>
  )
}
