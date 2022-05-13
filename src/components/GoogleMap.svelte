<script>
    import { onMount } from "svelte";
    import { uid } from "../utils";

    export let lat;
    export let lng;

    let container;
    let map;
    let zoom = 8;
    let center = { lat, lng };

    onMount(async () => {
        map = new google.maps.Map(container, {
            zoom,
            center
        });
    });
</script>

<div id={`map-container-${uid()}`} class="min-h-full bg-gray-300" bind:this={container} />
