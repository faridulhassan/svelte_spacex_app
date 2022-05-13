<script>
    import { onMount } from "svelte";
    import { getData, uid } from "../utils";
    import LeafletMap from "../components/LeafletMap.svelte";

    export let ready;
    export let id;
    export let location;

    let launchpad = location.state;
    let error = null;
    console.log(launchpad);
    onMount(() => {
        if (!launchpad) {
            getData({
                path: `/landpads/${id}`
            })
                .then((result) => {
                    launchpad = result;
                    console.log(launchpad);
                })
                .catch((err) => {
                    if (err.status === 404) {
                        error = "Sorry, requested item not found! Please try again later.";
                    } else if (err.data) {
                        error = err.data;
                    } else {
                        error = "Something went wrong! Please try again later.";
                    }
                });
        }
    });
</script>

<section>
    {#if launchpad}
        <div class="flex">
            <div class="w-1/2">
                <h1>{launchpad.name}</h1>
                <p>{launchpad.details}</p>
                <p>
                    <strong>Lat: {launchpad.latitude}</strong>
                    <strong>Lng: {launchpad.longitude}</strong>
                </p>
                {#if launchpad.images.large[0]}
                    <img src={launchpad.images.large[0]} alt="" class="w-full" />
                {/if}
            </div>
            <div class="w-1/2">
                {#if launchpad.latitude && launchpad.longitude}
                    <LeafletMap lat={launchpad.latitude} lng={launchpad.longitude} title={launchpad.full_name} shortDesc={launchpad.region} />
                {/if}
            </div>
        </div>
    {:else if error}
        <p>{error}</p>
    {/if}
</section>
