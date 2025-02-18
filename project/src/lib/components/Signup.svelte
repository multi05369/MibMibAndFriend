<script>
	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let phone = '';
	let address = '';
	let error = '';
	let success = '';

	async function registerUser() {
		error = '';
		success = '';

		if (password !== confirmPassword) {
			error = 'Passwords do not match!';
			return;
		}

		const res = await fetch('http://localhost:5173/api/singup', {
			// ✅ Directly use full URL
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, email, password, phone, address })
		});

		const data = await res.json();
		if (res.ok) {
			success = 'Registration successful!';
		} else {
			error = data.error || 'Something went wrong.';
		}
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gray-100">
	<div class="w-96 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-center text-2xl font-bold">Sign Up</h1>

		{#if error}
			<div class="alert alert-error mb-4">{error}</div>
		{/if}

		{#if success}
			<div class="alert alert-success mb-4">{success}</div>
		{/if}

		<div class="mb-4">
      <label for="name" class="block mb-1">Name</label>
      <input id="name" type="text" class="input input-bordered w-full" bind:value={name} required />
    </div>

		<div class="mb-4">
      <label for="email" class="block mb-1">Email</label>
      <input id="email" type="email" class="input input-bordered w-full" bind:value={email} required />
    </div>

		<div class="mb-4">
      <label for="password" class="block mb-1">Password</label>
      <input id="password" type="password" class="input input-bordered w-full" bind:value={password} required />
    </div>

		<div class="mb-4">
			<label class="mb-1 block">Confirm Password</label>
			<input
				type="password"
				class="input input-bordered w-full"
				bind:value={confirmPassword}
				required
			/>
		</div>

		<div class="mb-4">
      <label for="phone" class="block mb-1">Phone</label>
      <input id="phone" type="text" class="input input-bordered w-full" bind:value={phone} />
    </div>

		<div class="mb-4">
      <label for="address" class="block mb-1">Address</label>
      <textarea id="address" class="textarea textarea-bordered w-full" bind:value={address}></textarea>
    </div>

		<button class="btn btn-primary w-full" on:click={registerUser}>Sign Up</button>
	</div>
</div>
