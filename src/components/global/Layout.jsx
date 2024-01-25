import { ColorModeContext, useMode } from '../../constants/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { TopNavbar, SecondNavbar } from './Topbar';
import { FirstFooter, SecondFooter } from './Footer';
import { useEffect, useState } from 'react';


export default function Layout({ children, onSectionClick }) {

  const [theme, colorMode] = useMode();
  const [domLoaded, setDomLoaded] = useState(false);
    useEffect(() => {
        setDomLoaded(true);
    }, []);


  return (
    <>
    {domLoaded && (
      <ColorModeContext.Provider value= {colorMode} style={{ overflow: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div>
          <TopNavbar onSectionClick={onSectionClick} />
          <SecondNavbar/>
          <main className='content' style={{marginTop:'0px'}}>
            {children}
          </main>
          <FirstFooter/>
          <SecondFooter/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
    )}
    </> 
  )
}
