import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'


export const GitHubIcon = styled(BsGithub)`
width: 2rem;
height: 2rem;
`


export const MainTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  h1{
    font-family: 'Preahvihear', sans-serif;
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 460px) {
    gap: 1rem;

    h1{
      font-size: 1.4rem;

  }
  }
`
export const Container = styled.div`
 margin: 7rem auto 1rem auto;
 padding: 1rem;
`
export const ContainerItems = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 2rem auto 1rem auto;

  h2{
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  p{
    color: #696969;
  }
`;

export const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  margin-bottom: 10px;

  @media (min-width: 400px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
export const UserImage = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-top: 10px;
  
  align-self: center;
`;

export const UserInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  p{
    text-align: center;
  }

`;

export const RepoList = styled.div`
  margin-top: 20px;
`;

export const RepoTitle = styled.h3`
    text-align: center;
    margin-bottom: 1rem;
`;

export const RepoItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin: 5px 0;
  }
`;