import './App.css'
import About_skills from './Contact/con_section';
import ContactHeader from './Contact/contactHeader';
import ContactMain from './Contact/contactmain';

function App() {
  return (
    <div className="bg-[#01071E] w-[100vw]">
      <ContactHeader />
      <About_skills />
      <ContactMain />
    </div>
  );
}

export default App;
