<script>
    import moment from "moment";
    export let launch = {};
</script>

<div class=" bg-white hover:bg-gray-100 border transition duration-200 border-gray-300 rounded-xl overflow-hidden">
    <a href={launch.links?.article || launch.links?.wikipedia} target="_blank" class="flex items-center justify-start h-full">
        <div class="relative w-20 sm:w-32 h-full flex-shrink-0">
            <div class="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-gray-200">
                <img alt={launch.name} class="absolute left-0 top-0 w-full h-full p-2 object-contain object-center transition duration-50" loading="lazy" src={launch.links?.patch?.small || "https://stackdiary.com/140x100.png"} />
            </div>
        </div>

        <div class="p-4">
            <p class="text-gray-600 font-bold text-2xl mb-1">{launch.name}</p>
            {#if launch.success}
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Success</span>
            {:else}
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-500 text-white rounded">Failed</span>
            {/if}
            <p class="text-sm text-gray-500 mt-1 line-clamp-2"><b>Launch Date</b> : {moment(launch.date_local).format("DD/MM/YYYY")}</p>
            <p class="text-sm text-gray-500 mt-1 line-clamp-2 max-h-10 overflow-hidden">{launch.details || ""}</p>
        </div>
    </a>
</div>
