import React from 'react'
import { InfoStartFirst } from './infoSoftSkill/infoStart'
import './infoPage.css'
import 'src/components/buttons/button.css'

export function StartLevel(): JSX.Element {
  return (
    <>
      <InfoStartFirst />
    </>
  )
}

export function SecondLevel(): JSX.Element {
  return (
    <div>
      <h1>Isso é um exemplo 2222</h1>
    </div>
  )
}

export function ThirdLevel(): JSX.Element {
  return (
    <div>
      <h1>Isso é um exemplo 3333</h1>
    </div>
  )
}
