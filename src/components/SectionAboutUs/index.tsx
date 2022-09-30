import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { SectionAboutUsProps } from 'types/api'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map((profile, index) => (
        <ProfileCard
          key={profile.attributes.name}
          name={profile.attributes.name}
          role={profile.attributes.role}
          photo={profile.attributes.photo}
          socialLinks={profile.attributes.socialLinks}
          description={profile.attributes.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
