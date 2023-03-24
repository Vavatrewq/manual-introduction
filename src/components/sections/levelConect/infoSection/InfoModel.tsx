import { useState } from 'react'
import icon_fap from 'src/assets/icons/fap-logo.png'
import { FcGraduationCap } from 'react-icons/fc'
import {
  StartLevel,
  QuiteLevel,
  FinishLevel,
} from 'src/components/sections/InfoPage'
import 'src/css/leave.css'
import 'src/css/leaveResponsive.css'
import TypeModel from 'src/types/infoModel'

export function InfoModel(Props: TypeModel): JSX.Element {
  const [infoPageStart, setInfopageStart] = useState(false)
  const [infoPageSecond, setInfopageSecond] = useState(false)
  const [infoPageThird, setInfopageThird] = useState(false)

  if (infoPageStart) return <StartLevel />

  if (infoPageSecond) return <QuiteLevel />

  if (infoPageThird) return <FinishLevel />

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

          <img className="img_book" src={Props.icon_book} alt="img_book" />
          <h1 className="title-text">{Props.title_text}</h1>
        </div>
        <p className="show-text-start">{Props.opening}</p>

        <div className="element-block-botton">
          <span className="block-page"></span>
        </div>
      </section>

      <section className="body-right">
        <div className="show-content">
          <img className="logo_fap space-top" src={icon_fap} alt="logo_fap" />

          <p className="show-text space-top">{Props.opening}</p>

          <div className="show-btn space-top">
            <p className="box-btn">
              <a
                href="#"
                className="btn-start btn-circle"
                onClick={() => setInfopageStart(true)}
              ></a>
              Iniciante
            </p>
            <p className="box-btn">
              <a
                href="#"
                className="btn-between btn-circle"
                onClick={() => setInfopageSecond(true)}
              ></a>
              Intermediário
            </p>
            <p className="box-btn">
              <a
                href="#"
                className="btn-third btn-circle"
                onClick={() => setInfopageThird(true)}
              ></a>
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
