import icon_win from 'src/assets/icons/trophy.png'
import Fap_logo from 'src/assets/icons/fap-logo.png'

import Email_phoneFirst from 'src/assets/img/beginner/sectionFirst/email-phoneFirst.jpg'
import Email_phoneSecond from 'src/assets/img/beginner/sectionFirst/email-phoneSecond.jpg'
import Email_phoneThird from 'src/assets/img/beginner/sectionFirst/email-phoneThird.jpg'
import Email_phoneFourth from 'src/assets/img/beginner/sectionFirst/email-phoneFourth.jpg'
import Email_phoneFifth from 'src/assets/img/beginner/sectionFirst/email-phoneFifth.jpg'

import Wifi_phoneFirst from 'src/assets/img/beginner/sectionSecond/wifi-phoneFirst.jpg'
import Wifi_phoneSecond from 'src/assets/img/beginner/sectionSecond/wifi-phoneSecond.jpg'

import wallpaper_phoneFirst from 'src/assets/img/beginner/sectionThird/wallpaper-phoneFirst.jpeg'
import wallpaper_phoneSecond from 'src/assets/img/beginner/sectionThird/wallpaper-phoneSecond.png'
import wallpaper_phoneThird from 'src/assets/img/beginner/sectionThird/wallpaper-phoneThird.png'

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
        Email_phoneFifth,
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
      level="Como se conectar no Wi-Fi no Samsung S20 - Criado por Felipe 📱"
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
      //after={<InfoStartFourth />}
      after={<InfoStartFinished />}
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
      level="Iniciante - Como configurar o despertador no celular. 📱"
      generic_img={[
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
      ]}
      title_second={[
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
      ]}
      text_rest={{
        fistSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        secondSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        thirdSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        fourthSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        fifthSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
      }}
    />
  )
}

export function InfoStartFifth(): JSX.Element {
  return (
    <InfoSection
      before={<InfoStartFourth />}
      after={<InfoStartFinished />}
      fap_logo={Fap_logo}
      level="Iniciante - Como configurar o despertador no celular. 📱"
      generic_img={[
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
        Phone_alarm,
      ]}
      title_second={[
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
        'Como configurar o despertador no celular:',
      ]}
      text_rest={{
        fistSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        secondSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        thirdSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        fourthSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
        ],
        fifthSection: [
          'Para ligar e desligar seu smartphone, encontra o botão power do seu smartphone localizado muitas vezes na lateral do celular. 🤔',
          'E para tirar print mantenha precionado os dois botões de power e também o botão de volume baixo, segurando os dois ira tirar print do seu celular. 🖋️',
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
