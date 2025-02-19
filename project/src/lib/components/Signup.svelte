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

		const res = await fetch('http://localhost:5173/api/signup', {
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

<div class="flex min-h-screen items-center justify-center bg-base-200 px-4 transition-opacity duration-500 ease-in-out opacity-100">
	<div class="w-full max-w-md rounded-xl bg-base-100 p-6 shadow-xl">
		<h1 class="text-center text-3xl font-bold text-primary">Sign Up</h1>
		
		{#if error}
			<div class="alert alert-error mt-4">{error}</div>
		{/if}

		{#if success}
			<div class="alert alert-success mt-4">{success}</div>
		{/if}

		<form class="mt-6 space-y-6">
			<label class="form-control w-full">
				<span class="label-text">Name</span>
				<input type="text" class="input input-bordered w-full" bind:value={name} required />
			</label>

			<label class="form-control w-full">
				<span class="label-text">Email</span>
				<input type="email" class="input input-bordered w-full" bind:value={email} required />
			</label>

			<label class="form-control w-full">
				<span class="label-text">Password</span>
				<input type="password" class="input input-bordered w-full" bind:value={password} required />
			</label>

			<label class="form-control w-full">
				<span class="label-text">Confirm Password</span>
				<input type="password" class="input input-bordered w-full" bind:value={confirmPassword} required />
			</label>

			<label class="form-control w-full">
				<span class="label-text">Phone</span>
				<input type="text" class="input input-bordered w-full" bind:value={phone} />
			</label>

			<label class="form-control w-full">
				<span class="label-text">Address</span>
				<textarea class="textarea textarea-bordered w-full" bind:value={address}></textarea>
			</label>

			<div class="mt-4"></div>

			<button type="button" class="btn btn-primary w-full" on:click={registerUser}>Sign Up</button>
		</form>
	</div>
</div>
