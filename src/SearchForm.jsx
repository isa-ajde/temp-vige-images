import { UseGlobalContext } from './context'

function SearchForm() {
  const { setSearchTerm } = UseGlobalContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.target.elements.search.value
    if (!value) return
    setSearchTerm(value)
  }

  const handleClick = (e) => {
    e.target.select()
  }

  return (
    <section>
      <h2 className="title">UnPlash Images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          onClick={handleClick}
          name="search"
          className="form-input search-input"
          placeholder="cat"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
