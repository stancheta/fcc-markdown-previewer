import React from 'react';
// import logo from './logo.svg';
import './App.sass';
import MarkdownPreviewer from './MarkdownPreviewer';

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><a href="https://www.freecodecamp.com">FreeCodeCamp</a></h2>
        </div>
        <h1>Markdown Previewer</h1>
        <div className="App-body">
          <MarkdownPreviewer />
        </div>
      </div>
    );
  }
});


export default App;
