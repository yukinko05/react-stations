// DO NOT DELETE

import './App.css'
import Header from './Header'
import Description from './Description'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div className="border">
      <Header />
      <Description />
    </div>
  )
}
