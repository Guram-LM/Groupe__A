import { Link } from "react-router-dom"
import LogautButton from "./LogautButton"
import { List, ListItemButton, ListItemText, Typography } from "@mui/material"

interface SidbarButtonType {
  url: string
  mane: string
}

const SidbarButton = () => {
  const sitbarButt: SidbarButtonType[] = [
    { url: "/admin/adminProfile", mane: "Profile" },
    { url: "/admin/adminList", mane: "Admins" },
    { url: "/admin/userList", mane: "Customers" },
    { url: "/admin/couriersList", mane: "Couriers" },
    { url: "/admin/userRegistration", mane: "Add Customer" },
    { url: "/admin/courierRegistration", mane: "Add Courier" },
    { url: "/admin/shaduli", mane: "Change Schedule" },
  ]

  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2} textAlign="center">
        Admin Panel
      </Typography>
      <List>
        {sitbarButt.map((butt) => (
          <ListItemButton key={butt.url} component={Link} to={butt.url}>
            <ListItemText primary={butt.mane} />
          </ListItemButton>
        ))}
      </List>
      <LogautButton />
    </>
  )
}

export default SidbarButton
