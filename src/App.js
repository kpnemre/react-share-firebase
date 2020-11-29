import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Navbar from './components/Navbar'

function App() {
    // console.log(process.env);

  return (
    <div className="App">
      {/* 
      // route
      // signin
      // signup
      // forgot password
      */}
      <Navbar />
      <Signin />
      <Signup />
    </div>
  );
}

export default App;
