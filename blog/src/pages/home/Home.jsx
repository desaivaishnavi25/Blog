import React, { useEffect,useState } from 'react';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import './home.css';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Newsletter } from '../../components/newsletter/Newsletter';


export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(()=>{
      const fetchPosts = async ()=>{
        const res = await axios.get("/posts"+search)
        setPosts(res.data)
      };
      fetchPosts();
  },[search]);

  return (
    <>
    <Header/>

        <div className='home'>
        <Posts posts={posts}/>
    <Sidebar/>
    </div>
    <Newsletter/>
    </>

  )
}
