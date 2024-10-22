<script>
    export let interests;
</script>

<style>
    .section {
        margin-bottom: 2rem;
    }
    h2 {
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 20px;
        font-size: 2em;
        color: var(--primary-color);
    }
    .section h2 {
        margin-bottom: 1rem;
    }
    .medium-posts {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .card {
        background-color: var(--white);
        border: 1px solid var(--light-gray);
        border-radius: 8px;
        padding: 1rem;
        width: calc(33.333% - 1rem);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    .card a {
        text-decoration: none;
        color: var(--black);
        font-weight: bold;
    }
    .hobbies-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
    }
    .hobby {
        background-color: var(--gray);
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 1em;
    }
</style>

<div class="section">
    <h2>Medium Posts</h2>
    <div class="medium-posts">
        {#each interests.medium_posts as post}
            <div class="card">
                <div class="cart-title">
                    <a href={post.url} target="_blank">{post.title}</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<div class="section">
    <h2>Hobbies</h2>
    <div class="hobbies-list">
        {#each interests.hobbies as hobby}
            <span class="hobby">{hobby}</span>
        {/each}
    </div>
</div>