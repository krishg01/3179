// =========================================
// FUN FACT TOGGLE BUTTON
// =========================================
const factButton = document.getElementById("factButton");
const factText = document.getElementById("factText");

factButton.addEventListener("click", function () {
    const isHidden = factText.classList.contains("hidden");

    if (isHidden) {
        factText.classList.remove("hidden");
        factButton.textContent = "Hide Fact";
    } else {
        factText.classList.add("hidden");
        factButton.textContent = "Reveal Fact";
    }
});


// =========================================
// SECTION 1 VISUALISATIONS (VEGA-LITE)
// =========================================

vegaEmbed('#chart-taxonomy', 'chart1.json', { actions: false });
vegaEmbed('#chart2', 'chart2.json', { actions: false });
vegaEmbed('#chart-liv-ext', 'chart3.json', { actions: false });
vegaEmbed('#chart-world-comp', 'chart4.json', { actions: false });

vegaEmbed('#chart-density', 'chart5_map.json', { actions: false });

vegaEmbed('#chart-habitat', 'chart8.json', { actions: false });
vegaEmbed('#chart-diet', 'chart9.json', { actions: false });
vegaEmbed('#chart-mass', 'chart10.json', { actions: false });
vegaEmbed('#chart-activity', 'chart11.json', { actions: false });