<script>
    import { Container, Button } from '@sveltestrap/sveltestrap';
    export let personal;
</script>

<section id="intro">
    <Container md>
        <h1>Hi, I'm {personal.first_name}</h1>
        <span>{personal.role} from {personal.location}</span>
        <p class="text-justify">{personal.introduction}</p>
        <div id="btn-wrapper">
            <Button color="dark" href="/about">More Information →</Button>
        </div>
        <div class="divider"></div>
    </Container>
</section>

<style>
    :root {
        --white: #F8F9FA;
        --black: #020617;
        --slate-black: #1E293B;
        --gray: #64748B;
        --light-gray: rgb(203 213 225);
        --dark-grayish-blue: #334155;
        --accent-color: #007bff;
        --font-family: 'Arial, sans-serif';
    }
    .text-justify {
        text-align: justify;
    }

    #intro {
        background-color: var(--white);
        padding: 50px 0;
        text-align: center;
    }

    h1 {
        margin: 0;
        font-size: 2.5em;
        color: var(--black);
        font-family: var(--font-family);
    }

    span {
        font-size: 1.5em;
        color: var(--gray);
        display: block;
        margin-top: 10px;
    }

    p {
        font-size: 1.2em;
        padding-top: 10px;
        padding-bottom: 20px;
        color: var(--dark-grayish-blue);
        max-width: 600px;
        margin: 0 auto;
    }

    #btn-wrapper {
        font-family: var(--font-family);
        margin-top: 20px;
    }

    .divider {
        height: 2px;
        background: var(--accent-color);
        width: 50px;
        margin: 30px auto;
    }

    Button {
        background-color: var(--accent-color);
        border: none;
        padding: 10px 20px;
        font-size: 1em;
        transition: background-color 0.3s ease;
    }

    Button:hover {
        background-color: darken(var(--accent-color), 10%);
    }
</style>