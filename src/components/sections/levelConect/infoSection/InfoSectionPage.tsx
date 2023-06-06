import { TypeSection } from 'src/types/infoSection'

export function InfoPageSection(Props: TypeSection): JSX.Element {
  return (
    <section className="infoPage">
      <img className="show-img" src={Props.generic_img} alt="info_first" />
      <div className="contents">
        <h2 className="title-page">
          {Props.title_second ? Props.title_second : null}
        </h2>
        <br />
        <p>
          {Props.text_rest ? Props.text_rest[0] : null}
          <br />
          <br />
          {Props.text_rest ? Props.text_rest[1] : null}
          <br />
          <br />
          {Props.text_rest ? Props.text_rest[2] : null}
          <br />
          <br />
          {Props.text_rest ? Props.text_rest[3] : null}
          <br />
          <br />
          {Props.text_rest ? Props.text_rest[4] : null}
        </p>
      </div>
      <br />
    </section>
  )
}
