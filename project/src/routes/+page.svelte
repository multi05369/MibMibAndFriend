<script>
    import Login from "$lib/components/Login.svelte";
</script>

<div class="min-h-screen flex flex-col">
    <!-- Top Section -->
    <div class="bg-white py-4 px-8 flex justify-between items-center">
        <div class="flex items-center">
            <img src="/image/duck4.png" alt="duck" class="h-10">
            <h1 class="text-xl font-bold text-purple-600 ml-2">MIBMIB & Friend</h1>
        </div>
        <h1 class="text-lg font-bold">เข้าสู่ระบบ</h1>
    </div>

    <!-- Main Content -->
    <div class="flex flex-grow bg-purple-500">
        <div class="w-1/2 flex flex-col justify-center items-center text-white">
            <img src="/image/duck4.png" alt="duck" class="w-32">
            <h1 class="text-3xl font-bold">MIBMIB & Friend</h1>
        </div>
        <div class="w-1/2 flex justify-center items-center">
            <div class="bg-white p-8 rounded-lg shadow-lg w-96">
                <Login />
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="bg-white text-center py-4 text-gray-600">
        เกี่ยวกับเรา | 02-1234567
    </div>
</div>
