<script>
    export let project;

    function handleClick() {
        if (project.link) {
            window.location.href = project.link;
        }
    }
</script>

<div class="card h-100" on:click={handleClick} role="link" tabindex="0" on:keypress={(e) => e.key === 'Enter' && handleClick()}>
    <div class="card-body d-flex flex-column">
        <div class="image-container mb-3">
            <img src={project.photo.src} alt={project.photo.alt} class="img-fluid rounded">
        </div>
        <h3 class="card-title">{project.title}</h3>
        <p class="card-text flex-grow-1">{project.description}</p>
    </div>
</div>

<style>
    .card {
        border: none;
        background-color: rgb(237, 240, 244);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .card:hover {
        background-color: rgb(227, 230, 234);
        outline: none;
    }

    .image-container {
        position: relative;
        padding-top: 56.25%; /* 16:9 Aspect Ratio */
        overflow: hidden;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h3 {
        color: var(--black);
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--dark-grayish-blue);
        font-size: 1rem;
        overflow-y: auto;
    }
</style>