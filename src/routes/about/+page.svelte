<script>
    import DATA from '../../data/data.js';
    import About from '$lib/components/About.svelte';
</script>

<svelte:head>
    <title>{DATA.PERSONAL.name} | About</title>
    <meta name="description" content="{DATA.PERSONAL.name} - {DATA.PERSONAL.role} specializing in {DATA.SKILLS.specializations}. View my projects and contact info.">
</svelte:head>

<About about={DATA.ABOUT} contact={DATA.CONTACT} />