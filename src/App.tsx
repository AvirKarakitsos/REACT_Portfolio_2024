import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from './utils/context/ThemeContext.js';
import { LanguageProvider } from './utils/context/LanguageContext.js';

import Header from './Components/Header.js';

function App() {

  return (
    <BrowserRouter>
			<ThemeProvider>
				<LanguageProvider>
					<Header/>
				</LanguageProvider>
			</ThemeProvider>
		</BrowserRouter>
  )
}

export default App
