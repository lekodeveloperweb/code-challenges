import React from "react"
import { GithubRepos, GithubUser } from "../../services/github.services"
import * as S from "./UserCard.styles"

const UserCard: React.FC<{ user: GithubUser; repos: GithubRepos[] }> = ({
  user,
  repos,
}) => {
  return (
    <S.Container>
      <S.Header>
        <S.CardImage src={user.avatar_url} />
        <S.UserInfo>
          <S.Title>
            {user.name}
            <S.SubTitle>({user.login})</S.SubTitle>
          </S.Title>
          <S.Description>{user.bio}</S.Description>
          <S.Items>
            {user.location && (
              <>
                <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </S.Svg>
                <span>{user.location}</span>
              </>
            )}
            {user.company && (
              <>
                <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </S.Svg>
                <a href={user.blog} rel="opener noreferrer" target="_blank">
                  {user.company}
                </a>
              </>
            )}
            <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </S.Svg>
            <a href={user.html_url} rel="opener noreferrer" target="_blank">
              Github
            </a>
            <S.Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </S.Svg>
            <span>({user.public_repos}) public Repos</span>
          </S.Items>
        </S.UserInfo>
      </S.Header>
      <S.ReposContainer>
        {repos.length > 0 &&
          repos.map((repo) => (
            <S.Repos key={repo.id}>
              <a href={repo.html_url} rel="opener noreferrer" target="_blank">
                {repo.name}
              </a>
              <span>{repo.description || "***Without description***"}</span>
            </S.Repos>
          ))}
      </S.ReposContainer>
    </S.Container>
  )
}

export default UserCard
