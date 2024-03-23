import axios from "axios";
import { useContext, useEffect, useState,useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import JoditEditor from 'jodit-react'

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const [desc, setDesc] = useState("");
  const [photo,setPhoto] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      const description =   <div dangerouslySetInnerHTML={{ __html: res.data.desc }}></div>
      setDesc(description);
      if(res.data.photo){
        setPhoto(res.data.photo);
      }
    };
    getPost();
  }, [path]);
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        photo
      });
      setUpdateMode(false)
    } catch (err) {}
    if(photo){
      const data = new FormData();
      const filename = Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      post.photo = filename;
      try{
        await axios.post("/upload",data);
      }catch(err) {}
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {photo && (
        <img src={PF + photo} alt="" className="singlePostImg" />
      )}

        {updateMode ? (
          <>
          {photo && <button 
            className="singlePostButton"
            onClick={e=>setPhoto(null)}
          >remove</button>
}
        </>
        ) :null }
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="Link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          // <textarea
          //   rows="28"
          //   className="singlePostDescInput"
          //   value={desc}
          //   onChange={(e) => setDesc(e.target.value)}
          // />
          <JoditEditor ref={editor} onChange={newDesc=>setDesc(newDesc)}/>
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
