import React from "react";
import { CSSTransition } from "react-transition-group";

import "../../../css/side-drawer.css";

const SideDrawer = props => {
  const markup = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );

  return markup;
};

export default SideDrawer;
