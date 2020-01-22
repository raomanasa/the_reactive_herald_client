import React from "react";
import {createArticle} from "../modules/articleData"


const CreateArticle = () => {

  submitArticleHandler = async() => {
    const {title,body} = this.state
    let response = await submitArticle(title,body)

    if (response.status ===200){
      thi

      }
    }

  }
  return (
  <div>
  <form id="article-form" onSubmit={createArticle}>
    <label>Title:</label>
    <input name="title" type="text" id="title"></input>

    <label>Body:</label>
    <input name="body" type="text-area" id="body"></input>

    <button id="submit">Submit</button>
  </form>
  {responseMessage}
  </div>
  )
}

export default CreateArticle;

