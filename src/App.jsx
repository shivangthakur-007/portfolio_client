import './App.css'
// import Practice from './Contact/Practice/Practice.jsx';
// import Practiceclass from './Contact/Practice/Practiceclass';
import About_skills from './Contact/con_section';
import ContactHeader from './Contact/contactHeader';
import ContactMain from './Contact/contactmain';

function App() {
  return (
    <div className="bg-[#01071E] w-[100vw]">
      <ContactHeader />
      <About_skills />
      <ContactMain />
      {/* <Practice name= "Adarsh" fullName="Adarsh Pratap Singh"/>
      <Practiceclass name= "Manoj" fullName="Manoj Kumar"/> */}
    </div>
  );
}

export default App;
