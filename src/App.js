import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUpMentorMain from "./components/sign-up-mentor/sign-up-mentor-main/sign-up-mentor-main";
import SignUpMentorProfileMain from "./components/sign-up-mentor-profile/sign-up-mentor-profile-main/sign-up-mentor-profile-main";
import SignUpMentorStatusMain from "./components/sign-up-mentor-status/sign-up-mentor-status-main/sign-up-mentor-status-main";
import SignUpMentorSocialsMain from "./components/sign-up-mentor-socials/sign-up-mentor-socials-main/sign-up-mentor-socials-main";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/mentor-signup" component={SignUpMentorMain} />
        <Route
          exact
          path="/mentor-signup-profile"
          component={SignUpMentorProfileMain}
        />
        <Route
          exact
          path="/mentor-signup-status"
          component={SignUpMentorStatusMain}
        />
        <Route
          exact
          path="/mentor-signup-social"
          component={SignUpMentorSocialsMain}
        />
        {/* <Route component /> */}
      </Switch>
    </div>
  );
}

export default App;
