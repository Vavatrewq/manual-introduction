import { useState } from 'react'
import icon_win from 'src/assets/icons/trophy.png'
import icon_fap from 'src/assets/icons/fap-logo.png'
import { Home } from 'src/components/homes/Home'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'
import { SecondLevel, StartLevel, ThirdLevel } from '../InfoPage'
import '../infoPage.css'
import { FcGraduationCap } from 'react-icons/fc'

export function InfoThirdFirst(): JSX.Element {
  const [infoSecond, setInfoSecond] = useState(false)
  const [infoHome, setInfoHome] = useState(false)

  if (infoHome) return <Home />
  if (infoSecond) return <InfoThirdSecond />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Avançado</h1>
      </header>
      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ###1 ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis quia distinctio facilis repellendus iusto nulla quo nihil
            voluptates quas! Est, inventore porro error rem repellat sit
            pariatur earum saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
      </div>
      <div className="btn-page">
        <a href="#">
          <button className="btn" onClick={() => setInfoHome(true)}>
            Voltar
          </button>
        </a>
        <a href="#">
          <button className="btn" onClick={() => setInfoSecond(true)}>
            Próximo
          </button>
        </a>
      </div>
    </>
  )
}

export function InfoThirdSecond(): JSX.Element {
  const [infoThird, setInfoThird] = useState(false)
  const [infoFirst, setInfoFirst] = useState(false)

  if (infoFirst) return <InfoThirdFirst />
  if (infoThird) return <InfoThirdThird />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Avançado</h1>
      </header>
      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ###2 ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis quia distinctio facilis repellendus iusto nulla quo nihil
            voluptates quas! Est, inventore porro error rem repellat sit
            pariatur earum saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
      </div>
      <div className="btn-page">
        <a href="#">
          <button className="btn" onClick={() => setInfoFirst(true)}>
            Voltar
          </button>
        </a>
        <a href="#">
          <button className="btn" onClick={() => setInfoThird(true)}>
            Próximo
          </button>
        </a>
      </div>
    </>
  )
}

export function InfoThirdThird(): JSX.Element {
  const [infoSecond, setInfoSecond] = useState(false)
  const [infoFourth, setInfoFourth] = useState(false)

  if (infoSecond) return <InfoThirdSecond />
  if (infoFourth) return <InfoThirdFourth />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Avançado</h1>
      </header>
      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ###3 ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis quia distinctio facilis repellendus iusto nulla quo nihil
            voluptates quas! Est, inventore porro error rem repellat sit
            pariatur earum saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
      </div>
      <div className="btn-page">
        <a href="#">
          <button className="btn" onClick={() => setInfoSecond(true)}>
            Voltar
          </button>
        </a>
        <a href="#">
          <button className="btn" onClick={() => setInfoFourth(true)}>
            Próximo
          </button>
        </a>
      </div>
    </>
  )
}

export function InfoThirdFourth(): JSX.Element {
  const [infoThird, setInfoThird] = useState(false)
  const [infoFifth, setInfoFifth] = useState(false)

  if (infoThird) return <InfoThirdThird />
  if (infoFifth) return <InfoThirdFifth />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Avançado</h1>
      </header>
      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ###4 ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis quia distinctio facilis repellendus iusto nulla quo nihil
            voluptates quas! Est, inventore porro error rem repellat sit
            pariatur earum saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
      </div>
      <div className="btn-page">
        <a href="#">
          <button className="btn" onClick={() => setInfoThird(true)}>
            Voltar
          </button>
        </a>
        <a href="#">
          <button className="btn" onClick={() => setInfoFifth(true)}>
            Próximo
          </button>
        </a>
      </div>
    </>
  )
}

export function InfoThirdFifth(): JSX.Element {
  const [infoFourth, setInfoFourth] = useState(false)
  const [infoFinished, setFinished] = useState(false)

  if (infoFourth) return <InfoThirdFourth />
  if (infoFinished) return <InfoThirdFinished />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Avançado</h1>
      </header>
      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ###5 ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            quis quia distinctio facilis repellendus iusto nulla quo nihil
            voluptates quas! Est, inventore porro error rem repellat sit
            pariatur earum saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
        <section className="infoPage">
          <img className="show-img" src={Generic_img} alt="info_first" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quis
            quia distinctio facilis repellendus iusto nulla quo nihil voluptates
            quas! Est, inventore porro error rem repellat sit pariatur earum
            saepe!
          </p>
        </section>
      </div>
      <div className="btn-page">
        <a href="#">
          <button className="btn" onClick={() => setInfoFourth(true)}>
            Voltar
          </button>
        </a>
        <a href="#">
          <button className="btn" onClick={() => setFinished(true)}>
            Próximo
          </button>
        </a>
      </div>
    </>
  )
}

export function InfoThirdFinished(): JSX.Element {
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

          <img className="img_book" src={icon_win} alt="img_book" />
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
              <a href="#">
                <button
                  className="btn-start btn-circle"
                  onClick={() => setInfopageStart(true)}
                ></button>
                Avançado
              </a>
            </p>
            <p className="box-btn">
              <a href="#">
                <button
                  className="btn-between btn-circle"
                  onClick={() => setInfopageSecond(true)}
                ></button>
                Intermediário
              </a>
            </p>
            <p className="box-btn">
              <a href="#">
                <button
                  className="btn-third btn-circle"
                  onClick={() => setInfopageThird(true)}
                ></button>
                Avançado
              </a>
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
