import { InfoStartFirst } from './levelConect/InfoStart'
import { InfoBetweenFirst } from './levelConect/InfoBetween'
import { InfoThirdFirst } from './levelConect/InfoThird'
import 'src/css/infoPage.css'
import 'src/css/button.css'

export function StartLevel(): JSX.Element {
  return <InfoStartFirst />
}

export function QuiteLevel(): JSX.Element {
  return <InfoBetweenFirst />
}

export function FinishLevel(): JSX.Element {
  return <InfoThirdFirst />
}
