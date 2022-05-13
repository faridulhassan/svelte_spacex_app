<script>
    import { onMount } from "svelte";
    import { getData } from "../utils";

    export let id;
    export let location;

    let launch = location.state;
    let error = null;
    onMount(() => {
        if (!launch) {
            getData({
                path: `/launches/${id}`
            })
                .then((result) => {
                    launch = result;
                    console.log(launch);
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
    {#if launch}
        <h1>{launch.name}</h1>
        <p>{launch.details}</p>
        <p>Flight No. #{launch.flight_number}</p>
    {:else if error}
        <p>{error}</p>
    {/if}
</section>
