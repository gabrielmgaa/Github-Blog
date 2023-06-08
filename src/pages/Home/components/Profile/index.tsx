import { useEffect, useState } from "react";

import { Link as LinkComponent } from "../../../../components/Link";

import { Spinner } from "../../../../components/Spinner";

import { api } from "../../../../lib/axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import * as C from './styles'

interface Profile {
  followers: number
  login: string
  name: string
  bio: string
  avatar_url: string
  company: string
  html_url: string
}

export function Profile() {

  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [isLoading, setIsLoading] = useState(true)

  async function getProfileData() {
    try {
      const res = await api('/users/gabrielmgaa')
      setProfile(res.data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProfileData()
  }, [])

  const company = !profile.company ? "Sem org" : profile.company

  return (
    <C.ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img src={profile.avatar_url} alt="" />

          <C.ProfileContent>
            <C.ProfileHeader>
              <h2>{profile.name}</h2>
              <LinkComponent value="github" to={profile.html_url} />
            </C.ProfileHeader>

            <C.ProfileText>
              {profile.bio}
            </C.ProfileText>

            <C.ProfileItemContainer>
              <C.Item>
                <FontAwesomeIcon icon={faGithub} />
                <span>{profile.login}</span>
              </C.Item>
              <C.Item>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{company}</span>
              </C.Item>
              <C.Item>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{profile.followers} seguidores</span>
              </C.Item>
            </C.ProfileItemContainer>
          </C.ProfileContent>
        </>
      )}
    </C.ProfileContainer>
  )
}