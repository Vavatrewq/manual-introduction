import { useState } from 'react'
import icon_win from 'src/assets/icons/trophy.png'
import icon_fap from 'src/assets/icons/fap-logo.png'
import { Home } from 'src/components/homes/Home'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'
import { SecondLevel, StartLevel, ThirdLevel } from '../InfoPage'
import '../infoPage.css'

export function InfoBetweenFirst(): JSX.Element {
  const [infoSecond, setInfoSecond] = useState(false)
  const [infoHome, setInfoHome] = useState(false)

  if (infoHome) return <Home />
  if (infoSecond) return <InfoBetweenSecond />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Iniciante</h1>
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
        <button className="btn" onClick={() => setInfoHome(true)}>
          Voltar
        </button>
        <button className="btn" onClick={() => setInfoSecond(true)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export function InfoBetweenSecond(): JSX.Element {
  const [infoThird, setInfoThird] = useState(false)
  const [infoFirst, setInfoFirst] = useState(false)

  if (infoFirst) return <InfoBetweenFirst />
  if (infoThird) return <InfoBetweenThird />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Iniciante</h1>
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
        <button className="btn" onClick={() => setInfoFirst(true)}>
          Voltar
        </button>
        <button className="btn" onClick={() => setInfoThird(true)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export function InfoBetweenThird(): JSX.Element {
  const [infoSecond, setInfoSecond] = useState(false)
  const [infoFourth, setInfoFourth] = useState(false)

  if (infoSecond) return <InfoBetweenSecond />
  if (infoFourth) return <InfoBetweenFourth />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Iniciante</h1>
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
        <button className="btn" onClick={() => setInfoSecond(true)}>
          Voltar
        </button>
        <button className="btn" onClick={() => setInfoFourth(true)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export function InfoBetweenFourth(): JSX.Element {
  const [infoThird, setInfoThird] = useState(false)
  const [infoFifth, setInfoFifth] = useState(false)

  if (infoThird) return <InfoBetweenThird />
  if (infoFifth) return <InfoBetweenFifth />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Iniciante</h1>
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
        <button className="btn" onClick={() => setInfoThird(true)}>
          Voltar
        </button>
        <button className="btn" onClick={() => setInfoFifth(true)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export function InfoBetweenFifth(): JSX.Element {
  const [infoFourth, setInfoFourth] = useState(false)
  const [infoFinished, setFinished] = useState(false)

  if (infoFourth) return <InfoBetweenFourth />
  if (infoFinished) return <InfoBetweenFinished />

  return (
    <>
      <header>
        <img className="typeLogo-fap" src={Fap_logo} alt="logo-fap" />
        <h1 className="title-page">Iniciante</h1>
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
        <button className="btn" onClick={() => setInfoFourth(true)}>
          Voltar
        </button>
        <button className="btn" onClick={() => setFinished(true)}>
          Próximo
        </button>
      </div>
    </>
  )
}

export function InfoBetweenFinished(): JSX.Element {
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
            Nossas opções estarão disponíveis mesmo que você termina (iniciante,
            intermediário, avançado), de Informática Básica Online – Manual.
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
        <img className="img_book space-top" src={icon_win} alt="img_book" />
        <h1 className="title-text">
          Parabéns você terminou a parte: Intermediário - Informática Básica
          Online - Manual
        </h1>
      </section>
    </>
  )
}
