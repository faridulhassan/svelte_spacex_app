<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    import { getData } from "../utils";

    let launchpads = [];

    onMount(() => {
        getData({
            path: "/landpads"
        })
            .then((result) => {
                launchpads = result;
            })
            .catch((error) => {
                console.error(error);
            });
    });
</script>

<div>
    <h1>Launchpads Page</h1>
    <ul class="launchpads-list">
        {#each launchpads as launchpad (launchpad.id)}
            <li>
                <Link to={`/launchpads/${launchpad.id}`} state={launchpad}>{launchpad.name}</Link>
            </li>
        {/each}
    </ul>
</div>
