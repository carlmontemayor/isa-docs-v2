/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div align="center">
            <h5>About</h5>
            <a href={this.docUrl("doc1", this.props.language)}>
              About Our Intuit Scheduler Application
            </a>
            <a href="https://www.intuit.com/">
              Our Project Sponsor: Intuit Homepage
            </a>
          </div>
          <div align="center">
            <h5>About the Developers</h5>
            <a href="https://www.linkedin.com/in/amandaleecs/">Amanda Lee</a>
            <a href="https://www.linkedin.com/in/ayanakano/">Aya Nakano</a>
            <a href="https://www.linkedin.com/in/nathan-montemayor-408985159/">
              Carl Montemayor
            </a>
            <a href="https://www.linkedin.com/in/gage-shaw-2564a6191/">
              Gage Shaw
            </a>
          </div>
          <div align="center">
            <h5>More</h5>
            <a href={this.docUrl("doc2", this.props.language)}>Resources</a>
            <a href="https://github.com/">GitHub</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
