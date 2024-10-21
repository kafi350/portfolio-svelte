<script>
    import { Container } from '@sveltestrap/sveltestrap';
    import emailjs from 'emailjs-com';
    export let contact;
    
    let from_name = '';
    let from_email = '';
    let message = '';

    const ONE_DAY = 24 * 60 * 60 * 1000; // One day in milliseconds

    function canSendEmail() {
        const lastSent = localStorage.getItem('lastSent');
        if (!lastSent) return true;
        const now = new Date().getTime();
        return now - lastSent > ONE_DAY;
    }

    async function sendEmail() {
        if (!canSendEmail()) {
            alert('You have already sent a message today. Please try again tomorrow.');
            return;
        }

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const userID = import.meta.env.VITE_EMAILJS_USER_ID;


        const templateParams = {
            from_name,
            from_email,
            message
        };

        try {
            const response = await emailjs.send(serviceID, templateID, templateParams, userID);
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message was sent successfully!');
            localStorage.setItem('lastSent', new Date().getTime());
            location.reload();
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        }
    }
</script>

<section id="contact">
    <Container md>
        <h1>Contact</h1>
        <div class="divider"></div>
        <p>If you'd like to get in touch, you can reach me using the following methods.</p>
        
        <!-- Email Section -->
        <div class="contact-method-wrapper">
            <a href="mailto:{contact.email}" target="_blank">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
                    </svg>
                </div>
            </a>
            <div class="contact-text-wrapper">
                <h2>Email</h2>
                <p>{contact.email.split('@')[0]}</p>
            </div>
        </div>
    
        <!-- Github Section -->
        <div class="contact-method-wrapper">
            <a href={contact.github} target="_blank">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
                    </svg>
                </div>
            </a>
            <div class="contact-text-wrapper">
                <h2>Github</h2>
                <p>{contact.github.split('https://github.com/')[1]}</p>
            </div>
        </div>
    
        <!-- LinkedIn Section -->
        <div class="contact-method-wrapper">
           <a href={contact.linkedin} target="_blank">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3A2.99 2.99 0 0 1 22 6v12a2.99 2.99 0 0 1-3 3H5a2.99 2.99 0 0 1-3-3V6a2.99 2.99 0 0 1 3-3h14M8.5 7A1.5 1.5 0 0 0 7 8.5A1.5 1.5 0 0 0 8.5 10A1.5 1.5 0 0 0 10 8.5A1.5 1.5 0 0 0 8.5 7m0 3.5A2 2 0 0 1 6.5 9A2 2 0 0 1 8.5 7A2 2 0 0 1 10.5 9A2 2 0 0 1 8.5 10.5M6 17h2v-5H6v5m3-5v5h2v-3.5c0-.83.67-1.5 1.5-1.5S14 13.67 14 14.5V17h2v-3.5c0-1.38-1.12-2.5-2.5-2.5S11 12.12 11 13.5V17h-2v-5H9z"/>
                    </svg>
                </div>
            </a>
            <div class="contact-text-wrapper">
                <h2>LinkedIn</h2>
                <p>{contact.linkedin.split('https://www.linkedin.com/in/')[1]}</p>
            </div>
        </div>
    
        <!-- Contact Form -->
        <form class="contact-form" on:submit|preventDefault={sendEmail}>
            <div class="form-group">
                <input type="text" placeholder="Your Name" bind:value={from_name} required />
            </div>
            <div class="form-group">
                <input type="email" placeholder="Your Email" bind:value={from_email} required />
            </div>
            <div class="form-group">
                <textarea placeholder="Your Message" bind:value={message} required></textarea>
            </div>
            <button type="submit" class="btn-submit">Send Message</button>
        </form>
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

    #contact {
        padding: 40px 0;
        background-color: var(--white);
        text-align: left;
        font-family: var(--font-family);
    }

    h1 {
        font-size: 2.5em;
        font-weight: 600;
        color: var(--black);
        margin-bottom: 20px;
    }

    .divider {
        border-top: 1px solid var(--light-gray);
        margin-top: 36px;
        margin-bottom: 36px;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 24px;
        color: var(--dark-grayish-blue);
    }

    .contact-method-wrapper {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    .icon-wrapper {
        margin-right: 16px;
        cursor: pointer;
    }

    .icon-wrapper svg {
        width: 24px;
        height: 24px;
        fill: var(--black);
    }

    .contact-text-wrapper {
        text-align: left;
    }

    h2 {
        font-size: 1.5em;
        color: var(--black);
        margin-bottom: 8px;
    }

    a {
        color: var(--black);
        text-decoration: none;
        font-size: 1.2em;
        transition: color 0.3s ease;
    }

    a:hover {
        color: var(--accent-color);
    }

    /* Contact Form */
    .contact-form {
        margin-top: 40px;
        text-align: left;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group input,
    .form-group textarea {
        width: 100%;
        max-width: 600px;
        padding: 10px;
        font-size: 1.1em;
        border: 1px solid var(--light-gray);
        border-radius: 5px;
    }

    .btn-submit {
        padding: 10px 20px;
        background-color: var(--black);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-submit:hover {
        background-color: var(--accent-color);
    }
</style>