import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./write.css";

export default function Write() {
  
  const history = useHistory();
  const [publish, setUser] = useState({
    title: "",
    description: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...publish,
      [name]: value,
    });
    console.log(e.target);
  };
  const post = () => {
    let data = sessionStorage.getItem("userdata");
    data = JSON.parse(data);
    
    const { title, description} = publish;
    if (title && description) {
      axios.post("http://localhost:3002/write", publish).then((res) => {
        alert(res.data.message);
        // history.push("/login");
      });
    } else {
      alert("Invalid Input");
    }
  };

  const imgAdd = () => {};
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            name="imgad"
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onClick={imgAdd}
          />
          <input
            name="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            value={publish.title}
            autoFocus={true}
            onChange={handelChange}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            name="description"
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={publish.description}
            // autoFocus={true}
            onChange={handelChange}
          />
        </div>
        <button className="writeSubmit" onClick={post}>
          Publish
        </button>
      </div>
    </div>
  );
}
