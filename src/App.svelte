<script>
    import { Router, Route } from "svelte-routing";
    import Nav from "./components/Nav.svelte";
    import CompanyInfo from "./routes/CompanyInfo.svelte";
    import Launches from "./routes/Launches.svelte";
    import Launchpads from "./routes/Launchpads.svelte";

    export let url = "";
</script>

<Router {url}>
    <div class="app-container">
        <Nav />
        <main class="container mx-auto px-4 pt-3 sm:pt-8 sm:pb-7 pb-3">
            <Router>
                <Route path="launchpads" component={Launchpads} />
                <Route path="launches" component={Launches} />
                <Route path="/" component={CompanyInfo} />
            </Router>
        </main>
    </div>
</Router>
