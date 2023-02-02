import React from "react";
import store from "../../store/reducer";
import { Provider } from "react-redux";
import FilterNavigation from "./Filter/FilterNavigation";
import classes from "./OnThoughtLayout.module.css";
import Header from "./Header/Header";
import Notes from "./NotesContainer/Notes";
import FooterNav from "./Footer/FooterNav";
import Modal from "./NewNote/Modal";

function OnThoughtLayout() {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <Header />
        <FilterNavigation />
        <Notes />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FooterNav />
        </div>
        <Modal />
      </div>
    </Provider>
  );
}

export default OnThoughtLayout;
