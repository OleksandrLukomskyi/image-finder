import React, {Component} from "react";
import css from './Searchbar.module.css';

export class Searchbar extends Component {
   state = {
      query: ''
   };



handleSubmit = e => {
  e.preventDefault();
  this.props.onSubmit(this.state.query);
  this.setState({query: ''})
};

handleChange = (e) => {
  this.setState({query: e.target.value});
}

render() {
  return (
    <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.query}
      onChange={this.handleChange}
    />
  </form>
</header>
  )
}
}