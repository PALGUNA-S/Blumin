// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
// import styled from 'styled-components';
// import logo from '../assets/BLUMIN LOGO.png';

// const Links = [
//   { name: 'About', link: '/about' },
//   { name: 'Academia', link: '/academia' },
//   { name: 'Industry', link: '/industry' },
//   { name: 'Contact Us', link: '/contact-us' },
//   { name: 'Register', link: '/register' },
// ];

// const Logo = styled('img')({
//   height: '8vh',
//   objectFit: 'contain',
// });

// const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const location = useLocation();

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: 'rgba(255, 255, 255, 0.8)',
//           backdropFilter: 'blur(10px)',
//           boxShadow: 'none',
//         }}
//       >
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Box display="flex" alignItems="center">
//             <a href="/">
//               <Logo src={logo} alt="Blumin Logo" />
//             </a>
//           </Box>
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
//             {Links.map((item) => (
//               <Typography key={item.name} variant="h6" noWrap sx={{ ml: 2 }}>
//                 <Link
//                   to={item.link}
//                   style={{
//                     color: location.pathname === item.link ? 'blue' : 'black',
//                     textDecoration: 'none',
//                   }}
//                 >
//                   {item.name}
//                 </Link>
//               </Typography>
//             ))}
//           </Box>
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ display: { md: 'none' } }}
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={handleDrawerToggle}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={handleDrawerToggle}
//           onKeyDown={handleDrawerToggle}
//         >
//           <List>
//             {Links.map((item) => (
//               <ListItem button key={item.name} component={Link} to={item.link}>
//                 <ListItemText primary={item.name} sx={{ color: location.pathname === item.link ? 'blue' : 'black' }} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };

// export default Navbar;
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/BLUMIN LOGO.png';

const Links = [
  { name: 'About', link: '/about' },
  { name: 'Academia', link: '/academia' },
  { name: 'Industry', link: '/industry' },
  { name: 'Contact Us', link: '/contact-us' },
  // { name: 'Register', link: '/register' },
];

const Logo = styled('img')({
  height: '8vh',
  objectFit: 'contain',
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <a href="/">
              <Logo src={logo} alt="Blumin Logo" />
            </a>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {Links.map((item) => (
              <Typography key={item.name} variant="h6" noWrap sx={{ ml: 2 }}>
                <Link
                  to={item.link}
                  style={{
                    color: location.pathname === item.link ? '#D31480' : 'black',
                    textDecoration: 'none',
                  }}
                >
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {Links.map((item) => (
              <ListItem button key={item.name} component={Link} to={item.link}>
                <ListItemText primary={item.name} sx={{ color: location.pathname === item.link ? 'blue' : 'black' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
