import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ARTICLE':
      return {
        ...state,
        currentArticle: action.payload
      }
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        message: action.payload
      }
    case 'CHANGE_ARTICLES_DATA':
      return {
        ...state,
        sideArticles: action.payload
      }
    default: 
      return {
        state
      }
    }
}

export default rootReducer