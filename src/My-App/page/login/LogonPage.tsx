import { Button, TextField } from "@mui/material"
import { useState } from "react"


const LogonPage = () => {

    const [emaile, setEmaile] = useState("")
    const [password, setPassword] = useState("")

    const validation = () => {

    }

  return (
    <div>

        <TextField type="email" value={emaile} onChange={(e) => setEmaile(e.target.value)}/>
        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button onClick={validation} >შესლა</Button>
    </div>
  )
}

export default LogonPage