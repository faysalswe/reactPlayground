import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Scientist</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
}

function Home(props) {
  return <h2>Home {console.log(props)}</h2>;
}

function About(props) {
  return <h2>About {console.log(props)}</h2>;
}

function Users(props) {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2> Scientist {console.log(props)}</h2>

      <div style={{
        display: 'flex'
      }}>
        <ol>
          <li><Link to={`${url}/001`}> Albert Einstein </Link></li>
          <li><Link to={`${url}/002`}> Issac Newton </Link></li>
          <li><Link to={`${url}/003`}> Alan Turing </Link></li>
          <li><Link to={`${url}/004`}> Richard Feynman </Link></li>
          <li><Link to={`${url}/005`}> Werner Heisenberg </Link></li>
          <li><Link to={`${url}/006`}> Tim Berners Lee Link </Link></li>
          <li><Link to={`${url}/007`}> Ken Thompson </Link></li>
          <li><Link to={`${url}/008`}> Edsger W. Dijkstra </Link></li>
        </ol>
        <Switch>
          <Route exact path={path}>
            <h3>Please select scientist.</h3>
          </Route>
          <Route exact path={`${path}/:userId`} component={UserDetail} />
        </Switch>
      </div>
    </div>
  );
}

function UserDetail(props) {
  return (
    <div>
      <h2>User Detail {props.match.params.userId}{console.log(props)}</h2>
      <button onClick={x => { props.history.push('/home') }}> Home </button>
    </div>
  );
}
