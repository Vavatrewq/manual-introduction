import { useState } from 'react'
import 'src/css/infoPage.css'
import 'src/css/button.css'
import 'src/css/leave.css'
import TypeinfoPage from 'src/types/infoSection'
import { Home } from 'src/components/home/Home'
import { InfoPageSection } from './InfoSectionPage'

export function InfoSection(Props: TypeinfoPage): JSX.Element {
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
        {Props.generic_img[0] ? (
          <InfoPageSection
            generic_img={Props.generic_img[0]}
            title_second={Props.title_second[0]}
            text_rest={
              Props.text_rest.fistSection ? Props.text_rest.fistSection : ''
            }
          />
        ) : null}

        {Props.generic_img[1] ? (
          <InfoPageSection
            generic_img={Props.generic_img[1]}
            title_second={Props.title_second[1]}
            text_rest={
              Props.text_rest.secondSection ? Props.text_rest.secondSection : ''
            }
          />
        ) : null}

        {Props.generic_img[2] ? (
          <InfoPageSection
            generic_img={Props.generic_img[2]}
            title_second={Props.title_second[2]}
            text_rest={
              Props.text_rest.thirdSection ? Props.text_rest.thirdSection : ''
            }
          />
        ) : null}

        {Props.generic_img[3] ? (
          <InfoPageSection
            generic_img={Props.generic_img[3]}
            title_second={Props.title_second[3]}
            text_rest={
              Props.text_rest.fourthSection ? Props.text_rest.fourthSection : ''
            }
          />
        ) : null}
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
