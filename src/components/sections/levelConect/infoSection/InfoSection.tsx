import { useState } from 'react'
import 'src/css/infoPage.css'
import 'src/css/button.css'
import 'src/css/leave.css'
import TypeSection from 'src/types/infoSection'
import { Home } from 'src/components/home/Home'

export function InfoSection(Props: TypeSection): JSX.Element {
  const [useHome, setHome] = useState(false)
  const [infoAfter, setAfter] = useState(false)
  const [infoBefore, setBefore] = useState(false)

  if (infoBefore) return Props.before
  if (infoAfter) return Props.after
  if (useHome) return <Home />

  return (
    <>
      <header>
        <a href="#">
          <img
            onClick={() => setHome(true)}
            className="typeLogo-fap"
            src={Props.fap_logo}
            alt="logo-fap"
          />
        </a>
        <h2 className="contents title-page">{Props.level}</h2>
      </header>

      <div className="content-info">
        <section className="infoPage">
          <img className="show-img" src={Props.generic_img} alt="info_first" />
          <div className="contents">
            <h2 className="title-page">{Props.title_second}</h2>
            <br />
            <p>
              {Props.text_rest[0]}
              <br />
              <br />
              {Props.text_rest[1]}
              <br />
              <br />
              {Props.text_rest[2]}
              <br />
              <br />
              {Props.text_rest[3]}
            </p>
          </div>
          <br />
        </section>
      </div>
      <div className="btn-page">
        <a href="#" className="btn" onClick={() => setBefore(true)}>
          Voltar
        </a>
        <a href="#" className="btn" onClick={() => setAfter(true)}>
          Próximo
        </a>
      </div>
    </>
  )
}
