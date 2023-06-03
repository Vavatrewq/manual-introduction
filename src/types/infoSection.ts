interface PassSection {
  fistSection?: string[]
  secondSection?: string[]
  thirdSection?: string[]
  fourthSection?: string[]
  fifthSection?: string[]
  generic_img?: string[]
  title_second?: string[]
}

export default interface TypeSection {
  before: JSX.Element
  after: JSX.Element
  fap_logo: string
  level: string
  generic_img: string[]
  text_rest: PassSection
  title_second: string[]
}
