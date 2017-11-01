import React from 'react';
import './App.css';

class Typer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      chars: 123,
      postfix: ' are for the boys'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

  }

  componentDidMount () {
    try {
      window.twttr.widgets.load();
    } catch (err) {
      // ignore errors
    }
  }

  _onChange (text) {
    this.setState({
      text: text
    })
  }

  _onSelectChange (newPostfix) {
    this.setState({
      postfix: newPostfix
    })
  }

  handleChange(e){
    const text = e.target.value;
    console.log(text);
    this._onChange(text);
  }

  handleSelectChange(e){
    const postfix = e.target.value;
    this._onSelectChange(postfix);
  }

  getText(){
    return this.state.text + this.state.postfix

  }

  render () {
    return (
      <div>
        <h1>{this.state.postfix}</h1>
        <input type="text" placeholder="type here" onChange={this.handleChange} />
        <br />
        <select value={this.state.postfix} onChange={this.handleSelectChange}>
          <option value=" are for the boys">are for the boys</option>
          <option value=" are for the gals">are for the gals</option>
          <option value=" are for the fam">are for the fam</option>
          <option value=" are for the dogs">are for the dogs</option>
          <option value=" are for the chickens">are for the chickens</option>
          <option value=" are for wine">are for wine</option>
        </select>
        <br />
        <textarea rows="10" value={this.getText()} readOnly="true"></textarea>
        <br />
        <a id="tweet" href={"https://twitter.com/intent/tweet?text=" + this.getText() +"by: http%3A%2F%2Ffortheboys.fun%2Ftweet%2F"} >Tweet</a>
        <br />
        <p>created by <a href="michaelnyu.me">Michael Yu</a></p>
      </div>
    )
  }
}

export default Typer;
