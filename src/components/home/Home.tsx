import phone from 'src/assets/icons/phone.png'
import { InfoModel } from '../sections/levelConect/infoSection/InfoModel'

export function Home(): JSX.Element {
  return (
    <InfoModel
      icon_book={phone}
      title_text="Práticas Básicas Smartphone - Manual"
      opening="Esse projeto foi pensado para ensinar pessoas com
      dificuldades em smartphone de forma muito simples. Portanto oferecemos um manual, e selecionamos níveis de experiencia para
      cada um."
    />
  )
}
