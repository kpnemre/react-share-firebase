import AppRouter from './Router/Router';
import AuthContextProvider from './context/AuthContext';

function App() {
    // console.log(process.env);

  return (
  
    <AuthContextProvider >
      
    <AppRouter />

    </AuthContextProvider>
    
  );
}

export default App;


 