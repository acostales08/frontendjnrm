import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Contact = () => {

  const [member, setMember] = useState([])

  useEffect(()=>{

    axios.get('http://localhost:8000/api/member').then(res => {
      console.log(res)
      setMember(res.data.member)
    })
  }, [] )

  var memberdetails = "";
   memberdetails = member.map(({index, fullname, email, username, password}) => {
    return(
      <tr key={index}>
        <td>{fullname}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{password}</td>
      </tr>
    )
  })

  return (
    <div  name='Services' className='bg-white h-screen w-full '>
      <table>
        <thead>
          <tr>
            <th>fullname</th>
            <th>email</th>
            <th>username</th>
            <th>password</th>
          </tr>
          <tbody>
            {memberdetails}
          </tbody>
        </thead>
      </table>
    </div>
  )
}

export default Contact