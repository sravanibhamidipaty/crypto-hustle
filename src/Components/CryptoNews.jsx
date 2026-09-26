import { useEffect, useState } from "react"

function CryptoNews() {
  const [newsList, setNewsList] = useState(null)

  useEffect(() => {
    const getNewsArticles = async () => {
      const response = await fetch(
        "https://cryptocurrency.cv/api/news?limit=20"
      )
      const json = await response.json()
      setNewsList(json.articles) // Free Crypto News returns an "articles" array
    }
    getNewsArticles().catch(console.error)
  }, [])

  return (
    <div>
      <h3>Crypto News</h3>
      <ul className="side-list">
        {newsList && newsList.map((article) => (
          <li className="news-article" key={article.title}>
            <a href={article.link} target="_blank" rel="noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CryptoNews
