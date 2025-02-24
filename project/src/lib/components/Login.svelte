<script>
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { tick } from 'svelte';
  import { user } from '../stores/user'; // Import the store

  let email = '';
  let password = '';
  let error = '';
  let success = '';
  let showSuccess = false;
  let hidePage = false;
  let username = ''; // Store the user's name

  async function handleLogin(event) {
    event.preventDefault();
    error = '';
    success = '';
    showSuccess = false;

    const res = await fetch('http://localhost:5173/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      username = data.user.name; // Get username from response
      success = `สวัสดี ${username}!`; // Display success message
      user.set(data.user)
      showSuccess = true;
      await tick();

      // Delay hiding the page and redirecting
      setTimeout(() => {
        hidePage = true;
        setTimeout(() => {
          window.location.href = '/shop';
        }, 1000);
      }, 2000);
    } else {
      error = data.error || 'Email หรือรหัสผ่านไม่ถูกต้อง!';
    }
  }
</script>

{#if showSuccess}
  <!-- Success message with animation -->
  <div
    class="bg-base-100 flex w-full max-w-md flex-col items-center justify-center rounded-xl p-6 shadow-xl"
    in:fade={{ duration: 500 }}
  >
    <!-- Checkmark SVG Animation -->
    <svg
      class="h-16 w-16 text-green-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      in:scale
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>

    <h1 class="text-primary mt-4 text-center text-2xl font-bold" in:slide>
      {success}
    </h1>
  </div>
{:else}

<div class="card-body">
  <h1 class="text-3xl font-bold text-center text-primary">เข้าสู่ระบบ</h1>

  {#if error}
    <p class="text-red-500 text-center">{error}</p>
  {/if}

  {#if showSuccess}
    <p class="text-green-500 text-center text-xl font-bold">{success}</p>
  {/if}

  <form on:submit={handleLogin} class="space-y-4" class:opacity-0={hidePage}>
    <div class="form-control">
      <label class="label text-base-700">
        <span class="label-text text-lg">Email</span>
      </label>
      <input id="email-input" type="email" bind:value={email} placeholder="Enter your email" class="input input-bordered w-full bg-base-100" required />
    </div>

    <div class="form-control">
      <label class="label text-base-700">
        <span class="label-text text-lg">Password</span>
      </label>
      <input type="password" bind:value={password} placeholder="Enter your password" class="input input-bordered w-full bg-base-100" required />
    </div>

    <button class="btn btn-primary w-full hover:scale-105 transition-all">เข้าสู่ระบบ</button>
  </form>

  <div class="flex justify-between text-sm text-base-700 mt-2">
    <a href="#" class="link link-hover">ลืมรหัสผ่าน?</a>
    <a href="/signup" class="link link-hover">สร้างบัญชี?</a>
  </div>
  <form class="auth-form" method="post" action="?/OAuth2">
    <div class="divider">OR</div>
  
    <button class="btn btn-auth w-full flex items-center gap-2 hover:scale-105 transition-all hover:bg-base-700" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
        <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </svg>
      <span>Continue with Google</span>
    </button>
    </form>
</div>
{/if}
