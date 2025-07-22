import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { toast } from "react-toastify";
import type { UserResponseType } from "../../page/user/UserInterface";
import type { AdminResponseType } from "../../page/admin/AdminInterface";
import type { CourierResponseType } from "../../page/corurier/CourierInterface";

interface LoginProps {
  users: UserResponseType[];
  admins: AdminResponseType[];
  couriers: CourierResponseType[];
  identificiren: (dataProps: UserResponseType | CourierResponseType | AdminResponseType) => void
}

const LogonPage: React.FC<LoginProps> = ({admins, couriers, users, identificiren}) => {

    const [emaile, setEmaile] = useState("")
    const [password, setPassword] = useState("")

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)


    const validation = () => {
      setErrorEmail(!emaile)
      setErrorPassword(!password)
      if (!emaile || !password) {
        toast.error("გთხოვთ შეავსოთ ყველა ველი");
        return;
      }

      const allUser = [...admins, ...couriers, ...users]
      const finden = allUser.find(user => user.email === emaile && user.password === password)

      if(finden) identificiren(finden)
       else toast.error("არასწორი ელ.ფოსტა ან პაროლი")
      
    }

  return (
     <Box
      component="form"
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 6,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault()
        validation()
      }}
    >
      <TextField
        label="Email"
        type="email"
        value={emaile}
        onChange={e => setEmaile(e.target.value)}
        error={errorEmail}
        helperText={errorEmail ? "გთხოვთ შეიყვანოთ ელ.ფოსტა" : ""}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        error={errorPassword}
        helperText={errorPassword ? "გთხოვთ შეიყვანოთ პაროლი" : ""}
        fullWidth
      />
      <Button variant="contained" color="primary" size="large" onClick={validation} type="submit">
        შესვლა
      </Button>
    </Box>
  )

}

export default LogonPage