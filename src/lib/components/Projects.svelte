<script>
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import { Container, Row, Col } from '@sveltestrap/sveltestrap';
    export let projects;
</script>

<section id="projects">
    <Container>
        <h2>Projects</h2>
        <p>Here are a few projects I have worked on recently.</p>
        <Row>
            {#each projects as project}
            <Col lg="6" md="6" sm="12" class="mt-3">
                <ProjectCard {project} />
            </Col>
            {/each}
        </Row>
    </Container>
</section>

<style>
    :root {
        --primary-color: #333;
        --secondary-color: #555;
        --font-family: 'Arial, sans-serif';
    }

    #projects {
        padding: 40px 0;
        background-color: #f9f9f9;
        text-align: center;
        font-family: var(--font-family);
    }

    h2 {
        font-size: 2em;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 20px;
    }

    p {
        font-size: 1.2em;
        color: var(--secondary-color);
        margin-bottom: 40px;
    }

    Row {
        gap: 20px;
    }

    Col {
        display: flex;
        justify-content: center;
    }
</style>