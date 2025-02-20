<script>
  import { onMount } from 'svelte';

  let email = '';
  let password = '';

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
      <label class="label text-gray-700">
        <span class="label-text text-lg">Email</span>
      </label>
      <input id="email-input" type="email" bind:value={email} placeholder="Enter your email" class="input input-bordered w-full bg-gray-100" required />
    </div>

    <div class="form-control">
      <label class="label text-gray-700">
        <span class="label-text text-lg">Password</span>
      </label>
      <input type="password" bind:value={password} placeholder="Enter your password" class="input input-bordered w-full bg-gray-100" required />
    </div>

    <button class="btn btn-primary w-full hover:scale-105 transition-all">เข้าสู่ระบบ</button>
  </form>

  <div class="flex justify-between text-sm text-gray-700 mt-2">
    <a href="#" class="link link-hover">ลืมรหัสผ่าน?</a>
    <a href="/signup" class="link link-hover">สร้างบัญชี?</a>
  </div>

  <div class="divider">OR</div>

  <button class="btn btn-outline w-full flex items-center gap-2 hover:bg-gray-200">
    <img src="https://developers.google.com/identity/images/g-logo.png" class="w-5 h-5" alt="Google"/>
    <span>Continue with Google</span>
  </button>
</div>
