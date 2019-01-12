import * as types from '../constants/ActionTypes';
import * as firebase from '../firebase';
import store from '../index';

export function addTodo(text) {
    addTodotoFirebase(text);
    return { type: types.ADD_TODO, text }
}

function addVisualTodo(text) {
    return { type: types.ADD_TODO, text }
}

export function deleteTodo(id, text) {
    deleteTodoFromFirebase(text)
    return ({ type: types.DELETE_TODO, id })
}

export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })

export function SubscribeToFirebase() {

    firebase.default.db.ref('todos').orderByKey().on('child_added', snapshot => {
        let text = snapshot.val()['text'];

        if (snapshot.val()['manual'] === false) {
            store.dispatch(addTodo(text));
        }
    });
}

export function getInitialTodosFromFirebase() {
    firebase.default.db.ref('todos').orderByKey().once('value').then(snapshot => {
        let todos = snapshot.val()
        Object.keys(todos).forEach(id => {
            store.dispatch(addVisualTodo(todos[id]['text']));
        })
    });
}

export function deleteTodoFromFirebase(activity) {
    firebase.default.db.ref('todos').orderByChild("text").equalTo(activity).once('value').then(snapshot => {
        const id = Object.keys(snapshot.val())[0]
        firebase.default.db.ref('todos/' + id).remove()
    });
}

export function addTodotoFirebase(text) {
    firebase.default.db.ref('todos').push(
        {
            text: text,
            manual: true
        }
    )
}


