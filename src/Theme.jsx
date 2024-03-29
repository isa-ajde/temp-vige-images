import { UseGlobalContext } from './context'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

function Theme() {
  const { isDarkTheme, toggleDarkTheme } = UseGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default Theme
