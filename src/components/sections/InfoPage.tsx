import { InfoStartFirst } from './infoSoftSkill/InfoStart'
import { InfoBetweenFirst } from './infoSoftSkill/InfoBetween'
import { InfoThirdFirst } from './infoSoftSkill/InfoThird'
import './infoPage.css'
import 'src/components/buttons/button.css'

export function StartLevel(): JSX.Element {
  return <InfoStartFirst />
}

export function SecondLevel(): JSX.Element {
  return <InfoBetweenFirst />
}

export function ThirdLevel(): JSX.Element {
  return <InfoThirdFirst />
}
