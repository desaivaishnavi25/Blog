import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
   const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      <div className="postInfo">
      {post.photo && <img className="postImg" src={PF + post.photo} />}
        <Link to={`/post/${post._id}`} className="Link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
       <div className="postDesc" dangerouslySetInnerHTML={{ __html: post.desc}}> 
         </div> 
      </div>
    </div>
  
  );
}
