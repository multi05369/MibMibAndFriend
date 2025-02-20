<script>
	import { fade, fly, slide } from 'svelte/transition';
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

<div
	class="bg-base-200 flex min-h-screen items-center justify-center px-4 opacity-100 transition-opacity duration-500 ease-in-out"
	in:fade={{ duration: 500 }}
>
	<div class="bg-base-100 w-full max-w-md rounded-xl p-6 shadow-xl" in:fly={{ y: 20, duration: 500 }}>
		<h1 class="text-primary text-center text-3xl font-bold" in:slide>สมัครสมาชิก</h1>
		<h3 class="text-center text-gray-600" in:slide>มีบัญชีอยู่แล้ว? <a href="/login" class="link link-hover">Login</a></h3>

		{#if error}
			<div class="alert alert-error mt-4" in:fade>{error}</div>
		{/if}

		{#if success}
			<div class="alert alert-success mt-4" in:fade>{success}</div>
		{/if}

		<form class="mt-6 space-y-6">
			<label class="input input-bordered form-control w-full" in:slide>
				<input type="text" class="flex w-full" bind:value={name} required placeholder="Name*"/>
			</label>

			<label class="input input-bordered form-control flex w-full" in:slide>
				<input type="email" class="flex w-full" bind:value={email} required placeholder="Email*" />
			</label>

			<label class="input input-bordered form-control flex w-full" in:slide>
				<input type="password" class="flex" bind:value={password} required placeholder="Password*" />
			</label>

			<label class="input input-bordered form-control w-full" in:slide>
				<input type="password" class="flex w-full" bind:value={confirmPassword} required placeholder="Confirm Password*" />
			</label>

			<label class="input input-bordered form-control w-full" in:slide>
				<input type="text" class="flex w-full" bind:value={phone} required placeholder="Phone number*" />
			</label>

			<label class="form-control w-full" in:slide>
				<textarea class="textarea textarea-bordered w-full" bind:value={address} placeholder="Address*"></textarea>
			</label>

			<div class="mb-4"></div>

			<button type="button" class="btn btn-primary w-full hover:scale-105 transition-all" on:click={registerUser} in:slide>
				สมัครเลย
			</button>
		</form>
	</div>
</div>
