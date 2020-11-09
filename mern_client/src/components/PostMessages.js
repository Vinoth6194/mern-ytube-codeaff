import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/postMessage";

const PostMessages = (props) => {
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);
  return <div>FrompostMessages</div>;
};
const mapStateToProps = (state) => ({
  postMessageList: state.postMessage.list,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(PostMessages);
