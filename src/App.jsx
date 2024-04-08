import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';
// import { PokemonList } from './components/pokemon-list/pokemon-list';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeTogglerButton />
        <AppRoutes />
        {/* <PokemonList /> */}
      </ThemeProvider>
    </>
  )
}

export default App
