import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'

import Email_phoneFirst from 'src/assets/img/beginner/sectionFirst/email-phoneFirst.jpg'
import Email_phoneSecond from 'src/assets/img/beginner/sectionFirst/email-phoneSecond.jpg'
import Email_phoneThird from 'src/assets/img/beginner/sectionFirst/email-phoneThird.jpg'
import Email_phoneFourth from 'src/assets/img/beginner/sectionFirst/email-phoneFourth.jpg'

import Wifi_phoneFirst from 'src/assets/img/beginner/sectionSecond/wifi-phoneFirst.jpg'
import Wifi_phoneSecond from 'src/assets/img/beginner/sectionSecond/wifi-phoneSecond.jpg'

import wallpaper_phoneFirst from 'src/assets/img/beginner/sectionThird/wallpaper-phoneFirst.jpeg'
import wallpaper_phoneSecond from 'src/assets/img/beginner/sectionThird/wallpaper-phoneSecond.png'
import wallpaper_phoneThird from 'src/assets/img/beginner/sectionThird/wallpaper-phoneThird.png'

import Install_appFirst from 'src/assets/img/beginner/sectionFourth/install-appFirst.png'
import Install_appSecond from 'src/assets/img/beginner/sectionFourth/install-appSecond.png'
import Install_appThird from 'src/assets/img/beginner/sectionFourth/install-appThird.png'
import Install_appFourth from 'src/assets/img/beginner/sectionFourth/install-appFourth.png'

import Section_configFirst from 'src/assets/img/beginner/sectionFifth/section-confingFirst.jpeg'
import Section_configSecond from 'src/assets/img/beginner/sectionFifth/section-confingSecond.jpeg'
import Section_configThird from 'src/assets/img/beginner/sectionFifth/section-confingThird.jpeg'
import Section_configFourth from 'src/assets/img/beginner/sectionFifth/section-confingFourth.jpeg'

import Pass_configFirst from 'src/assets/img/beginner/sectionSixth/password-ConfigFirst.jpeg'
import Pass_configSecond from 'src/assets/img/beginner/sectionSixth/password-ConfigSecond.jpeg'
import Pass_configThird from 'src/assets/img/beginner/sectionSixth/password-ConfigThird.jpeg'

import { Home } from 'src/components/home/Home'
import { InfoSection } from './infoSection/InfoSection'
import { InfoModel } from './infoSection/InfoModel'

export function InfoStartFirst(): JSX.Element {
  return (
    <InfoSection
      before={<Home />}
      after={<InfoStartSecond />}
      fap_logo={Fap_logo}
      level="Como Enviar Email Pelo Celular - Samsung Galaxy J8 Versão do Android 10 - Criado por Maycon📱"
      generic_img={[
        Email_phoneFirst,
        Email_phoneSecond,
        Email_phoneThird,
        Email_phoneFourth,
      ]}
      title_second={['1° passo:', '2° passo:', '3° passo:', '4° passo:']}
      text_rest={{
        fistSection: [
          '>> Muitos não possuem o privilégio de ter um computador em casa, e por algum acaso necessita enviar em email...',
          '>> Clica em Escrever Para Iniciar Um Envio de Mensagem',
        ],
        secondSection: [
          '>> Escrever o seu email, depois o email de quem deseja enviar e também o assunto (se desejar).',
          '>> Por fim envia um email para uma empresa de preferencia, escreva o assunto em poucas palavras.',
        ],
        thirdSection: [
          '>> Se quiser enviar um arquivo junto com o email, clica no "CLIPS" e logo depois clicar em anexar arquivo...',
        ],
        fourthSection: [
          '>> Logo depois de finalizar o texto e as instruções anteriores clicar na "Setinha para direita", e pronto o processo está finalizado!',
        ],
      }}
    />
  )
}

export function InfoStartSecond(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFirst />}
      after={<InfoStartThird />}
      fap_logo={Fap_logo}
      level="Como se conectar no Wi-Fi no Samsung S20 Android 9 - Criado por Felipe 📱"
      generic_img={[Wifi_phoneFirst, Wifi_phoneSecond]}
      title_second={['1° passo', '2° passo']}
      text_rest={{
        fistSection: [
          '>> Para conectar ao wi-fi de seu smartphone, irá em configuração e então procurará a opção "conexões" e assim irá clicar nesta opção!',
        ],
        secondSection: [
          '>> Ao entrar nesta tela irá ver se o Wi-Fi estará ativado, enfim irá procurar a rede e clicar nela.',
          '>> Então adicionando uma senha e conectando sobre o nome do Wi-Fi, você pode usar a vontade sua internet.',
        ],
      }}
    />
  )
}

