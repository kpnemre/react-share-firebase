import Signup from './pages/Signup';
import Navbar from './components/Navbar'

function App() {
  
    console.log(process.env);

  return (
    <div className="App">
      {/* 
      // route
      // signin
      // signup
      // forgot password
      */}
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;
