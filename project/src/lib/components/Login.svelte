<script>
    import { onMount } from 'svelte';
    let email = '';
    let password = '';
  
    function handleLogin() {
      console.log('Logging in with:', email, password);
    }
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h1 class="text-2xl font-bold text-center mb-4">เข้าสู่ระบบ</h1>
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input type="email" bind:value={email} class="input input-bordered w-full" placeholder="Enter your email" />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input type="password" bind:value={password} class="input input-bordered w-full" placeholder="Enter your password" />
      </div>
      <button class="btn btn-primary w-full mb-2" on:click={handleLogin}>เข้าสู่ระบบ</button>
      <div class="flex justify-between text-sm text-gray-600">
        <a href="#" class="underline">ลืมรหัสผ่าน</a>
        <a href="/signin" class="underline">สร้างบัญชี ?</a>
      </div>
      <div class="divider">OR</div>
      <button class="btn btn-outline w-full">
        <img src="https://developers.google.com/identity/images/g-logo.png" class="w-5 h-5 mr-2" /> continue with google
      </button>
    </div>
    <p class="mt-6 text-gray-600">เกี่ยวกับเรา | 02-1234567</p>
  </div>
  