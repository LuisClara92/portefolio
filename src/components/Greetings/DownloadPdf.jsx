import React, { Component } from "react";
import styled from 'styled-components';

const DownloadPdf = styled.a`
    color: #fff;
    text-decoration: none;
    display: inline-block;
`

class DownloadLink extends Component {
  render() {
    return (
      <form method="get" action={this.props.src}>
        <DownloadPdf href={this.props.src} download>
          <text type="submit">{this.props.children}</text>
        </DownloadPdf>
      </form>
    );
  }
}

export default DownloadLink;
