<script>
    import DATA from '../../data/data.js';
    import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
    <title>{DATA.PERSONAL.name} | Contact</title>
    <meta name="description" content="{DATA.PERSONAL.name} - {DATA.PERSONAL.role} specializing in {DATA.SKILLS.specializations}. View my projects and contact info.">
</svelte:head>

<Contact contact={DATA.CONTACT} />