export function InfoStartThird(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartSecond />}
      after={<InfoStartFourth />}
      fap_logo={Fap_logo}
      level="Como trocar o wallpaper no iPhone - Retirado de: iPhone 11, iOS 16 - Criado por João📱"
      generic_img={[
        wallpaper_phoneFirst,
        wallpaper_phoneSecond,
        wallpaper_phoneThird,
      ]}
      title_second={['1° passo', '2° passo', '3° passo']}
      text_rest={{
        fistSection: [
          '>> Você deve clicar nos ajustes e ir onde a seta indica (Wallpaper)',
        ],
        secondSection: [
          '>> Após isso irá aparecer essas opções',
          '>> Clicar no símbolo azul  está na hora de escolher a sua foto',
        ],
        thirdSection: [
          '>> Agora só escolher sua foto favorita é pronto papel de parede está com a sua cara',
        ],
      }}
    />
  )
}

export function InfoStartFourth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartThird />}
      after={<InfoStartFifth />}
      fap_logo={Fap_logo}
      level="Como instalar um aplicativo da Player Store - Criado por Odilon Android 11 - Moto E20 📱"
      generic_img={[
        Install_appFirst,
        Install_appSecond,
        Install_appThird,
        Install_appFourth,
      ]}
      title_second={[
        '1° passo',
        '2° passo',
        '3° passo',
        '4° passo',
      ]}
      text_rest={{
        fistSection: [
          '>> Clica no aplicativo da Player Store',
        ],
        secondSection: [
          '>> Clica na barra superior onde está escrito pesquisa apps e jogos',
        ],
        thirdSection: [
          '>> Um exemplo que usaremos será o Facebook, digite o nome do aplicativo em que desejar e clicar na lupa em verde que está no teclado.',
        ],
        fourthSection: [
          '>> Clique em instalar e logo após a instalação aperte em abrir',
        ],
      }}
    />
  )
}

export function InfoStartFifth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFourth />}
      after={<InfoStartSixth />}
      fap_logo={Fap_logo}
      level="Como mudar toque do Celular (ligação) - (Alarme) Patrick - Android 9 📱"
      generic_img={[
        Section_configFirst,
        Section_configSecond,
        Section_configThird,
        Section_configFourth,
      ]}
      title_second={[
        '1° passo',
        '2° passo',
        '3° passo',
        '4° passo',
      ]}
      text_rest={{
        fistSection: [
          'Vai até o aplicativo de Configuração',
        ],
        secondSection: [
          'Sobre as configurações encontra a opção de som do dispositivo',
        ],
        thirdSection: [
          'Sobre Som, vai aparecer essa opção Som de alarme padrão',
        ],
        fourthSection: [
          'E também é mesma coisa para alarme, acessa Toque do telefone para alterar seu som de alerta.',
        ],
      }}
    />
  )
}

export function InfoStartSixth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFifth />}
      after={<InfoStartFinished />}
      fap_logo={Fap_logo}
      level="Como adicionar ou alterar sua senha do Celular - Alan - Android 11 📱"
      generic_img={[
        Pass_configFirst,
        Pass_configSecond,
        Pass_configThird,
      ]}
      title_second={[
        '1° passo',
        '2° passo',
        '3° passo',
      ]}
      text_rest={{
        fistSection: [
          'Acessa o aplicativo de configuração primeiro',
        ],
        secondSection: [
          'Sobre as configurações encontra a opção de Segurança e local e acessa',
        ],
        thirdSection: [
          'Sobre Segurança e local, aparecera a opção de Bloqueio de tela para alteração e adição de senha.',
        ],
      }}
    />
  )
}

export function InfoStartFinished(): JSX.Element {
  return (
    <InfoModel
      icon_book={icon_win}
      title_text="Parabéns Você Finalizou o Smartphone - Manual. 🚀"
      opening="Nossas opções estão disponíveis mesmo que você termina a aprendizagem, espero que nosso projeto foi util para você. Agradeço pela sua atenção."
    />
  )
}
