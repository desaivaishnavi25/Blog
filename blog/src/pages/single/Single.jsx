import React from 'react'
import './single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import { Slider } from '../../components/slider/Slider';

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Slider/>
        </div>
  )
}
