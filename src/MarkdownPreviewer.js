import React from 'react';
import './MarkdownPreviewer.sass';
import marked from 'marked';

var MarkdownPreviewer = React.createClass({
  getInitialState: function() {
    return {value: '## Hello World'};
  },
  handleText: function() {
    this.setState({value: this.refs.textarea.value});
  },
  previewMarkdown: function() {
    var rawMarkdown = marked(this.state.value, {sanitize: true});
    return { __html: rawMarkdown };

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
          dangerouslySetInnerHTML={this.previewMarkdown()}
        >
        </div>
      </div>
    );
  }
});


export default MarkdownPreviewer;
