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
            .catch((error) => {
                setLoading(false);
                console.error(error);
            });
    });
</script>

<div>
    <h1 class="text-4xl mb-3">Launchpads</h1>
    {#if isLoading}
        <Loader />
    {/if}

    {#if launchpads && launchpads.length}
        <LeafletMap {center} data={launchpads} />
    {/if}
</div>
