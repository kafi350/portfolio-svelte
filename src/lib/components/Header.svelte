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

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>

<header id="header">
    <Navbar id="navbar" color="light" light expand="md" container="md">
        <NavbarBrand href="/">{personal.name}</NavbarBrand>
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav class="ms-auto" navbar>
            {#each navlist as item}
                <NavItem>
                    <NavLink href={item.url}>{item.label}</NavLink>
                </NavItem>
            {/each}
            </Nav>
        </Collapse>
    </Navbar>
</header>

<style>
    #header {
        padding-top: 64px;
        padding-bottom: 64px;
        margin: 0;
        font-family: JetBrainsMono-Bold;
    }

</style>