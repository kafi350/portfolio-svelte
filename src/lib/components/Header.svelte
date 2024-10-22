<script>
    import {
      Collapse,
      NavbarToggler,
      NavbarBrand,
      Nav,
      Navbar,
      NavItem,
      NavLink,
    } from '@sveltestrap/sveltestrap';
  
    export let navlist;
    export let personal;
  
    let isOpen = false;
  
    function toggleNavbar() {
      isOpen = !isOpen;
    }
  
    function closeNavbar() {
      isOpen = false;  // Close the menu when a nav item is clicked
    }
  </script>
  
  <header id="header">
    <Navbar id="navbar" color="light" light expand="md" container="md">
      <NavbarBrand href="/">{personal.name}</NavbarBrand>
      <NavbarToggler on:click={toggleNavbar} />
      <Collapse {isOpen} navbar expand="md">
        <Nav class="ms-auto" navbar>
          {#each navlist as item}
            <NavItem>
              <NavLink href={item.url} on:click={closeNavbar}>
                {item.label}
              </NavLink>
            </NavItem>
          {/each}
        </Nav>
      </Collapse>
    </Navbar>
  </header>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap');
    
    #header {
      padding-top: 64px;
      padding-bottom: 64px;
      margin: 0;
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
  