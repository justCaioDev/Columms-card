import PreviewCard from "./components/PreviewCard"
import styled from "styled-components"

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;

  @media screen and (max-width: 1075px) {
      height: 100%;
    }
`


function App() {
  return (
    <AppContainer>
      <PreviewCard />
    </AppContainer>
  )
}

export default App
