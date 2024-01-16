import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { UseGlobalContext } from './context'

const url = `https://api.unsplash.com/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`

function Gallery() {
  const { searchTerm } = UseGlobalContext()

  const result = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchTerm}`)
      return response.data
    },
  })

  if (result.isLoading) {
    return <section className="image-container">Loading... </section>
  }
  if (result.isError) {
    return <section className="image-container"> there was in error.. </section>
  }
  const results = result.data

  if (results.length < 1) {
    return <section className="image-container"> No results found... </section>
  }

  return (
    <section className="image-container">
      {results.map((item, index) => {
        const reglar = item?.urls?.regular

        return (
          <img
            key={index}
            src={reglar}
            alt={item.alt_description}
            className="img"
          />
        )
      })}
    </section>
  )
}

export default Gallery
