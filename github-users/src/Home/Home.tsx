import React, { useEffect, useState } from "react"
import Autocomplete from "../components/Autocomplete/Autocomplete"
import UserCard from "../components/UserCard/UserCard"
import useDebounce from "../hooks/useDebounce"
import {
  GitHubQueryUser,
  GithubRepos,
  GithubServiceInstance,
  GithubUser,
  IResponse,
} from "../services/github.services"
import { Container } from "./Home.styles"

const Home = () => {
  const [state, setState] = useState<IResponse<GitHubQueryUser[]> | null>(null)
  const [userInfo, setUserInfo] = useState<GithubUser | null>(null)
  const [userRepos, setUserRepos] = useState<GithubRepos[] | null>(null)
  const [searchValue, setSearchValue] = useState("")
  const debouncedQuery = useDebounce(searchValue, 250)

  const fetchUsers = (login: string) => {
    GithubServiceInstance.searchUserByName(login)
      .then((data) => {
        setState(data)
        console.log(data)
      })
      .catch((error) => {
        console.error("Error on search user ", error)
      })
  }

  const showDetails = async (login: string) => {
    try {
      const repos = await GithubServiceInstance.getUserRepos(login)
      console.log("repos", repos)
      setUserRepos(repos)
      setState(null)
      setSearchValue("")
      const user = await GithubServiceInstance.getByUserLogin(login)
      setUserInfo(user)
    } catch (error) {
      console.error("Error on get user ", error)
    }
  }

  useEffect(() => {
    if (debouncedQuery && debouncedQuery.length >= 3) {
      fetchUsers(debouncedQuery)
    } else {
      setState(null)
    }
  }, [debouncedQuery])

  return (
    <Container>
      <Autocomplete
        value={searchValue}
        items={state?.items.map((x) => x.login)}
        onChange={(e) => setSearchValue(e.target.value)}
        onSelect={(login: string) => showDetails(login)}
      />
      {userInfo && <UserCard user={userInfo} repos={userRepos || []} />}
    </Container>
  )
}

export default Home
