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
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      video={Curto}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      video={Curto}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      video={Curto}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      video={Curto}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      video={Curto}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
