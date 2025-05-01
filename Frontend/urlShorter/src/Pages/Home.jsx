import React from "react";
import axios from 'axios'
import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const Home = () => {
    const navigate=useNavigate();
    const inputUrl=useRef();
    const formRef=useRef();

   async function handleSubmit(e){
    let shortId='';
    e.preventDefault();
     try {
      const response = await axios.post("http://localhost:5500/url/add", {
        url:inputUrl.current.value
      },{withCredentials: true,});
      shortId=response.data.shortId;
      console.log(response);
      
     } catch (error) {
      if(error.response?.data.message==='Unauthorized')
      {
        toast.error("Unauthorized")
        navigate('/');
      }
      
      console.log(error);

      
     }
     formRef.current.reset();
     
     
    let h1=document.createElement('h1');
    let element=document.getElementById('container');
    element.innerText=''
    const data=`http://localhost:5500/url/${shortId}`;
    h1.innerText=data;
    h1.style.color='red'
    element.appendChild(h1);

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          URL Shortener
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit} ref={formRef}>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Enter a long URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com/very/long/link"
              ref={inputUrl}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            onSubmit={handleSubmit}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition"
          >
            Generate Short URL
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-500" id="container">
          After generating, your short URL will appear here.
        </div>
      </div>
    </div>
  );
};

export default Home;
