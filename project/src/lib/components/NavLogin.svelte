<script>
  import { onMount } from 'svelte';

  let logo = ''; // Replace with actual logo path
</script>

<nav class="flex items-center justify-between px-6 py-4 bg-white border-b-2 border-purple-500">
  <!-- Logo and Brand Name -->
  <div class="flex items-center space-x-2">
    <div class="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-md">
      <img src={logo} alt="Logo" class="w-full h-full object-cover rounded-md" />
    </div>
    <div>
      <span class="font-bold text-lg text-black">MIB</span>
      <span class="text-lg font-bold text-purple-600">MIB</span>
      <span class="text-sm text-purple-400">&Friend</span>
    </div>
  </div>
</nav>
