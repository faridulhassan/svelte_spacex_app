<script>
    import * as L from "leaflet";
    import "leaflet/dist/leaflet.css";

    import icon from "leaflet/dist/images/marker-icon.png";
    import iconShadow from "leaflet/dist/images/marker-shadow.png";

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    import { onDestroy, onMount } from "svelte";
    import { uid } from "../utils";

    export let lat;
    export let lng;
    export let title;
    export let shortDesc;

    let container;
    let map;
    let zoom = 8;
    let center = { lat, lng };

    onMount(async () => {
        map = L.map(container.id, {
            center,
            zoom
        });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([lat, lng]).addTo(map).bindPopup(`<div><b>${title}</b></div> ${shortDesc}`);
        window.map = map;
    });
    onDestroy(() => {
        if (map && map.remove) {
            map.off();
            map.remove();
        }
    });
</script>

<div id={`map-container-${uid()}`} class="h-96 bg-gray-300" bind:this={container} />
