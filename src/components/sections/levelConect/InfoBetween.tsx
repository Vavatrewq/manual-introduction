import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'

import Phone_coreful from 'src/assets/img/intermediario/phone_coreful.jpg'
import Phone_whatsapp from 'src/assets/img/intermediario/phone_whatsapp.jpg'
import Phone_playerstoreapp from 'src/assets/img/intermediario/phone_playerstoreapp.jpg'
import Phone_passwordscreen from 'src/assets/img/intermediario/phone_passwordscreen.jpg'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoBetweenFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoBetweenSecond />}
      fap_logo={Fap_logo}
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Phone_coreful}
      title_second={['Cuidados básicos e necessários do seu celular']}
      text_rest={[
        ' Irei mostrar os cuidados que você deverá ter com seu novo aparelho celular, para ele não danificar e durar mais tempo.',
        ' Recomendado usar uma capinha protetora para caso você derrube ele não danificar e também uma película para maior proteção da tela do seu dispositivo.',
        ' Sempre que colocado pra carregar evitar colocar em cima de cobertores e lugares quentes para não utilizar ele enquanto carrega, esses são alguns cuidados básicos para deve ter com seu dispositivo.',
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
      level="Introdução Iniciante - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Phone_whatsapp}
      title_second={['Como fazer uma ligação pelo WhatsApp']}
      text_rest={[
        ' Primeiramente você verifica sé está conectado a internet e então abra seu aplicativo do WhatsApp.',
        ' No canto superior da sua tela terá o desenho de uma lupa você ira clicar no desenho e pesquisar o nome de quem você irá fazer a ligação, logo em seguida você clica em cima do nome de seu contato abrindo a conversa você verá um desenho de um telefone e pronto, só apertar no ícone de chamada e iniciará a ligação.',
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
      generic_img={Phone_playerstoreapp}
      title_second={['Como instalar Aplicativos da Play Store']}
      text_rest={[
        ' Primeiro passo localizar aplicativo Play Store no seu smartphone.',
        ' Segundo passo clicar nele e ir na barra de pesquisa.',
        ' E terceiro passo colocar o nome do aplicativo que você esta a procura e clicar em baixar, espere a barra de instalação e assim que apresentar em baixo do aplicativo selecionar a opção abrir ele estará pronto ser usado.',
      ]}
    />
  )
}

export function InfoBetweenFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoBetweenThird />}
      after={<InfoBetweenFinished />}
      fap_logo={Fap_logo}
      level="Introdução Intermediário - Criando uma Conta e Baixar Aplicativos na Play Store."
      generic_img={Phone_passwordscreen}
      title_second={['Como Adicionar uma senha na tela de inicio do celular']}
      text_rest={[
        ' Primeiro localizar no seu smartphone em configurações, a opção inicio do aplicativo, e por fim localizar a tela de bloqueio, nela terá 3 opções dependendo do modelo que você escolheu encontrara a (Senha ,Pin e desbloqueio de face), e pelo pin o padrão que você tem que fazer a senha com o toque do seu dedo.',
        ' E para selecionar a tela é só aplicar definir em tela de bloqueio para melhor segurança.',
      ]}
    />
  )
}

export function InfoBetweenFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Manual Intermediário do Smartphone."
      opening="Nossas opções estarão disponíveis mesmo que você termina (Iniciante e Intermediário), de Práticas Básicas Do Smartphone - Manual"
    />
  )
}
