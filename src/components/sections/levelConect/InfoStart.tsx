import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'
import Generic_img from 'src/assets/img/Screen_Shot3.webp'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoStartFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoStartSecond />}
      fap_logo={Fap_logo}
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      title_second={['Cuidados básicos e necessários do seu celular:']}
      text_rest={[
        ' Irei mostrar os cuidados que você deverá ter com seu novo aparelho celular, para ele não danificar e durar mais tempo.',
        ' Recomendado usar uma capinha protetora para caso você derrube ele não danificar e também uma película para maior proteção da tela do seu dispositivo.',
        ' Sempre que colocado pra carregar evitar colocar em cima de cobertores e lugares quentes para não utilizar ele enquanto carrega, esses são alguns cuidados básicos para deve ter com seu dispositivo.',
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
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
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

export function InfoStartThird(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartSecond />}
      after={<InfoStartFourth />}
      fap_logo={Fap_logo}
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
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

export function InfoStartFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartThird />}
      after={<InfoStartFifth />}
      fap_logo={Fap_logo}
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
      title_second={[
        'Para criar uma conta na Play Store é preciso:',
        'Para baixar um aplicativo do google:',
        'Desistalando um aplicativo:',
        'Acessando modo desenvolvedor do aplicativo:',
      ]}
      text_rest={[
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia WA música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wiki',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
        'A música (do grego μουσική τέχνη - musiké téchne, a arte das musas) é uma forma de arte que se constitui na combinação de vários sons e ritmos, seguindo uma pré-organização ao longo do tempo. É considerada por diversos autores como uma prática cultural e humana. Wikipedia',
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
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Generic_img}
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

export function InfoStartFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Inicial do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante, Intermediário, Avançado), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}
