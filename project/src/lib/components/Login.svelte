<script>
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let isDark = false;

  function handleLogin(event) {
    event.preventDefault();
    console.log('Logging in with:', email, password);
  }

  onMount(() => {
    document.getElementById('email-input')?.focus();
  });
</script>

<!-- <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-300 to-purple-500">
  <div class="card w-[400px] bg-white/90 shadow-xl backdrop-blur-lg border border-gray-200">
  </div>

  <p class="absolute bottom-6 text-gray-100 text-sm">เกี่ยวกับเรา | 02-1234567</p>
</div> -->

<div class="card-body">
  <h1 class="text-3xl font-bold text-center text-primary">เข้าสู่ระบบ</h1>

  <form on:submit={handleLogin} class="space-y-4">
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

  <div class="divider">OR</div>

  <button class="btn btn-outline w-full flex items-center gap-2 hover:scale-105 transition-all hover:bg-base-700">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
      <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
      <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
      <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
    <span>Continue with Google</span>
  </button>
  
</div>
