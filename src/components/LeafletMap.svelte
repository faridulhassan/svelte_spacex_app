<script>
    import * as L from "leaflet";
    import "leaflet/dist/leaflet.css";

    import { onDestroy, onMount } from "svelte";
    import { uid } from "../utils";

    import icon from "leaflet/dist/images/marker-icon.png";
    import iconShadow from "leaflet/dist/images/marker-shadow.png";

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    export let center = { lat: 33.92151381364131, lng: -118.32687829999999 };
    export let data = [];

    let container;
    let map;
    let zoom = 8;
    let markers = [];
    const setMarkers = (data) => {
        for (let i = 0; i < data.length; i++) {
            let marker = L.marker([data[i].latitude, data[i].longitude]);
            marker.title = data[i].name;
            markers.push(marker);
            marker.addTo(map).bindPopup(`<div><b>${data[i].full_name}</b></div> ${data[i].locality}`);
        }
        var group = new L.featureGroup(markers);

        map.fitBounds(group.getBounds());
    };

    onMount(async () => {
        map = L.map(container.id, {
            center,
            zoom
        });
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        setTimeout(() => {
            map.invalidateSize();
            setMarkers(data);
        }, 100);
    });
    onDestroy(() => {
        if (map && map.remove) {
            map.off();
            map.remove();
        }
    });
</script>

<div id={`map-container-${uid()}`} class="w-full bg-gray-300 rounded-sm" style="height: 700px;" bind:this={container} />
