import './App.css';
import ChangeTitle from './components/ChangeTitle';
import AboutPage from './pages/aboutTitle/aboutPage';
import ContactPage from './pages/contactsPage/ContactsPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutPage />
      <ChangeTitle />
      <ContactPage />
    </div>
  );
}

export default App;
