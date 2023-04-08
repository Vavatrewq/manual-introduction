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
      level="Iniciante - Como configurar o despertador no celular."
      generic_img={Generic_img}
      title_second={['Como configurar o despertador no celular:']}
      text_rest={[
        ' Sobre seu dispositivo encontra vai sobre uma lupa de pesquisa, localizado no canto superior do dispositivo e então pesquisa sobre relógio, e clica sobre o app.',
        ' Depois clicado no app acessa as opções de alarme e configura, por qual horário desejar aplicar.',
        'Por isso é tudo tí vejo no próximo tópico! 🫠',
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
      level="Iniciante - Como ligar e desligar seu smartphone e tirar print."
      generic_img={Generic_img}
      title_second={['Como ligar e desligar seu smartphone e tirar print']}
      text_rest={[
        'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular.',
        'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular.',
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
      level="Iniciante - Como alterar a tela de fundo do smartphone"
      generic_img={Generic_img}
      title_second={['Como alterar a tela de fundo do smartphone']}
      text_rest={[
        'O dispositivo iniciado vai nas configurações do celular, e clica sobre tela em plano da tela, você será direcionado na galearia.',
        'E na galeria seleciona a imagem que deseja adicionar, e pronto seu dispositivo foi feito as alterações de plano de tela.',
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
      level="Iniciante - Como alterar a Data e Hora do seu dispositivo."
      generic_img={Generic_img}
      title_second={['Como alterar a Data e Hora do seu dispositivo']}
      text_rest={[
        ' Sobre o dispositivo arrasta com o cursor a cima para baixo e encontrara opções extras.',
        ' Com as opções mostradas aparecera uma opções de engrenagem uma ferramenta que costuma a ser mostrado no canto ao lado de data e hora do dispositivo.',
        ' Acessando essa ferramenta localiza uma opções de lupa clica sobre ele, e pesquisa a opção de data ou hora, que já aparece a opção de data e hora do dispositivo.',
        ' Dai adiante é só fazer as suas configurações como desejar.',
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
      level="Iniciante - Criando um Email."
      generic_img={Generic_img}
      title_second={['Criando um Email']}
      text_rest={[
        ' Para criar uma conta no email é necessario criar um login em um navegador como por exemplo gmail.',
        ' Depois disso clicando sobre um aplicativo do google (gmail, google, play store...), ira aparecer as informações de (nome, sobrenome e dados gerais).',
        'Depois é aceitando os termos e pronto terminou a criação de sua conta.',
      ]}
    />
  )
}

export function InfoStartFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Inicial do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante e Intermediário), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}
