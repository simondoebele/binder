/* 
   This component uses Vue-specific and React-specific presenters: Sidebar, Summary, Search, Details, Show 
   Therefore it needs to import from alternative paths, depending on the framework. 
   To achieve that, we use require() with a prefix, instead of import.
*/
const PREFIX = window.location.toString().includes("react")
  ? "reactjs"
  : "vuejs";

const Login = require("../" + PREFIX + "/loginPresenter.js").default;

const UserInfo = require("../" + PREFIX + "/userInfoPresenter.js").default;

const Create = require("../" + PREFIX + "/userCreationPresenter.js").default;

const CreationGenre = require("../" +
  PREFIX +
  "/userCreationGenrePresenter.js").default;

const Swipe = require("../" + PREFIX + "/swipePresenter.js").default;

const Details = require("../" + PREFIX + "/bookDetailsPresenter.js").default;

const NavBar = require("../" + PREFIX + "/navBarPresenter.js").default;

const AboutUs = require("../" + PREFIX + "/aboutUsPresenter.js").default;

import Show from "./../vuejs/show.js";

export default function App(props) {
  return (
    <div class="flexParent">
      <div class="mainContent">
        <Show hash="#login">
          <Login model={props.model} />{" "}
        </Show>
        <Show hash="#userinfo">
          <UserInfo model={props.model} />
        </Show>

        <Show hash="#create">
          <Create model={props.model} />{" "}
        </Show>

        <Show hash="#pick">
          <CreationGenre model={props.model} />{" "}
        </Show>

        <Show hash="#swipe">
          <Swipe model={props.model} />
        </Show>

        <Show hash="#details">
          <Details model={props.model} />
        </Show>

        <Show hash="#aboutus">
          <AboutUs model={props.model} />
        </Show>
      </div>
    </div>
  );
}
