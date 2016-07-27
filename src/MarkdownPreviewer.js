import React from 'react';
import './MarkdownPreviewer.sass';

var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return {value: 'Hello World'};
  },
  handleText: function() {
    this.setState({value: this.refs.textarea.value});
  },
  setValue: function() {

  },
  render: function() {
    return (
      <div className="MarkdownPreviewer">
        <textarea
          onChange={this.handleText}
          ref="textarea"
          defaultValue={this.state.value}></textarea>
        <div
          className="previewer"
          >{this.state.value}
        </div>
      </div>
    );
  }
});


export default MarkdownPreviewer;
