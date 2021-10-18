import React, { Component } from "react";
import MyButton from "./Button";
import { getRandomColor } from "./RandomColor";
import Skeleton from "react-loading-skeleton";

class QuoteBox extends Component {
  state = {
    quoteObject: {},
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    document.documentElement.style.cssText = `--bg-color: ${getRandomColor()}`;
  }

  fetchData = () => {
    this.setState((state) => {
      state.loading = true;
    });
    console.log(this.state);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          quoteObject: { quote: data.content, author: data.author },
          loading: false,
        });
      });
  };

  handleClick = () => {
    this.fetchData();
  };

  render() {
    const { quoteObject } = this.state;

    console.log(this.state.loading);
    return (
      <>
        <div className="row">
          <div className="col-md-6 col-xs-8 " id="quote-box">
            <p id="text">
              <span id="myquote">&ldquo;</span>
              {quoteObject.quote || <Skeleton />}
            </p>
            <p id="author">
              -
              {quoteObject.author
                ? quoteObject.author
                : "Anonymous" || <Skeleton />}
            </p>

            <div className="button-group">
              {/* <MyButton>
                <i className="fab fa-twitter"></i>
              </MyButton> */}

              <MyButton onClick={this.handleClick} id="new-quote">
                New quote
              </MyButton>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default QuoteBox;
