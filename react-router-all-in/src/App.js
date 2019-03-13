import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
import { push } from "connected-react-router";

const Shopping = () => <p>Shopping</p>;
const Announce = () => <p>Announce</p>;

class App extends Component {
  goTo = route => {
    this.props.dispatch(push(route.url));
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/"> Annonces1 </Link>{" "}
          </li>
          <li>
            <Link to="/shopping"> Shopping </Link>
          </li>
        </ul>

        <div>
          <button onClick={() => this.goTo({ url: "/shopping" })}>
            Click here to go shopping ! (if you can...)
          </button>
        </div>

        <div style={{ padding: "150px" }}>
          <Route exact path="/" component={Announce} />
          <Route path="/shopping" component={Shopping} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  location: store.router.location
});

export default connect(mapStateToProps)(App);
