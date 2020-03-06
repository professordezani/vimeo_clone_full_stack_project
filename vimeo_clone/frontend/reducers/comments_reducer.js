import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_POST } from '../actions/post_session'

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState 
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState
        case RECEIVE_POST:
            return action.post.comments
        default:
            return state;
    }
}

export default commentsReducer