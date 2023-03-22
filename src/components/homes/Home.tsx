import { useState } from 'react'
import icon_book from 'src/assets/icons/icon_book.png'
import icon_fap from 'src/assets/icons/fap-logo.png'
import { FcGraduationCap } from 'react-icons/fc'
import { StartLevel, SecondLevel, ThirdLevel } from '../sections/InfoPage'
import './leave.css'
import './leaveResponsive.css'

export function Home(): JSX.Element {
  const [infoPageStart, setInfopageStart] = useState(false)
  const [infoPageSecond, setInfopageSecond] = useState(false)
  const [infoPageThird, setInfopageThird] = useState(false)

  if (infoPageStart) return <StartLevel />

  if (infoPageSecond) return <SecondLevel />

  if (infoPageThird) return <ThirdLevel />

  return (
    <>
      <section className="body-left">
        <div className="element-block">
          <span className="block-page"></span>
        </div>

        <div className="body-content">
          <div className="element-circleTwo">
            <span className="circle-page"></span>
          </div>
          <div className="element-circleOne">
            <span className="circle-page"></span>
          </div>

          <img className="logo_fap-top" src={icon_fap} alt="logo_fap" />

          <img className="img_book" src={icon_book} alt="img_book" />
          <h1 className="title-text">Informática Básica Online - Manual</h1>
        </div>
        <p className="show-text-start">
          Esse projeto foi pensado para cumprir com dever de ensinar pessoas com
          dificuldades em informática básica. Portanto nos alunos da FAP
          oferecemos um manual básico, e selecionamos níveis de experiencia para
          cada um.
        </p>

        <div className="element-block-botton">
          <span className="block-page"></span>
        </div>
      </section>

      <section className="body-right">
        <div className="show-content">
          <img className="logo_fap space-top" src={icon_fap} alt="logo_fap" />

          <p className="show-text space-top">
            Esse projeto foi pensado para cumprir com dever de ensinar pessoas
            com dificuldades em informática básica. Portanto nos alunos da FAP
            oferecemos um manual básico, e selecionamos níveis de experiencia
            para cada um.
          </p>

          <div className="show-btn space-top">
            <p className="box-btn">
              <button
                className="btn-start btn-circle"
                onClick={() => setInfopageStart(true)}
              ></button>
              Iniciante
            </p>
            <p className="box-btn">
              <button
                className="btn-between btn-circle"
                onClick={() => setInfopageSecond(true)}
              ></button>
              Intermediário
            </p>
            <p className="box-btn">
              <button
                className="btn-third btn-circle"
                onClick={() => setInfopageThird(true)}
              ></button>
              Avançado
            </p>
          </div>

          <div className="space-top">
            <h2>Criadores:</h2>
            <ul className="student-authors">
              <li>
                <FcGraduationCap /> Name: Student
              </li>
              <li>
                <FcGraduationCap /> Name: Student
              </li>
              <li>
                <FcGraduationCap /> Name: Student
              </li>
              <li>
                <FcGraduationCap /> Name: Student
              </li>
              <li>
                <FcGraduationCap /> Name: Student
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
