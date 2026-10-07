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

vegaEmbed('#chart-groups', 'chart1.json', { actions: false });
vegaEmbed('#chart-taxonomy', 'chart2.json', { actions: false });
vegaEmbed('#chart-world-comp', 'chart3.json', { actions: false });