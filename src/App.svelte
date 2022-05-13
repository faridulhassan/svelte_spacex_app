<script>
    import { Router, Route } from "svelte-routing";
    import Nav from "./components/Nav.svelte";
    import CompanyInfo from "./routes/CompanyInfo.svelte";
    import Launches from "./routes/Launches.svelte";
    import Launchpads from "./routes/Launchpads.svelte";
    export let url = "";
</script>

<Router {url}>
    <main>
        <Nav />
        <div>
            <Route path="launchpads" component={Launchpads} />
            <Route path="launches" component={Launches} />
            <Route path="/"><CompanyInfo /></Route>
        </div>
    </main>
</Router>
