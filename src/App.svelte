<script>
    import { Router, Route } from "svelte-routing";
    import Nav from "./components/Nav.svelte";
    import CompanyInfo from "./routes/CompanyInfo.svelte";
    import LaunchDetails from "./routes/LaunchDetails.svelte";
    import Launches from "./routes/Launches.svelte";
    import Launchpads from "./routes/Launchpads.svelte";
    import LaunchpadDetails from "./routes/LaunchpadDetails.svelte";

    export let url = "";
</script>

<Router {url}>
    <div class="app-container">
        <Nav />
        <main class="container mx-auto px-4 pt-3 sm:pt-12 pb-3">
            <Router>
                <Route path="launchpads" component={Launchpads} />
                <Route path="launchpads/:id" component={LaunchpadDetails} />
                <Route path="launches" component={Launches} />
                <Route path="launches/:id" component={LaunchDetails} />
                <Route path="/" component={CompanyInfo} />
            </Router>
        </main>
    </div>
</Router>
