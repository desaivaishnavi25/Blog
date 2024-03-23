import { useContext, useRef, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import "react-quill/dist/quill.snow.css";
import JoditEditor from 'jodit-react'

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const editor = useRef(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    if(file){
      const data = new FormData();
      const filename = Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post("/upload",data);
      }catch(err) {}
    }
    
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <div className="heading">
      <h1>Pen your thoughts...</h1>
        </div>
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt=""/>
        )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          {file?
          <label>
            <i className="writeIcon" onClick={e=>setFile(null)}>&#10005;</i>
          </label>:<label>
            <i className="writeIcon fas fa-plus" ></i>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
          </label>}
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeText">
          <JoditEditor ref={editor} value={desc} onChange={newDesc=>setDesc(newDesc)}/>
          </div>
        <button className="writeSubmit" type="submit" onClick={handleSubmit}>
          Publish
        </button>
      </form>
    </div>

  );
        }

