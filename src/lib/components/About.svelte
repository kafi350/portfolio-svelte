<script>
    import { Container } from '@sveltestrap/sveltestrap';
    export let about;
    export let contact;
</script>

<section id="about">
    <Container md>
        <h1>About Me</h1>
        <div class="divider"></div>
        {#each about.paragraphs.slice(0, -1) as p}
            <p>{p}</p>
        {/each}
        <p style="margin-bottom: 0;">{about.paragraphs[about.paragraphs.length - 1]}</p>

        <div class="email">
            <button on:click={() => window.location.href = `mailto:${contact.email}`}>
                Mail Me
            </button>
        </div>
        
        <h2>Experience</h2>
        <div class="item-list">
            {#each about.experience as e}
                <div class="list-item">
                    <img src={e.photo.src} alt={e.photo.alt}>
                    <div class="info">
                        <span class="primary">{e.company}</span>
                        <span class="secondary">{e.jobTitle}</span>
                        <span class="small">{e.location}</span>
                        <div class="small">
                            <span>{e.startDate} → {e.endDate}</span>
                        </div>
                        <span class="small py-2">{e.description}</span>
                        
                    </div>
                </div>
            {/each}
        </div>

        <h2>Education</h2>
        <div class="item-list">
            {#each about.education as e, i}
                <div class="list-item" style={i === (about.education.length - 1) ? 'border: none' : ''}>
                    <img src={e.photo.src} alt={e.photo.alt}>
                    <div class="info">
                        <span class="primary">{e.school}</span>
                        <span class="secondary">{e.degree}</span>
                        <div class="date">
                            <span>{e.graduationDate}</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <h2>Skills</h2>
        <div class="skills-list">
            {#each about.skills as skill}
                <span class="skill">{skill}</span>
            {/each}
        </div>
    </Container>
</section>

<style>
    :root {
        --primary-color: #333;
        --secondary-color: #555;
        --accent-color: #007bff;
        --light-gray: #e0e0e0;
        --black: #000;
        --slate-black: #2c3e50;
        --dark-grayish-blue: #6c757d;
        --gray: #adb5bd;
        --font-family: 'Arial, sans-serif';
    }

    #about {
        padding: 40px 0;
        background-color: #f9f9f9;
        text-align: center;
        font-family: var(--font-family);
    }

    h1 {
        font-size: 2.5em;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 20px;
    }

    .divider {
        border-top: 1px solid var(--light-gray);
        margin-top: 36px;
        margin-bottom: 36px;
    }

    .email {
        color: var(--black);
        display: block;
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 1.2em;
    }

    h2 {
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 2em;
        color: var(--primary-color);
    }

    p {
        font-size: 1.2em;
        margin-bottom: 24px;
        color: var(--secondary-color);
    }

    .item-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .list-item {
        display: flex;
        align-items: flex-start;
        padding: 16px 0;
        border-bottom: 1px solid var(--light-gray);
    }

    img {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        margin-right: 16px;
    }

    .info {
        flex: 1;
        text-align: left;
    }

    span {
        display: block;
    }

    .primary {
        color: var(--slate-black);
        font-size: 1.2em;
        font-weight: 600;
    }

    .secondary {
        color: var(--dark-grayish-blue);
        font-size: 1em;
        margin-top: 4px;
    }

    .date span {
        color: var(--gray);
        font-family: 'JetBrainsMono-Regular', monospace;
        font-size: 0.9em;
        margin-top: 8px;
    }

    .skills-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }

    .skill {
        background-color: var(--gray);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 1em;
    }

    .email button {
        background-color: black;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .email button:hover {
        background-color: #333;
    }
</style>