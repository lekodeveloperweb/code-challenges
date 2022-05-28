import { AxiosInstance } from "axios"
import MockAdapter from "axios-mock-adapter"

let mock: MockAdapter | null = null

export const mockRequests = (axios: AxiosInstance) => {
  if (mock) {
    return mock
  }
  mock = new MockAdapter(axios)

  mock.onGet(new RegExp("/*/repos")).reply(200, [
    {
      id: 485191384,
      node_id: "R_kgDOHOtu2A",
      name: "code-challenges",
      full_name: "lekodeveloperweb/code-challenges",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/code-challenges",
      description: "Code challenges requested by companies",
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/code-challenges",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/code-challenges/deployments",
      created_at: "2022-04-25T02:00:01Z",
      updated_at: "2022-04-27T01:10:49Z",
      pushed_at: "2022-04-28T21:40:00Z",
      git_url: "git://github.com/lekodeveloperweb/code-challenges.git",
      ssh_url: "git@github.com:lekodeveloperweb/code-challenges.git",
      clone_url: "https://github.com/lekodeveloperweb/code-challenges.git",
      svn_url: "https://github.com/lekodeveloperweb/code-challenges",
      homepage: null,
      size: 1330,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 272117667,
      node_id: "MDEwOlJlcG9zaXRvcnkyNzIxMTc2Njc=",
      name: "english-ipa-search",
      full_name: "lekodeveloperweb/english-ipa-search",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/english-ipa-search",
      description: "Python web scraping for help my journey to leaning English",
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/english-ipa-search",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/english-ipa-search/deployments",
      created_at: "2020-06-14T02:11:13Z",
      updated_at: "2020-07-13T20:21:04Z",
      pushed_at: "2020-07-13T20:21:02Z",
      git_url: "git://github.com/lekodeveloperweb/english-ipa-search.git",
      ssh_url: "git@github.com:lekodeveloperweb/english-ipa-search.git",
      clone_url: "https://github.com/lekodeveloperweb/english-ipa-search.git",
      svn_url: "https://github.com/lekodeveloperweb/english-ipa-search",
      homepage: null,
      size: 25,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Python",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 266109707,
      node_id: "MDEwOlJlcG9zaXRvcnkyNjYxMDk3MDc=",
      name: "firebase-notification-postman-collection",
      full_name: "lekodeveloperweb/firebase-notification-postman-collection",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url:
        "https://github.com/lekodeveloperweb/firebase-notification-postman-collection",
      description: "This repo contains postman collection of firebase REST API",
      fork: true,
      url: "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/firebase-notification-postman-collection/deployments",
      created_at: "2020-05-22T12:51:40Z",
      updated_at: "2020-05-22T12:51:41Z",
      pushed_at: "2018-11-11T06:39:13Z",
      git_url:
        "git://github.com/lekodeveloperweb/firebase-notification-postman-collection.git",
      ssh_url:
        "git@github.com:lekodeveloperweb/firebase-notification-postman-collection.git",
      clone_url:
        "https://github.com/lekodeveloperweb/firebase-notification-postman-collection.git",
      svn_url:
        "https://github.com/lekodeveloperweb/firebase-notification-postman-collection",
      homepage: null,
      size: 511,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 236388925,
      node_id: "MDEwOlJlcG9zaXRvcnkyMzYzODg5MjU=",
      name: "ionic-projects",
      full_name: "lekodeveloperweb/ionic-projects",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/ionic-projects",
      description: "Simple projects in Ionic for demonstrate code",
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/ionic-projects",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/ionic-projects/deployments",
      created_at: "2020-01-26T23:05:40Z",
      updated_at: "2021-05-23T22:31:20Z",
      pushed_at: "2022-04-29T16:06:40Z",
      git_url: "git://github.com/lekodeveloperweb/ionic-projects.git",
      ssh_url: "git@github.com:lekodeveloperweb/ionic-projects.git",
      clone_url: "https://github.com/lekodeveloperweb/ionic-projects.git",
      svn_url: "https://github.com/lekodeveloperweb/ionic-projects",
      homepage: null,
      size: 21786,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 54,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 54,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 173454942,
      node_id: "MDEwOlJlcG9zaXRvcnkxNzM0NTQ5NDI=",
      name: "ldw-site-blog",
      full_name: "lekodeveloperweb/ldw-site-blog",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/ldw-site-blog",
      description:
        "Meu site e blog, aonde falo um pouco sobre minha carreira, passado, presente e futuro.",
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/ldw-site-blog/deployments",
      created_at: "2019-03-02T14:02:26Z",
      updated_at: "2020-06-13T20:47:30Z",
      pushed_at: "2022-05-27T18:34:24Z",
      git_url: "git://github.com/lekodeveloperweb/ldw-site-blog.git",
      ssh_url: "git@github.com:lekodeveloperweb/ldw-site-blog.git",
      clone_url: "https://github.com/lekodeveloperweb/ldw-site-blog.git",
      svn_url: "https://github.com/lekodeveloperweb/ldw-site-blog",
      homepage: "https://ldw.solutions",
      size: 1467,
      stargazers_count: 0,
      watchers_count: 0,
      language: "HTML",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 8,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [
        "blog",
        "dotnet",
        "indigo-theme",
        "javascript",
        "jekyll",
        "site",
        "typescript",
      ],
      visibility: "public",
      forks: 0,
      open_issues: 8,
      watchers: 0,
      default_branch: "master",
    },
    {
      id: 361566481,
      node_id: "MDEwOlJlcG9zaXRvcnkzNjE1NjY0ODE=",
      name: "read-aloud-browser",
      full_name: "lekodeveloperweb/read-aloud-browser",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/read-aloud-browser",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/read-aloud-browser/deployments",
      created_at: "2021-04-25T23:59:44Z",
      updated_at: "2021-05-01T15:25:04Z",
      pushed_at: "2021-05-01T15:25:01Z",
      git_url: "git://github.com/lekodeveloperweb/read-aloud-browser.git",
      ssh_url: "git@github.com:lekodeveloperweb/read-aloud-browser.git",
      clone_url: "https://github.com/lekodeveloperweb/read-aloud-browser.git",
      svn_url: "https://github.com/lekodeveloperweb/read-aloud-browser",
      homepage: null,
      size: 186,
      stargazers_count: 1,
      watchers_count: 1,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: "main",
    },
    {
      id: 380328796,
      node_id: "MDEwOlJlcG9zaXRvcnkzODAzMjg3OTY=",
      name: "tdd-typescript-jest-config",
      full_name: "lekodeveloperweb/tdd-typescript-jest-config",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url:
        "https://github.com/lekodeveloperweb/tdd-typescript-jest-config",
      description:
        "A simple and useful project for prototyping ideas and concept tests, always starting with TDD of course.",
      fork: false,
      url: "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/tdd-typescript-jest-config/deployments",
      created_at: "2021-06-25T18:50:36Z",
      updated_at: "2021-06-25T18:51:26Z",
      pushed_at: "2021-06-25T18:51:24Z",
      git_url:
        "git://github.com/lekodeveloperweb/tdd-typescript-jest-config.git",
      ssh_url: "git@github.com:lekodeveloperweb/tdd-typescript-jest-config.git",
      clone_url:
        "https://github.com/lekodeveloperweb/tdd-typescript-jest-config.git",
      svn_url: "https://github.com/lekodeveloperweb/tdd-typescript-jest-config",
      homepage: null,
      size: 55,
      stargazers_count: 0,
      watchers_count: 0,
      language: "TypeScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 264272376,
      node_id: "MDEwOlJlcG9zaXRvcnkyNjQyNzIzNzY=",
      name: "vim-todo-lists",
      full_name: "lekodeveloperweb/vim-todo-lists",
      private: false,
      owner: {
        login: "lekodeveloperweb",
        id: 4014566,
        node_id: "MDQ6VXNlcjQwMTQ1NjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/lekodeveloperweb",
        html_url: "https://github.com/lekodeveloperweb",
        followers_url:
          "https://api.github.com/users/lekodeveloperweb/followers",
        following_url:
          "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
        gists_url:
          "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/lekodeveloperweb/subscriptions",
        organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
        repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
        events_url:
          "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/lekodeveloperweb/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/lekodeveloperweb/vim-todo-lists",
      description: "Vim plugin for TODO lists",
      fork: true,
      url: "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists",
      forks_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/forks",
      keys_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/teams",
      hooks_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/hooks",
      issue_events_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/events",
      assignees_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/tags",
      blobs_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/languages",
      stargazers_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/stargazers",
      contributors_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/contributors",
      subscribers_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/subscribers",
      subscription_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/subscription",
      commits_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/merges",
      archive_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/downloads",
      issues_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/labels{/name}",
      releases_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/lekodeveloperweb/vim-todo-lists/deployments",
      created_at: "2020-05-15T18:44:16Z",
      updated_at: "2020-05-15T19:48:41Z",
      pushed_at: "2020-05-15T19:48:39Z",
      git_url: "git://github.com/lekodeveloperweb/vim-todo-lists.git",
      ssh_url: "git@github.com:lekodeveloperweb/vim-todo-lists.git",
      clone_url: "https://github.com/lekodeveloperweb/vim-todo-lists.git",
      svn_url: "https://github.com/lekodeveloperweb/vim-todo-lists",
      homepage: "https://vim.sourceforge.io/scripts/script.php?script_id=5588",
      size: 66,
      stargazers_count: 0,
      watchers_count: 0,
      language: "Vim script",
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      allow_forking: true,
      is_template: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "master",
    },
  ])

  mock.onGet(new RegExp("/search/*")).reply(({ url }) => {
    console.log("url ", url)
    const uri = new URL(
      `${process.env.GITHUB_API_URL as string}${url as string}`
    )
    const filter = uri.searchParams.get("q")
    const usersResult = {
      total_count: 630,
      incomplete_results: false,
      items: [
        {
          login: "Leko",
          id: 1424963,
          node_id: "MDQ6VXNlcjE0MjQ5NjM=",
          avatar_url: "https://avatars.githubusercontent.com/u/1424963?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Leko",
          html_url: "https://github.com/Leko",
          followers_url: "https://api.github.com/users/Leko/followers",
          following_url:
            "https://api.github.com/users/Leko/following{/other_user}",
          gists_url: "https://api.github.com/users/Leko/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Leko/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/Leko/subscriptions",
          organizations_url: "https://api.github.com/users/Leko/orgs",
          repos_url: "https://api.github.com/users/Leko/repos",
          events_url: "https://api.github.com/users/Leko/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Leko/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "LekoArts",
          id: 16143594,
          node_id: "MDQ6VXNlcjE2MTQzNTk0",
          avatar_url: "https://avatars.githubusercontent.com/u/16143594?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LekoArts",
          html_url: "https://github.com/LekoArts",
          followers_url: "https://api.github.com/users/LekoArts/followers",
          following_url:
            "https://api.github.com/users/LekoArts/following{/other_user}",
          gists_url: "https://api.github.com/users/LekoArts/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LekoArts/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LekoArts/subscriptions",
          organizations_url: "https://api.github.com/users/LekoArts/orgs",
          repos_url: "https://api.github.com/users/LekoArts/repos",
          events_url: "https://api.github.com/users/LekoArts/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LekoArts/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoOwO",
          id: 20151124,
          node_id: "MDQ6VXNlcjIwMTUxMTI0",
          avatar_url: "https://avatars.githubusercontent.com/u/20151124?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoOwO",
          html_url: "https://github.com/lekoOwO",
          followers_url: "https://api.github.com/users/lekoOwO/followers",
          following_url:
            "https://api.github.com/users/lekoOwO/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoOwO/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoOwO/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoOwO/subscriptions",
          organizations_url: "https://api.github.com/users/lekoOwO/orgs",
          repos_url: "https://api.github.com/users/lekoOwO/repos",
          events_url: "https://api.github.com/users/lekoOwO/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoOwO/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekova",
          id: 12982223,
          node_id: "MDQ6VXNlcjEyOTgyMjIz",
          avatar_url: "https://avatars.githubusercontent.com/u/12982223?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekova",
          html_url: "https://github.com/lekova",
          followers_url: "https://api.github.com/users/lekova/followers",
          following_url:
            "https://api.github.com/users/lekova/following{/other_user}",
          gists_url: "https://api.github.com/users/lekova/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekova/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekova/subscriptions",
          organizations_url: "https://api.github.com/users/lekova/orgs",
          repos_url: "https://api.github.com/users/lekova/repos",
          events_url: "https://api.github.com/users/lekova/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekova/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoala",
          id: 250762,
          node_id: "MDQ6VXNlcjI1MDc2Mg==",
          avatar_url: "https://avatars.githubusercontent.com/u/250762?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoala",
          html_url: "https://github.com/lekoala",
          followers_url: "https://api.github.com/users/lekoala/followers",
          following_url:
            "https://api.github.com/users/lekoala/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoala/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoala/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoala/subscriptions",
          organizations_url: "https://api.github.com/users/lekoala/orgs",
          repos_url: "https://api.github.com/users/lekoala/repos",
          events_url: "https://api.github.com/users/lekoala/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoala/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekonjak",
          id: 14134388,
          node_id: "MDQ6VXNlcjE0MTM0Mzg4",
          avatar_url: "https://avatars.githubusercontent.com/u/14134388?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekonjak",
          html_url: "https://github.com/lekonjak",
          followers_url: "https://api.github.com/users/lekonjak/followers",
          following_url:
            "https://api.github.com/users/lekonjak/following{/other_user}",
          gists_url: "https://api.github.com/users/lekonjak/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekonjak/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekonjak/subscriptions",
          organizations_url: "https://api.github.com/users/lekonjak/orgs",
          repos_url: "https://api.github.com/users/lekonjak/repos",
          events_url: "https://api.github.com/users/lekonjak/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekonjak/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "ivoleko",
          id: 3874868,
          node_id: "MDQ6VXNlcjM4NzQ4Njg=",
          avatar_url: "https://avatars.githubusercontent.com/u/3874868?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ivoleko",
          html_url: "https://github.com/ivoleko",
          followers_url: "https://api.github.com/users/ivoleko/followers",
          following_url:
            "https://api.github.com/users/ivoleko/following{/other_user}",
          gists_url: "https://api.github.com/users/ivoleko/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ivoleko/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ivoleko/subscriptions",
          organizations_url: "https://api.github.com/users/ivoleko/orgs",
          repos_url: "https://api.github.com/users/ivoleko/repos",
          events_url: "https://api.github.com/users/ivoleko/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ivoleko/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "LeKovr",
          id: 1528068,
          node_id: "MDQ6VXNlcjE1MjgwNjg=",
          avatar_url: "https://avatars.githubusercontent.com/u/1528068?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LeKovr",
          html_url: "https://github.com/LeKovr",
          followers_url: "https://api.github.com/users/LeKovr/followers",
          following_url:
            "https://api.github.com/users/LeKovr/following{/other_user}",
          gists_url: "https://api.github.com/users/LeKovr/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LeKovr/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LeKovr/subscriptions",
          organizations_url: "https://api.github.com/users/LeKovr/orgs",
          repos_url: "https://api.github.com/users/LeKovr/repos",
          events_url: "https://api.github.com/users/LeKovr/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LeKovr/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekosfmi",
          id: 10788981,
          node_id: "MDQ6VXNlcjEwNzg4OTgx",
          avatar_url: "https://avatars.githubusercontent.com/u/10788981?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekosfmi",
          html_url: "https://github.com/lekosfmi",
          followers_url: "https://api.github.com/users/lekosfmi/followers",
          following_url:
            "https://api.github.com/users/lekosfmi/following{/other_user}",
          gists_url: "https://api.github.com/users/lekosfmi/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekosfmi/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekosfmi/subscriptions",
          organizations_url: "https://api.github.com/users/lekosfmi/orgs",
          repos_url: "https://api.github.com/users/lekosfmi/repos",
          events_url: "https://api.github.com/users/lekosfmi/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekosfmi/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoaf",
          id: 7765599,
          node_id: "MDQ6VXNlcjc3NjU1OTk=",
          avatar_url: "https://avatars.githubusercontent.com/u/7765599?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoaf",
          html_url: "https://github.com/lekoaf",
          followers_url: "https://api.github.com/users/lekoaf/followers",
          following_url:
            "https://api.github.com/users/lekoaf/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoaf/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoaf/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoaf/subscriptions",
          organizations_url: "https://api.github.com/users/lekoaf/orgs",
          repos_url: "https://api.github.com/users/lekoaf/repos",
          events_url: "https://api.github.com/users/lekoaf/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoaf/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "ThisFunctionalTom",
          id: 3315570,
          node_id: "MDQ6VXNlcjMzMTU1NzA=",
          avatar_url: "https://avatars.githubusercontent.com/u/3315570?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/ThisFunctionalTom",
          html_url: "https://github.com/ThisFunctionalTom",
          followers_url:
            "https://api.github.com/users/ThisFunctionalTom/followers",
          following_url:
            "https://api.github.com/users/ThisFunctionalTom/following{/other_user}",
          gists_url:
            "https://api.github.com/users/ThisFunctionalTom/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/ThisFunctionalTom/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/ThisFunctionalTom/subscriptions",
          organizations_url:
            "https://api.github.com/users/ThisFunctionalTom/orgs",
          repos_url: "https://api.github.com/users/ThisFunctionalTom/repos",
          events_url:
            "https://api.github.com/users/ThisFunctionalTom/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/ThisFunctionalTom/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekooooook",
          id: 25977623,
          node_id: "MDQ6VXNlcjI1OTc3NjIz",
          avatar_url: "https://avatars.githubusercontent.com/u/25977623?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekooooook",
          html_url: "https://github.com/lekooooook",
          followers_url: "https://api.github.com/users/lekooooook/followers",
          following_url:
            "https://api.github.com/users/lekooooook/following{/other_user}",
          gists_url: "https://api.github.com/users/lekooooook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekooooook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekooooook/subscriptions",
          organizations_url: "https://api.github.com/users/lekooooook/orgs",
          repos_url: "https://api.github.com/users/lekooooook/repos",
          events_url:
            "https://api.github.com/users/lekooooook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekooooook/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "LeKonArD",
          id: 25086042,
          node_id: "MDQ6VXNlcjI1MDg2MDQy",
          avatar_url: "https://avatars.githubusercontent.com/u/25086042?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LeKonArD",
          html_url: "https://github.com/LeKonArD",
          followers_url: "https://api.github.com/users/LeKonArD/followers",
          following_url:
            "https://api.github.com/users/LeKonArD/following{/other_user}",
          gists_url: "https://api.github.com/users/LeKonArD/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LeKonArD/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LeKonArD/subscriptions",
          organizations_url: "https://api.github.com/users/LeKonArD/orgs",
          repos_url: "https://api.github.com/users/LeKonArD/repos",
          events_url: "https://api.github.com/users/LeKonArD/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LeKonArD/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekofox",
          id: 79322299,
          node_id: "MDQ6VXNlcjc5MzIyMjk5",
          avatar_url: "https://avatars.githubusercontent.com/u/79322299?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekofox",
          html_url: "https://github.com/lekofox",
          followers_url: "https://api.github.com/users/lekofox/followers",
          following_url:
            "https://api.github.com/users/lekofox/following{/other_user}",
          gists_url: "https://api.github.com/users/lekofox/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekofox/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekofox/subscriptions",
          organizations_url: "https://api.github.com/users/lekofox/orgs",
          repos_url: "https://api.github.com/users/lekofox/repos",
          events_url: "https://api.github.com/users/lekofox/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekofox/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "LeKohrs",
          id: 7944807,
          node_id: "MDQ6VXNlcjc5NDQ4MDc=",
          avatar_url: "https://avatars.githubusercontent.com/u/7944807?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LeKohrs",
          html_url: "https://github.com/LeKohrs",
          followers_url: "https://api.github.com/users/LeKohrs/followers",
          following_url:
            "https://api.github.com/users/LeKohrs/following{/other_user}",
          gists_url: "https://api.github.com/users/LeKohrs/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LeKohrs/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LeKohrs/subscriptions",
          organizations_url: "https://api.github.com/users/LeKohrs/orgs",
          repos_url: "https://api.github.com/users/LeKohrs/repos",
          events_url: "https://api.github.com/users/LeKohrs/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LeKohrs/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoook",
          id: 8440578,
          node_id: "MDQ6VXNlcjg0NDA1Nzg=",
          avatar_url: "https://avatars.githubusercontent.com/u/8440578?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoook",
          html_url: "https://github.com/lekoook",
          followers_url: "https://api.github.com/users/lekoook/followers",
          following_url:
            "https://api.github.com/users/lekoook/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoook/subscriptions",
          organizations_url: "https://api.github.com/users/lekoook/orgs",
          repos_url: "https://api.github.com/users/lekoook/repos",
          events_url: "https://api.github.com/users/lekoook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoook/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoenig",
          id: 8785034,
          node_id: "MDQ6VXNlcjg3ODUwMzQ=",
          avatar_url: "https://avatars.githubusercontent.com/u/8785034?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoenig",
          html_url: "https://github.com/lekoenig",
          followers_url: "https://api.github.com/users/lekoenig/followers",
          following_url:
            "https://api.github.com/users/lekoenig/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoenig/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoenig/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoenig/subscriptions",
          organizations_url: "https://api.github.com/users/lekoenig/orgs",
          repos_url: "https://api.github.com/users/lekoenig/repos",
          events_url: "https://api.github.com/users/lekoenig/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoenig/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoder",
          id: 1224527,
          node_id: "MDQ6VXNlcjEyMjQ1Mjc=",
          avatar_url: "https://avatars.githubusercontent.com/u/1224527?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoder",
          html_url: "https://github.com/lekoder",
          followers_url: "https://api.github.com/users/lekoder/followers",
          following_url:
            "https://api.github.com/users/lekoder/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoder/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoder/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoder/subscriptions",
          organizations_url: "https://api.github.com/users/lekoder/orgs",
          repos_url: "https://api.github.com/users/lekoder/repos",
          events_url: "https://api.github.com/users/lekoder/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoder/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "MarcoLeko",
          id: 15436327,
          node_id: "MDQ6VXNlcjE1NDM2MzI3",
          avatar_url: "https://avatars.githubusercontent.com/u/15436327?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MarcoLeko",
          html_url: "https://github.com/MarcoLeko",
          followers_url: "https://api.github.com/users/MarcoLeko/followers",
          following_url:
            "https://api.github.com/users/MarcoLeko/following{/other_user}",
          gists_url: "https://api.github.com/users/MarcoLeko/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MarcoLeko/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MarcoLeko/subscriptions",
          organizations_url: "https://api.github.com/users/MarcoLeko/orgs",
          repos_url: "https://api.github.com/users/MarcoLeko/repos",
          events_url: "https://api.github.com/users/MarcoLeko/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MarcoLeko/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekodem",
          id: 1480154,
          node_id: "MDQ6VXNlcjE0ODAxNTQ=",
          avatar_url: "https://avatars.githubusercontent.com/u/1480154?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekodem",
          html_url: "https://github.com/lekodem",
          followers_url: "https://api.github.com/users/lekodem/followers",
          following_url:
            "https://api.github.com/users/lekodem/following{/other_user}",
          gists_url: "https://api.github.com/users/lekodem/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekodem/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekodem/subscriptions",
          organizations_url: "https://api.github.com/users/lekodem/orgs",
          repos_url: "https://api.github.com/users/lekodem/repos",
          events_url: "https://api.github.com/users/lekodem/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekodem/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoshimura",
          id: 8701566,
          node_id: "MDQ6VXNlcjg3MDE1NjY=",
          avatar_url: "https://avatars.githubusercontent.com/u/8701566?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoshimura",
          html_url: "https://github.com/lekoshimura",
          followers_url: "https://api.github.com/users/lekoshimura/followers",
          following_url:
            "https://api.github.com/users/lekoshimura/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoshimura/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoshimura/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoshimura/subscriptions",
          organizations_url: "https://api.github.com/users/lekoshimura/orgs",
          repos_url: "https://api.github.com/users/lekoshimura/repos",
          events_url:
            "https://api.github.com/users/lekoshimura/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoshimura/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekofev",
          id: 1517253,
          node_id: "MDQ6VXNlcjE1MTcyNTM=",
          avatar_url: "https://avatars.githubusercontent.com/u/1517253?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekofev",
          html_url: "https://github.com/lekofev",
          followers_url: "https://api.github.com/users/lekofev/followers",
          following_url:
            "https://api.github.com/users/lekofev/following{/other_user}",
          gists_url: "https://api.github.com/users/lekofev/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekofev/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekofev/subscriptions",
          organizations_url: "https://api.github.com/users/lekofev/orgs",
          repos_url: "https://api.github.com/users/lekofev/repos",
          events_url: "https://api.github.com/users/lekofev/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekofev/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "leko-team",
          id: 16772593,
          node_id: "MDQ6VXNlcjE2NzcyNTkz",
          avatar_url: "https://avatars.githubusercontent.com/u/16772593?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/leko-team",
          html_url: "https://github.com/leko-team",
          followers_url: "https://api.github.com/users/leko-team/followers",
          following_url:
            "https://api.github.com/users/leko-team/following{/other_user}",
          gists_url: "https://api.github.com/users/leko-team/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/leko-team/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/leko-team/subscriptions",
          organizations_url: "https://api.github.com/users/leko-team/orgs",
          repos_url: "https://api.github.com/users/leko-team/repos",
          events_url: "https://api.github.com/users/leko-team/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/leko-team/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekom",
          id: 6632721,
          node_id: "MDQ6VXNlcjY2MzI3MjE=",
          avatar_url: "https://avatars.githubusercontent.com/u/6632721?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekom",
          html_url: "https://github.com/lekom",
          followers_url: "https://api.github.com/users/lekom/followers",
          following_url:
            "https://api.github.com/users/lekom/following{/other_user}",
          gists_url: "https://api.github.com/users/lekom/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekom/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/lekom/subscriptions",
          organizations_url: "https://api.github.com/users/lekom/orgs",
          repos_url: "https://api.github.com/users/lekom/repos",
          events_url: "https://api.github.com/users/lekom/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekom/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekodeveloperweb",
          id: 4014566,
          node_id: "MDQ6VXNlcjQwMTQ1NjY=",
          avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekodeveloperweb",
          html_url: "https://github.com/lekodeveloperweb",
          followers_url:
            "https://api.github.com/users/lekodeveloperweb/followers",
          following_url:
            "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
          gists_url:
            "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekodeveloperweb/subscriptions",
          organizations_url:
            "https://api.github.com/users/lekodeveloperweb/orgs",
          repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
          events_url:
            "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekodeveloperweb/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekoller",
          id: 67798258,
          node_id: "MDQ6VXNlcjY3Nzk4MjU4",
          avatar_url: "https://avatars.githubusercontent.com/u/67798258?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekoller",
          html_url: "https://github.com/lekoller",
          followers_url: "https://api.github.com/users/lekoller/followers",
          following_url:
            "https://api.github.com/users/lekoller/following{/other_user}",
          gists_url: "https://api.github.com/users/lekoller/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekoller/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekoller/subscriptions",
          organizations_url: "https://api.github.com/users/lekoller/orgs",
          repos_url: "https://api.github.com/users/lekoller/repos",
          events_url: "https://api.github.com/users/lekoller/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekoller/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekotros",
          id: 1037934,
          node_id: "MDQ6VXNlcjEwMzc5MzQ=",
          avatar_url: "https://avatars.githubusercontent.com/u/1037934?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekotros",
          html_url: "https://github.com/lekotros",
          followers_url: "https://api.github.com/users/lekotros/followers",
          following_url:
            "https://api.github.com/users/lekotros/following{/other_user}",
          gists_url: "https://api.github.com/users/lekotros/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekotros/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekotros/subscriptions",
          organizations_url: "https://api.github.com/users/lekotros/orgs",
          repos_url: "https://api.github.com/users/lekotros/repos",
          events_url: "https://api.github.com/users/lekotros/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekotros/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "lekolawole",
          id: 96753580,
          node_id: "U_kgDOBcRXrA",
          avatar_url: "https://avatars.githubusercontent.com/u/96753580?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/lekolawole",
          html_url: "https://github.com/lekolawole",
          followers_url: "https://api.github.com/users/lekolawole/followers",
          following_url:
            "https://api.github.com/users/lekolawole/following{/other_user}",
          gists_url: "https://api.github.com/users/lekolawole/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/lekolawole/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/lekolawole/subscriptions",
          organizations_url: "https://api.github.com/users/lekolawole/orgs",
          repos_url: "https://api.github.com/users/lekolawole/repos",
          events_url:
            "https://api.github.com/users/lekolawole/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/lekolawole/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "LeKono",
          id: 22174607,
          node_id: "MDQ6VXNlcjIyMTc0NjA3",
          avatar_url: "https://avatars.githubusercontent.com/u/22174607?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/LeKono",
          html_url: "https://github.com/LeKono",
          followers_url: "https://api.github.com/users/LeKono/followers",
          following_url:
            "https://api.github.com/users/LeKono/following{/other_user}",
          gists_url: "https://api.github.com/users/LeKono/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/LeKono/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/LeKono/subscriptions",
          organizations_url: "https://api.github.com/users/LeKono/orgs",
          repos_url: "https://api.github.com/users/LeKono/repos",
          events_url: "https://api.github.com/users/LeKono/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/LeKono/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
        {
          login: "Lekovc54",
          id: 100413036,
          node_id: "U_kgDOBfwubA",
          avatar_url: "https://avatars.githubusercontent.com/u/100413036?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Lekovc54",
          html_url: "https://github.com/Lekovc54",
          followers_url: "https://api.github.com/users/Lekovc54/followers",
          following_url:
            "https://api.github.com/users/Lekovc54/following{/other_user}",
          gists_url: "https://api.github.com/users/Lekovc54/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Lekovc54/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Lekovc54/subscriptions",
          organizations_url: "https://api.github.com/users/Lekovc54/orgs",
          repos_url: "https://api.github.com/users/Lekovc54/repos",
          events_url: "https://api.github.com/users/Lekovc54/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Lekovc54/received_events",
          type: "User",
          site_admin: false,
          score: 1.0,
        },
      ],
    }
    const items = !filter
      ? []
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        usersResult.items.filter((x) =>
          x.login
            .toLowerCase()
            .startsWith(decodeURIComponent(filter.toLowerCase()))
        )
    return [
      200,
      { total_count: items.length, incomplete_results: false, items },
    ]
  })

  mock.onGet(new RegExp("/users/*")).reply(200, {
    login: "lekodeveloperweb",
    id: 4014566,
    node_id: "MDQ6VXNlcjQwMTQ1NjY=",
    avatar_url: "https://avatars.githubusercontent.com/u/4014566?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lekodeveloperweb",
    html_url: "https://github.com/lekodeveloperweb",
    followers_url: "https://api.github.com/users/lekodeveloperweb/followers",
    following_url:
      "https://api.github.com/users/lekodeveloperweb/following{/other_user}",
    gists_url: "https://api.github.com/users/lekodeveloperweb/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lekodeveloperweb/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/lekodeveloperweb/subscriptions",
    organizations_url: "https://api.github.com/users/lekodeveloperweb/orgs",
    repos_url: "https://api.github.com/users/lekodeveloperweb/repos",
    events_url:
      "https://api.github.com/users/lekodeveloperweb/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lekodeveloperweb/received_events",
    type: "User",
    site_admin: false,
    name: "Alex Leko",
    company: "LDW Solutions",
    blog: "https://ldw.solutions",
    location: "Rio de Janeiro",
    email: null,
    hireable: true,
    bio: "Web Developer, Passionate about technology. Working with the C#, NodeJS, Python, GoLang and frameworks web Angular, VueJS and Reactjs.",
    twitter_username: "LekoDeveloper",
    public_repos: 8,
    public_gists: 20,
    followers: 5,
    following: 17,
    created_at: "2013-03-30T17:27:51Z",
    updated_at: "2022-05-24T14:41:59Z",
  })
}
