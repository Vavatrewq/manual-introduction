import { useState } from 'react'
import icon_book from 'src/assets/icons/icon_book.png'
import icon_fap from 'src/assets/icons/fap-logo.png'
import { StartLevel, SecondLevel, ThirdLevel } from '../sections/InfoPage'
import './leave.css'

export function Home(): JSX.Element {
  const [infoPageStart, setInfopageStart] = useState(false)
  const [infoPageSecond, setInfopageSecond] = useState(false)
  const [infoPageThird, setInfopageThird] = useState(false)

  if (infoPageStart) return <StartLevel />

  if (infoPageSecond) return <SecondLevel />

  if (infoPageThird) return <ThirdLevel />

  return (
    <>
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
            <button onClick={() => setInfopageStart(true)}>1exemplo</button>
            <button onClick={() => setInfopageSecond(true)}>2exemplo</button>
            <button onClick={() => setInfopageThird(true)}>exemplo</button>
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

          <h1 className="title-text">Informática Básica Online - Manual</h1>
          <img className="img_book" src={icon_book} alt="img_book" />
        </div>
      </section>
    </>
  )
}
