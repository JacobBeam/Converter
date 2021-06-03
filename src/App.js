import logo from './img/icons/logo.svg';
import logoFacebook from './img/icons/facebook.svg';
import logoInstagram from './img/icons/instagram.svg';
import logoTwitter from './img/icons/twitter.svg';
import logoYoutube from './img/icons/youtube.svg';
import card from './img/card.png';
import MainNav from './components/main-nav';
import Main from './components/main';
import Footer from './components/footer';

import './App.scss';



function App() {
  return (
    <div className="App">
 <MainNav logo={logo}></MainNav>


    <Main card={card}></Main>
<Footer
logo={logo}
 logoFacebook={logoFacebook}
 logoInstagram={logoInstagram}
 logoTwitter={logoTwitter}
 logoYoutube={logoYoutube}>
 </Footer>


    </div>
  );
}

export default App;
