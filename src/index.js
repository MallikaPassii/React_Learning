import React, {Component} from 'react'
import { render } from 'react-dom'

let bookList = [
  { "title": "Atlas Shrugged","pages":1000},
  { "title": "Angels Flight", "author":"Michael Connelly","pages":495}
]

const Book = ({title="No Autor Provided",author="No Author provided",pages=0, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>Written by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmarks today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () =>
  <div>
    <p>The library is hiring. Please visit www.abc.com for more info.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring. Please visit later for more info.</p>
  </div>

class Library extends Component {

  static defaultProps = {
    books: [
      {"title":"Tahoe Tales","author":"Chet Whitley","pages":1000}
    ]
  }

  state = { 
    open: true, 
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
  }

  componentDidMount(){
    this.setState = ({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
      .catch(e => console.log('There is an issue with getting the information' , e))
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render(){
    const {books} = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading
          ? "Loading..."
          : <div>
            {this.state.data.map(product => {
              return(
                <div>
                  <h3>Libaray Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} />
                </div>
              )
            })}
          </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed} >Change the state</button>
        {books.map(
          (book, i) => 
          <Book
            key={i} 
            title={book.title} 
            author={book.author} 
            pages={book.pages} 
            freeBookmark={this.state.freeBookmark}
            />
        )}
      </div>
    )
  }
}

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