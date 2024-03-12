import './App.css';
import ChangeTitle from './components/ChangeTitle';
import AboutPage from './pages/aboutTitle/aboutPage';
import ContactPage from './pages/contactsPage/ContactsPage';
import CountPage from './pages/countPage/CountPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      {/* <MainPage />
      <AboutPage />
      <ChangeTitle />
      <ContactPage /> */}
      <CountPage />
    </div>
  );
}

export default App;
