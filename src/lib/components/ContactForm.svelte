<script>
  let name = '';
  let email = '';
  let message = '';
  let showForm = false;
  
  export let subject = 'Contact Form Submission';
  export let ccEmail = 'ian@bismuthos.com';
  export let transparent = false; // Added transparent flag
 
  function handleSubmit() {
    const mailtoUrl = `mailto:tech@bismuthos.com?cc=${ccEmail}&subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  }
 
  function toggleForm() {
    showForm = !showForm;
  }
 </script>
 
  {#if !showForm}
    <button 
      on:click={toggleForm}
      class="button-secondary-large"
      class:transparent
    >
      Contact Us
    </button>
  {:else}
  <div class="overlay" on:click={toggleForm}></div>
    <div class="form-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-[#11092c] rounded-lg shadow-lg z-50" on:click|stopPropagation>
      <div class="form-header">
        <h2>Contact Us</h2>
        <button on:click={toggleForm} class="close-button">✕</button>
      </div>
      <form on:submit|preventDefault={handleSubmit} class="">
        <div class="form-field">
          <label>Name</label>
          <input type="text" bind:value={name} required />
        </div>
        <div class="form-field">
          <label>Email</label>
          <input type="email" bind:value={email} required />
        </div>
        <div class="form-field">
          <label>Message</label>
          <textarea bind:value={message} required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </div>
  {/if}
 
 <style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999; /* Much higher z-index */
  }

  .form-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; /* Much higher z-index */
    width: 90%;
    max-width: 500px;
    margin: 0; /* Add this */
  }


  .button-secondary-large.transparent {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border-radius: 1rem;
    font-weight: 500;
  }
 
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    color: rgb(147, 51, 234);
  }
 
  .form-field {
    margin-bottom: 1rem;
  }
 
  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    color: rgb(216, 180, 254);
  }
 
  input, textarea {
    width: 100%;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 0.5rem;
    color: white;
  }
 
  .submit-button {
    width: 100%;
    padding: 0.75rem;
    background: rgb(147, 51, 234);
    color: white;
    border: none;
    border-radius: 0.5rem;
    margin-top: 1rem;
  }
 
  .close-button {
    background: none;
    border: none;
    color: rgb(147, 51, 234);
    font-size: 1.25rem;
    cursor: pointer;
  }
 </style>