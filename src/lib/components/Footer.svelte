<script>
    import { Container } from '@sveltestrap/sveltestrap';
    export let meta;
    export let personal;
    export let contact;
</script>

<footer id="footer">
    <Container md>
        <div class="divider"></div>
        <div class="content-wrapper">
            <div class="copyright-wrapper">
                <p>© {meta.creation_year} / 
                    <a href={contact.github}>
                        {personal.name}
                    </a>
                </p>
            </div>
            <div class="src-link-wrapper">
                <a class="src-link" href={meta.src}>View Source</a>
            </div>
        </div>
    </Container>
</footer>

<style>
    #footer {
        font-size: 12px;
        padding-bottom: 36px;
    }

    .content-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .copyright-wrapper {
        width: 70%;
    }

    .src-link-wrapper {
        width: 30%;
        text-align: right;
    }

    p {
        font-family: JetBrainsMono-Regular;
        margin: 0;
    }

    a {
        font-family: JetBrainsMono-Regular;
        color: var(--dark-grayish-blue);
        text-decoration: none;
    }

    .src-link {
        font-family: JetBrainsMono-Regular;
        color: var(--dark-grayish-blue);
        text-decoration: none;
    }
</style>