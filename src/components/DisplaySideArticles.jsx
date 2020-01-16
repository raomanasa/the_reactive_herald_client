import React from 'react'

const DisplaySideArticles = ({ sideArticles }) => {
  return (
    <div>
      <div id="side-articles-div" key={sideArticles[0].id}>
        <p id="article-title">{sideArticles[0].title}</p>
        <p id="article-body">{sideArticles[0].body}</p>
      </div>
    </div>
  )
}

export default DisplaySideArticles
