import React from "react";
import SinglePost from "../../components/singlepost/SinglePost";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      {/* <Sidebar /> */}
    </div>
  );
}
