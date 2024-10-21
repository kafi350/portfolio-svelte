<script>
    import DATA from '../data/data.js';
    import '../styles/global.css';
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="layout">
    <div class="header">
        <Header navlist={DATA.NAVLIST} personal={DATA.PERSONAL} />
    </div>
    <div class="content"> 
        <slot />
    </div>
    <div class="footer">
        <Footer meta={DATA.META} personal={DATA.PERSONAL} contact={DATA.CONTACT} />
    </div>
</div>

<style>
    .layout {
        width: 60%;
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        .layout {
            width: 90%;
        }
    }
</style>