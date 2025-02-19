import React from 'react'
import Article from '/src/components/wrappers/Article.jsx'
import InfoBlock from '/src/components/generic/InfoBlock.jsx'
import { useParser } from '/src/helpers/parser.js'

function ArticleInfoBlock({ data }) {
  const parser = useParser()

  const parsedData = parser.parseArticleData(data)
  const items = parsedData.items
  parser.sortArticleItemsByDateDesc(items)
  const parsedItems = parser.parseArticleItems(items)

  return (
    <>
      <Article className={`article-info-block`} title={parsedData.title}>
        {parsedItems.map((item, key) => (
          <InfoBlock
            key={key}
            img={item.img}
            faIcon={item.faIcon}
            faIconColors={item.faIconColors}
            html={item.text}
          />
        ))}
      </Article>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <button className={`btn btn-xl btn-highlight`}> resume </button>
      </div>
    </>
  )
}

export default ArticleInfoBlock
