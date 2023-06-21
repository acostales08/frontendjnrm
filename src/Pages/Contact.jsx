import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {


  const [data, setData] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)


  const updateData = async() => {
    try {
      const response = await axios.post('http://localhost:8000/api/member${id}', newData);
      const updatedData = data.map(items.id === id? response.data:item)

      setData(updatedData)
    } catch (error) {
      setError(error)
    }
  }
  return(
    <div className="flex justify-center items-center h-screen w-full">
      <div className="border border-black w-[500px] h-[600px]">
        <div className="h-[80px] w-full border border-black">
          <h3 className="text-1xl text-center">Edit</h3>
        </div>
          <form onSubmit={handleSubmit}>
            <input type="text" className="" placeholder='username' value={username} onChange={setUsername(e.target.value)}/>
            <input type="text" className="" placeholder='password' value={password} onChange={setPassword(e.target.value)}/>
            <button className='px-2 py-1 border border-black'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact