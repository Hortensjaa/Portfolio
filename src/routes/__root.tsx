import { AppBar, Toolbar, Typography } from '@mui/material'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppBar>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
          <div>
            <Link to="/" style={{color: 'white', marginRight: "20px"}}> Home </Link>
            <Link to="/about" style={{color: 'white', marginRight: "20px"}}> About me </Link>
            <Link to="/projects" style={{color: 'white', marginRight: "20px"}}> Projects </Link>
          </div>
        </Toolbar>
      </AppBar>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
