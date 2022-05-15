<script>
    import { onMount } from "svelte";

    import LaunchCard from "../components/LaunchCard.svelte";
    import Loader from "../components/Loader.svelte";

    import { getData } from "../utils";

    let launches;

    let isLoading = false;
    function setLoading(is_loading) {
        isLoading = is_loading;
    }
    let error = null;
    onMount(() => {
        setLoading(true);
        getData({
            path: "/launches"
        })
            .then((result) => {
                setLoading(false);
                launches = result;
                console.log(launches);
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
    <title>Launches</title>
</svelte:head>
<div>
    <h1 class="text-4xl mb-3">Launches</h1>
    {#if isLoading}
        <Loader />
    {/if}
    {#if launches}
        <div class="launches-list grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {#each launches as launch (launch.id)}
                <LaunchCard {launch} />
            {/each}
        </div>
    {:else if error}
        <p class="mt-64 text-red-500 font-bold text-center text-3xl sm:text-5xl">{error}</p>
    {/if}
</div>
