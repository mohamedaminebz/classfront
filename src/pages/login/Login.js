import { useState } from "react"

import { login } from "../../services/tasks2.service"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = async () => {
      const token = await login({ email, password })
      console.log('token ',token)
      localStorage.setItem("token", token) 
      window.location='/'
    
    }

return (
    <div>
      <div>
        Email
        <input
          type="email"
          name="email"
          value={email}
          data-test="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          name="password"
          value={password}
          data-test="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button data-test="connect" onClick={handleClick}>Se connecter</button>
      </div>
    </div>
  )
}

export default Login