<script>
    import Login from "$lib/components/Login.svelte";
</script>

<div class="min-h-screen flex flex-col">

    <!-- Main Content -->
    <div class="flex flex-grow bg-purple-500">
        <div class="w-1/2 flex flex-col justify-center items-center text-white">
            <img src="/image/duck4.png" alt="duck" class="w-32">
            <h1 class="text-3xl font-bold">MIBMIB & Friend</h1>
        </div>
        <div class="w-1/2 flex justify-center items-center">
            <div class="bg-base-100 p-8 rounded-lg shadow-lg w-96">
                <Login />
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="bg-base-200 text-center py-4 text-base-600">
        เกี่ยวกับเรา | 02-1234567
    </div>
</div>
