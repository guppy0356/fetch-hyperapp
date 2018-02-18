import { h, app } from "hyperapp"
import 'whatwg-fetch'
import 'babel-polyfill'

const state = {
  books: []
}

const actions = {
  updateBooks: (books) => (state, actions) => ({books}),
  fetchBooks: () => (state, actions) => {
    fetch(process.env.API + '/books.json')
      .then((response) => response.json())
      .then(actions.updateBooks)
  }
}

const view = (state, actions) => (
  <div class="container">
    <div class="row">
      <div class="section">
        <div class="row">
          <h1 class="pink-text text-accent-1 col s12">We have {state.books.length} books</h1>
          <div class="col s12 m6">
            <a class="btn" onclick={() => {actions.fetchBooks()}}>Fetch books<i class="material-icons right">file_download</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const main = app(state, actions, view, document.getElementById('app'))
