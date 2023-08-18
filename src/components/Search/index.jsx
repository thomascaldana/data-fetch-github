import React, { useEffect, useState } from 'react'
import {
  Container,
  ContainerItems,
  Section,
  Label,
  Input,
  Button,
  ErrorMessage,
  UserImage,
  UserInfo,
  RepoList,
  RepoItem,
  RepoTitle,
  MainTitle,
  GitHubIcon
} from './styles'
import { BsSearch } from 'react-icons/bs'
let searchTimeout;

const gitHubToken = import.meta.env.VITE_REACT_APP_GITHUBAPI_SECRET;
console.log("gitHubToken:", gitHubToken);


const Search = () => {

  const [info, setInfo] = useState('')
  const [repoInfo, setRepoInfo] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const FetchUserData = async () => {
    const secret = gitHubToken
    const headers = {
      Authorization: `Bearer ${secret}`,
    };

    // user personal information fetch ---------------------------
    try {
      const personalDataRequest = await fetch(`https://api.github.com/users/${inputValue}`, { headers });

      if (personalDataRequest.status === 403) {
        console.error('API rate limit exceeded or authentication issue.')
        return;
      }

      const gitHubPersonalData = await personalDataRequest.json()

      if (gitHubPersonalData.message !== 'Not Found') {


        const { avatar_url, location, name, public_repos } = gitHubPersonalData

        const UserData = {
          avatar_url,
          location,
          name,
          public_repos,
        };

        setInfo(UserData);
        setError('')
      } else {
        setError('User not found')
        setInfo('')
      }

    } catch (err) {
      console.log(err)
    }
    console.log(info)
  };
  // user repositories information fetch ---------------------------

  const FetchReposData = async () => {
    const secret = gitHubToken
    const headers = {
      Authorization: `Bearer ${secret}`,
    };


    try {
      const reposDataRequest = await fetch(`https://api.github.com/users/${inputValue}/repos`, { headers });

      if (reposDataRequest.status === 403) {
        console.error('API rate limit exceeded or authentication issue.')
        return;
      }

      const gitHubReposData = await reposDataRequest.json()

      if (Array.isArray(gitHubReposData)) {
        // Array of repositories
        const repositories = gitHubReposData.map(repo => {
          const { name, stargazers_count, description, homepage } = repo;
          return {
            name,
            stargazers_count,
            description,
            homepage
          };
        });

        const filteredRepos = repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setRepoInfo(filteredRepos);
      } else {
        setRepoInfo([]); // Empty the array in case of error
      }
    } catch (err) {
      setError('Error fetching repositories');
      setRepoInfo([]); // Empty the array in case of error
    }


  };

  const fetchData = async () => {
    await FetchUserData();
    await FetchReposData();
  };

  useEffect(() => {
    const delay = 1000;

    if (inputValue) {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        fetchData();
      }, delay);
    }
  }, [inputValue]);



  return (
    <Container>
      <MainTitle>
        <GitHubIcon />
        <h1>GITHUB FETCHER</h1>
        <GitHubIcon />
      </MainTitle>
      <ContainerItems>
        <h2>Search for a GitHub username</h2>
        <Section>
          <Label>Type e.g. "thomascaldana"</Label>
          <Input
            placeholder="Enter username"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button onClick={() => {
            if (inputValue) {
              fetchData();
            } else {
              setError('Please enter a valid username');
            }
          }}>
            Search
            <BsSearch style={{ marginLeft: '5px' }} />
          </Button>
        </Section>

        <ErrorMessage>{error}</ErrorMessage>

        <Section>
          {info && (
            <>
              <UserImage src={info.avatar_url} alt="" />
              <UserInfo>
                <h3>{info.name}</h3>
                <p>Location: {info.location}</p>
                <p>Public Repositories: {info.public_repos}</p>
              </UserInfo>
            </>
          )}
        </Section>

        <Section>
          <RepoList>
            {Array.isArray(repoInfo) && repoInfo.length > 0 ? <RepoTitle>Main Repositories</RepoTitle> : ''}
            {Array.isArray(repoInfo) && repoInfo.length > 0 ? (
              repoInfo.map((repo, index) => (
                <RepoItem key={index}>
                  <h3>{repo.name}</h3>
                  <p>Description: {repo.description}</p>
                  <p>Demonstration:<a href={repo.homepage} target='_blank'>{` ${repo.homepage}`}</a> </p>
                </RepoItem>
              ))
            ) : (
              <p></p>
            )}
          </RepoList>
        </Section>
      </ContainerItems>
    </Container>
  )

}

export default Search
