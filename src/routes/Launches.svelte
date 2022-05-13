<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    import { getData } from "../utils";

    let launches = [];

    onMount(() => {
        getData({
            path: "/launches"
        })
            .then((result) => {
                launches = result;
                console.log(launches[0]);
            })
            .catch((error) => {
                console.error(error);
            });
    });
</script>

<div>
    <h1>Launch Page</h1>
    <ul class="launches-list">
        {#each launches as launch (launch.id)}
            <li>
                <Link to={`/launches/${launch.id}`} state={launch}>{launch.name}</Link>
            </li>
        {/each}
    </ul>
</div>
