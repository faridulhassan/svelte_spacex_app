const production = !process.env.ROLLUP_WATCH;
module.exports = {
    mode: "jit",
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    },
    plugins: [],
    purge: ["./**/*.svelte", "./**/*.html"]
};
