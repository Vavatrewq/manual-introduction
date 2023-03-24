import icon_book from 'src/assets/icons/icon_book.png'
import { InfoModel } from '../sections/levelConect/infoSection/InfoModel'

export function Home(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_book}
      title_text="Práticas Básicas Smartphone - Manual"
      opening="Esse projeto foi pensado a ensinar pessoas com
      dificuldades em informática básica. Portanto oferecemos um manual básico, e selecionamos níveis de experiencia para
      cada um."
    />
  )
}
