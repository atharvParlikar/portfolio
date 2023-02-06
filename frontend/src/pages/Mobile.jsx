import axios from 'axios';
import {useState, useEffect} from 'react'

const Mobile = () => {
  return (
      <div className="bg-gray-600 w-full h-screen font-UbuntuMono text-white text-center">
        <div className="py-40">
          <p>Sorry, my website isn't mobile responseive yet because im too lazy to make it so.</p>
          <p>Visit it from a Desktop or laptop</p>
          <p>Here's a meme till then :=</p>
          <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZYyXvhYDGvELzYoXYpPLMg.png" className='w-10/12 mx-auto mt-10 rounded' alt="meme" />
        </div>
      </div>
  )
}

export default Mobile;
