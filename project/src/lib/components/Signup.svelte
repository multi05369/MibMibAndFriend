<script>
	import { fade, fly, slide, scale } from 'svelte/transition';
	import { tick } from 'svelte';

	let name = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let phone = '';
	let address_line1 = '';
	let address_line2 = '';
	let city = '';
	let district = '';
	let county = '';
	let zip_code = '';
	let country = '';
	let error = '';
	let success = '';
	let showSuccess = false;
	let hidePage = false;

	async function registerUser() {
		error = '';
		success = '';
		showSuccess = false;

		if (password !== confirmPassword) {
			error = 'Passwords do not match!';
			return;
		}

		const res = await fetch('http://localhost:5173/api/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				password,
				phone,
				address_line1,
				address_line2,
				city,
				district,
				county,
				zip_code,
				country
			})
		});

		const data = await res.json();
		if (res.ok) {
			success = 'สมัครเสร็จสิ้น!';
			showSuccess = true;
			await tick();

			setTimeout(() => {
				hidePage = true;
				setTimeout(() => {
					window.location.href = '/login';
				}, 1000);
			}, 2000);
		} else {
			error = data.error || 'Something went wrong.';
		}
	}
</script>

<div
	class="bg-base-200 flex min-h-screen items-center justify-center px-4 transition-opacity duration-500 ease-in-out"
	in:fade={{ duration: 500 }}
	out:fade={{ duration: 750 }}
	class:opacity-0={hidePage}
>
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

			<h1 class="text-primary mt-4 text-center text-2xl font-bold" in:slide>สมัครเสร็จสิ้น!</h1>
		</div>
	{:else}
		<div
			class="bg-base-100 w-full max-w-2xl rounded-xl p-6 shadow-xl"
			in:fly={{ y: 20, duration: 500 }}
		>
			<h1 class="text-primary text-center text-3xl font-bold" in:slide>สมัครสมาชิก</h1>
			<h3 class="text-center text-gray-600" in:slide>
				มีบัญชีอยู่แล้ว? <a href="/login" class="link link-hover">Login</a>
			</h3>

			{#if error}
				<div class="alert alert-error mt-4" in:fade>{error}</div>
			{/if}

			{#if success}
				<div class="alert alert-success mt-4" in:fade>{success}</div>
			{/if}

			<form class="mt-6 grid grid-cols-2 gap-4">
				<div class="flex flex-col text-sm font-medium">
					<span class="label-text w-full">ชื่อ</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							class="h-4 w-4 opacity-70"
						>
							<path
								d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
							/>
						</svg>
						<input
							type="text"
							class="w-full"
							bind:value={name}
							required
							placeholder="มานพ พันธ์โคกกรวด*"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">อีเมล</span>
					<label class="input input-bordered form-control flex w-full" in:slide>
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
						<input
							type="email"
							class="flex w-full"
							bind:value={email}
							required
							placeholder="66070000@kmitl.ac.th*"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">รหัสผ่าน</span>
					<label class="input input-bordered form-control flex w-full" in:slide>
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
							placeholder="********"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">ยืนยันรหัสผ่าน</span>
					<label class="input input-bordered form-control w-full" in:slide>
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
							placeholder="********"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">เบอร์โทร</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M2 7h2v7H2zm18 3h2v7h-2zm-4-7.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99M16 17H8V7h8z"
							/></svg
						>
						<input
							type="text"
							class="flex w-full"
							bind:value={phone}
							required
							placeholder="080xxxxxxxx"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">ที่อยู่</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input
							type="text"
							class="input input-bordered w-full"
							bind:value={address_line1}
							required
							placeholder="บ้านเลขที่ ถนน ซอย"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">ที่อยู่ (ถ้ามี)</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input type="text" class="w-full" bind:value={address_line2} />
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">ประเทศ</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input
							type="text"
							class="w-full"
							bind:value={city}
							required
							placeholder="ไทย"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">เขต</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input
							type="text"
							class="w-full"
							bind:value={district}
							required
							placeholder="ลาดกระบัง"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium">
					<span class="label-text">แขวง</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input
							type="text"
							class="w-full"
							bind:value={county}
							required
							placeholder="ลาดกระบัง"
						/>
					</label>
				</div>

				<div class="flex flex-col text-sm font-medium col-span-2">
					<span class="label-text">รหัสไปรษณีย์</span>
					<label class="input input-bordered form-control w-full" in:slide>
						<input
							type="text"
							class="w-full"
							bind:value={zip_code}
							required
							placeholder="10110"
						/>
					</label>
				</div>

				<div class="mb-4"></div>

				<button
					type="button"
					class="btn btn-primary w-full transition-all hover:scale-105 col-span-2"
					on:click={registerUser}
					in:slide
				>
					สมัครเลย
				</button>
			</form>
		</div>
	{/if}
</div>
