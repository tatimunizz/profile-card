import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Page } from './components/Page'
import { ProfileCard } from './components/ProfileCard'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <Page>
          <ProfileCard />
          <Footer />
      </Page>
      <GlobalStyle />
    </ThemeProvider>
  )
}
