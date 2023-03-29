import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'
import Curto from 'src/assets/video/curtos.mp4'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoBetweenFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoBetweenSecond />}
      fap_logo={Fap_logo}
      level="Intermediário"
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

export function InfoBetweenSecond(): JSX.Element {
  return (
    <InfoSection
      before={<InfoBetweenFirst />}
      after={<InfoBetweenThird />}
      fap_logo={Fap_logo}
      level="Intermediário"
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

export function InfoBetweenThird(): JSX.Element {
  return (
    <InfoSection
      before={<InfoBetweenSecond />}
      after={<InfoBetweenFourth />}
      fap_logo={Fap_logo}
      level="Intermediário"
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

export function InfoBetweenFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoBetweenThird />}
      after={<InfoBetweenFifth />}
      fap_logo={Fap_logo}
      level="Intermediário"
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

export function InfoBetweenFifth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoBetweenFourth />}
      after={<InfoBetweenFinished />}
      fap_logo={Fap_logo}
      level="Intermediário"
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

export function InfoBetweenFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Intermediário do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante, Intermediário, Avançado), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}