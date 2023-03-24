import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'
import Curto from 'src/assets/video/curtos.mp4'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoThirdFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoThirdSecond />}
      fap_logo={Fap_logo}
      level="Avançado"
      generic_img={Generic_img}
      video={Curto}
      text_rest={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
      ]}
    />
  )
}

export function InfoThirdSecond(): JSX.Element {
  return (
    <InfoSection
      before={<InfoThirdFirst />}
      after={<InfoThirdThird />}
      fap_logo={Fap_logo}
      level="Avançado"
      generic_img={Generic_img}
      video={Curto}
      text_rest={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
      ]}
    />
  )
}

export function InfoThirdThird(): JSX.Element {
  return (
    <InfoSection
      before={<InfoThirdSecond />}
      after={<InfoThirdFourth />}
      fap_logo={Fap_logo}
      level="Avançado"
      generic_img={Generic_img}
      video={Curto}
      text_rest={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
      ]}
    />
  )
}

export function InfoThirdFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoThirdThird />}
      after={<InfoThirdFifth />}
      fap_logo={Fap_logo}
      level="Avançado"
      generic_img={Generic_img}
      video={Curto}
      text_rest={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
      ]}
    />
  )
}

export function InfoThirdFifth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoThirdFourth />}
      after={<InfoThirdFinished />}
      fap_logo={Fap_logo}
      level="Avançado"
      generic_img={Generic_img}
      video={Curto}
      text_rest={[
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit recusandae quae iure praesentium veniam voluptatum minus dolorem quidem unde, in nisi facilis ducimus, natus nostrum laudantium ab quas eos?',
      ]}
    />
  )
}

export function InfoThirdFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Avançado do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante, Intermediário, Avançado), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}
