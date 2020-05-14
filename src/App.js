import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import ProfileComponent from './components/profile/profile';
import HomeComponent from './components/home/home';

function App() {
  return (
      // <Router>
      //   <React.Fragment>
      //     <Route exact path="/profile" component={ProfileComponent} />
      //     <Route exact path="/" component={HomeComponent} />
      //     {/* <Route exact path={} /> */}
      //   </React.Fragment>
      // </Router>
      // <ProfileComponent />
      <HomeComponent />
  );
}

export default App;
