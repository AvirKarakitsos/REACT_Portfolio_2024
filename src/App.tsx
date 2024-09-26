import { ThemeProvider } from './utils/context/ThemeContext.js';
import { LanguageProvider } from './utils/context/LanguageContext.js';

import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

function App() {

  return (
	<ThemeProvider>
		<LanguageProvider>
			<Header/>
			<Footer/>
		</LanguageProvider>
	</ThemeProvider>
  )
}

export default App
