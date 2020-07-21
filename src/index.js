import React, {Component} from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
  { "title": "Atlas Shrugged","pages":1000},
  { "title": "Angels Flight", "author":"Michael Connelly","pages":495}
]

/* class FavoriteColorForm extends Component{
  state = {value: ''}

  newColor = e => 
    this.setState({ value: e.target.value })
  
  submit = e => {
    console.log(`New Color: ${this.state.value}`)
    e.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.submit}>
        <label>Favorite Color:
          <input 
            type="color" 
            onChange={this.newColor}/>
        </label>
        <button>Submit</button>
      </form>
    )
  }
} */

render(
  <Library books={bookList}/>,
  document.getElementById('root')
)