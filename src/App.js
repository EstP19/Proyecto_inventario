
import './App.css';
import { Fragment } from 'react';
import { Header, Repositories, Welcome, Footer } from './Components/Export';


function App() {
  return (
    <Fragment>
      <Header />
      <Welcome />
      <Repositories />
      <Footer />
    </Fragment>
  )
}

export default App;
