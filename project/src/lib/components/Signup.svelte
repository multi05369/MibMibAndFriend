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

<div
	class="bg-base-200 flex min-h-screen items-center justify-center px-4 opacity-100 transition-opacity duration-500 ease-in-out"
>
	<div class="bg-base-100 w-full max-w-md rounded-xl p-6 shadow-xl">
		<h1 class="text-primary text-center text-3xl font-bold">สมัครสมาชิก</h1>
		<h3 class="text-center text-gray-600">มีบัญชีอยู่แล้ว? <a href="/login" class="link link-hover">Login</a></h3>

		{#if error}
			<div class="alert alert-error mt-4">{error}</div>
		{/if}

		{#if success}
			<div class="alert alert-success mt-4">{success}</div>
		{/if}

		<form class="mt-6 space-y-6">
			<label class="input input-bordered form-control w-full">
				<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    class="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
				<input type="text" class="flex w-full" bind:value={name} required placeholder="Name*"/>
			</label>


			<label class="input input-bordered form-control flex w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-4 w-4 opacity-70"
				>
					<path
						d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
					/>
					<path
						d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
					/>
				</svg>
				<input type="email" class="flex w-full" bind:value={email} required placeholder="Email*" />
			</label>

			<div class="mt-4"></div>

			<label class="input input-bordered form-control flex w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-4 w-4 opacity-70"
				>
					<path
						fill-rule="evenodd"
						d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					type="password"
					class="flex"
					bind:value={password}
					required
					placeholder="Password*"
				/>
			</label>

			<div class="mt-4"></div>

			<label class="input input-bordered form-control w-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
					fill="currentColor"
					class="h-4 w-4 opacity-70"
				>
					<path
						fill-rule="evenodd"
						d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					type="password"
					class="flex w-full"
					bind:value={confirmPassword}
					required
					placeholder="Confirm Password*"
				/>
			</label>


			<label class="input input-bordered form-control w-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 7h2v7H2zm18 3h2v7h-2zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z"/></svg>
				  
				  
				<input type="text" class="flex w-full" bind:value={phone} required placeholder="Phone number*" />
			</label>


			<label class="form-control w-full">
				<textarea class="textarea textarea-bordered w-full" bind:value={address} placeholder="Address*"></textarea>
			</label>

			<div class="mt-4"></div>

			<button type="button" class="btn btn-primary w-full hover:scale-105 transition-all" on:click={registerUser}>สมัครเลย</button>
		</form>
	</div>
</div>
