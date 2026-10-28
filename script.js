/* ============ INLINE FACT BAND ============ */
/* In production this will fetch data/mammal_facts.csv. */
const FACTS = [
  "All modern mammals give birth to live young — except the five monotreme species, which lay eggs.",
  "Bats are the only mammals capable of true, sustained flight.",
  "Eusocial behaviour has evolved in just two mammals: the naked mole-rat and the Damaraland mole-rat.",
  "Livestock make up 62% of the world's mammal biomass; humans 34%; wild mammals just 4%.",
  "Wild mammal biomass has declined by 82% since the dawn of human civilisation."
];

const factContent = document.getElementById('factContent');
const factCount   = document.getElementById('factCount');

let factIndex = 0;
const ROTATE_MS = 18000;

factContent.textContent = FACTS[0];
factCount.textContent   = `1 / ${FACTS.length}`;

setInterval(() => {
  factIndex = (factIndex + 1) % FACTS.length;
  factContent.classList.add('fading');
  setTimeout(() => {
    factContent.textContent = FACTS[factIndex];
    factCount.textContent   = `${factIndex + 1} / ${FACTS.length}`;
    factContent.classList.remove('fading');
  }, 600);
}, ROTATE_MS);

// Vega-Embed options (using your exact settings)
const opt = {
  actions: false,
  renderer: 'svg',
  width: "container" // This tells Vega to fill the .vis-frame div
};

const loadVisualizations = async () => {
  console.log("Loading charts...");
  
  try {
    // 1. Lollipop Chart
    vegaEmbed('#vis-lollipop', 'vis/01-lollipop.json', opt)
        .catch(err => console.error("Error in Lollipop Chart:", err));

    // 2. Scatterplot
    vegaEmbed('#vis-scatter', 'vis/02-scatterplot.json', opt)
        .catch(err => console.error("Error in Scatterplot:", err));

    // 3. Choropleth
    vegaEmbed('#vis-choropleth', 'vis/03-choropleth.json', opt)
        .then(result => {
            console.log("Choropleth loaded successfully");
        })
        .catch(err => {
            console.error("CHOROPLETH ERROR:", err);
        });
    
    // 4. Violin Plot
    vegaEmbed('#vis-violin', 'vis/04-violin.json', opt)
        .then(result => {
            console.log("Violin Plot loaded successfully");
        })
        .catch(err => {
            console.error("VIOLIN PLOT ERROR:", err);
        });

    // 5. Bin Map
    vegaEmbed('#vis-binmap', 'vis/05-binmap.json', opt)
        .then(result => {
            console.log("Bin Map loaded successfully");
        })
        .catch(err => {
            console.error("BIN MAP ERROR:", err);
        });

    // 6. Heatmap
    vegaEmbed('#vis-heatmap', 'vis/06-heatmap.json', opt)
    .then(result => {
            console.log("Heatmap loaded successfully");
        })
        .catch(err => {
            console.error("HEATMAP ERROR:", err);
        });

    // 7. Dumbbell Chart
    vegaEmbed('#vis-dumbbell', 'vis/07-dumbbell.json', opt)
        .then(result => {
            console.log("Dumbbell Chart loaded successfully");
        })
        .catch(err => {
            console.error("DUMBBELL CHART ERROR:", err);
        });

    // 8. Line Chart
    vegaEmbed('#vis-line', 'vis/08-line.json', opt)
        .then(result => {
            console.log("Line Chart loaded successfully");
        })
        .catch(err => {
            console.error("LINE CHART ERROR:", err);
        });

    // 9. Parallel Coordinates
    vegaEmbed('#vis-parallel', 'vis/09-parallel.json', opt)
        .then(result => {
            console.log("Parallel Coordinates loaded successfully");
        })
        .catch(err => {
            console.error("PARALLEL COORDINATES ERROR:", err);
        });

    // 10. Normalised Bar Chart
    vegaEmbed('#vis-norm-bar', 'vis/10-normalised-bar.json', opt)
        .then(result => {
            console.log("Normalised Bar Chart loaded successfully");
        })
        .catch(err => {
            console.error("NORMALISED BAR CHART ERROR:", err);
        });

    // 11. Proportional Symbol Map
    vegaEmbed('#vis-prop-symbol', 'vis/11-proportional-symbol.json', opt)
        .then(result => {
            console.log("Proportional Symbol Map loaded successfully");
        })
        .catch(err => {
            console.error("PROPORTIONAL SUYMBOL MAP ERROR:", err);
        });

  } catch (err) {
    console.error("General Vega Error: ", err);
  }
};

window.onload = loadVisualizations;