import { BaseService } from "./base.service"

export interface IResponse<T> {
  total_count: number
  incomplete_results: boolean
  items: T
}

export interface GithubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: false
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: true
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface GitHubQueryUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}

export interface GithubRepos {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
}

export class GithubService extends BaseService {
  constructor() {
    super(process.env.GITHUB_API_URL as string)
  }

  public searchUserByName(name: string): Promise<IResponse<GitHubQueryUser[]>> {
    return this.client
      .get(`/search/users?q=${encodeURIComponent(name)}`)
      .then((res) => res.data)
  }

  public getByUserLogin(name: string): Promise<GithubUser> {
    return this.client.get(`/users/${name}`).then((res) => res.data)
  }

  public getUserRepos(name: string): Promise<GithubRepos[]> {
    return this.client.get(`/users/${name}/repos`).then((res) => res.data)
  }
}

export const GithubServiceInstance = new GithubService()
