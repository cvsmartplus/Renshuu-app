<div class="p-4 bg-white rounded-xl shadow-md">
    <div class="flex justify-between items-start">
        <div>
            <h2 class="text-sm text-gray-500">{{ $title }}</h2>
            <p class="text-sm text-gray-400">{{ $subtitle }}</p>
        </div>
        {{-- Optional dropdown, kamu bisa pakai slot nanti jika perlu --}}
        {{ $slot }}
    </div>

    {{-- Chart canvas --}}
    <canvas id="{{ $id }}" class="mt-4 w-full h-40"></canvas>
</div>
