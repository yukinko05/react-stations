// DO NOT DELETE

import './App.css'
import Header from './Header/Header'
import Description from './Description/Description'
import DogListContainer from './DogListContainer/DogListContainer'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
