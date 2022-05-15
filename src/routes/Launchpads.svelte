<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    import LeafletMap from "../components/LeafletMap.svelte";
    import Loader from "../components/Loader.svelte";

    import { getData } from "../utils";

    let launchpads = [];
    let center = { lat: 33.92151381364131, lng: -118.32687829999999 };

    let isLoading = false;
    function setLoading(is_loading) {
        isLoading = is_loading;
    }
    let error = null;
    onMount(() => {
        setLoading(true);
        getData({
            path: "/landpads"
        })
            .then((result) => {
                setLoading(false);
                launchpads = result;
                console.log(launchpads);
            })
            .catch((err) => {
                setLoading(false);
                if (err.status === 404) {
                    error = "Sorry, requested data not found! Please try again later.";
                } else if (err.data) {
                    error = err.data;
                } else {
                    error = "Something went wrong! Please try again later.";
                }
            });
    });
</script>

<svelte:head>
    <title>Launchpads</title>
</svelte:head>

<div>
    <h1 class="text-4xl mb-3">Launchpads</h1>
    {#if isLoading}
        <Loader />
    {/if}

    {#if launchpads && launchpads.length}
        <LeafletMap {center} data={launchpads} />
    {:else if error}
        <p class="mt-64 text-red-500 font-bold text-center text-3xl sm:text-5xl">{error}</p>
    {/if}
</div>
