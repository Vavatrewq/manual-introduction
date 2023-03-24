import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'
import Curto from 'src/assets/video/curtos.mp4'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoStartFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoStartSecond />}
      fap_logo={Fap_logo}
      level="Iniciante"
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

export function InfoStartSecond(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFirst />}
      after={<InfoStartThird />}
      fap_logo={Fap_logo}
      level="Iniciante"
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

export function InfoStartThird(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartSecond />}
      after={<InfoStartFourth />}
      fap_logo={Fap_logo}
      level="Iniciante"
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

export function InfoStartFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartThird />}
      after={<InfoStartFifth />}
      fap_logo={Fap_logo}
      level="Iniciante"
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

export function InfoStartFifth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFourth />}
      after={<InfoStartFinished />}
      fap_logo={Fap_logo}
      level="Iniciante"
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

export function InfoStartFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Inicial do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante, Intermediário, Avançado), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}
