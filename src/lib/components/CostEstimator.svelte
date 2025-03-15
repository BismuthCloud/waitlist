<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let locValue = 200000;
  let chartCanvas;
  let chart;

  const breakpoints = [1000, 10000, 50000, 200000, 1000000];
  const breakpointLabels = ['1K', '10K', '50K', '200K', '1M'];

  const breakpointLabelsVisuals = ['1K', '', '30K', '', '1M'];

  const costModel = {
    bugfixFeaturegen: {
      '1000': 0.40,
      '10000': 0.70,
      '50000': 1.6,
      '200000': 2.7,
      '1000000': 4.0
    },
    prReview: {
      '1000': 0.3,
      '10000': 0.6,
      '50000': 1.2,
      '200000': 2.2,
      '1000000': 3.0
    },
    bugScanning: {
      '1000': 1.0,
      '10000': 3.0,
      '50000': 6.0,
      '200000': 10.0,
      '1000000': 15.0
    }
  };

  // Interpolate costs for a specific LOC value
  function interpolateCost(feature, loc) {
    // Find the two breakpoints the loc value falls between
    let lowerBp = breakpoints[0];
    let upperBp = breakpoints[breakpoints.length - 1];

    for (let i = 0; i < breakpoints.length - 1; i++) {
      if (loc >= breakpoints[i] && loc <= breakpoints[i + 1]) {
        lowerBp = breakpoints[i];
        upperBp = breakpoints[i + 1];
        break;
      }
    }

    const lowerCost = costModel[feature][lowerBp.toString()];
    const upperCost = costModel[feature][upperBp.toString()];

    // Logarithmic interpolation
    const logLoc = Math.log10(loc);
    const logLower = Math.log10(lowerBp);
    const logUpper = Math.log10(upperBp);

    const factor = (logLoc - logLower) / (logUpper - logLower);

    return lowerCost + factor * (upperCost - lowerCost);
  }

  $: bugfixCost = interpolateCost('bugfixFeaturegen', locValue);
  $: prReviewCost = interpolateCost('prReview', locValue);
  $: bugScanningCost = interpolateCost('bugScanning', locValue);
  $: totalCost = bugfixCost + prReviewCost + bugScanningCost;

  // Convert LOC to slider position (logarithmic)
  function logPosition() {
    const min = Math.log10(breakpoints[0]);
    const max = Math.log10(breakpoints[breakpoints.length - 1]);
    const value = Math.log10(locValue);
    return ((value - min) / (max - min)) * 100;
  }

  // Convert slider position to LOC (logarithmic)
  function handleSliderChange(e) {
    const position = parseFloat(e.target.value);
    const min = Math.log10(breakpoints[0]);
    const max = Math.log10(breakpoints[breakpoints.length - 1]);
    const value = Math.pow(10, min + (position / 100) * (max - min));
    locValue = Math.round(value);
    updateChart();
  }

  function formatLoc(loc) {
    if (loc >= 1000000) return (loc / 1000000).toFixed(1) + 'M';
    if (loc >= 1000) return (loc / 1000).toFixed(0) + 'K';
    return loc.toString();
  }

  function createChart() {
    const ctx = chartCanvas.getContext('2d');

    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: breakpointLabels,
        datasets: [
          {
            label: 'Bugfix/Feature Generation',
            data: breakpoints.map(bp => costModel.bugfixFeaturegen[bp.toString()]),
            borderColor: 'rgba(138, 43, 226, 1)',
            backgroundColor: 'rgba(138, 43, 226, 0.1)',
            tension: 0.4,
          },
          {
            label: 'PR Review',
            data: breakpoints.map(bp => costModel.prReview[bp.toString()]),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.4,
          },
          {
            label: 'Bug Scanning',
            data: breakpoints.map(bp => costModel.bugScanning[bp.toString()]),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            tension: 0.4,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.7)',
              callback: function(value) {
                return '$' + value;
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'rgba(255, 255, 255, 0.7)',
              padding: 10,
            },
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': $' + context.raw.toFixed(2);
              }
            }
          }
        },
        maintainAspectRatio: false,
      }
    });
  }

  function updateChart() {
    if (chart) {
      chart.update();
    }
  }

  onMount(() => {
    createChart();
    return () => {
      if (chart) chart.destroy();
    };
  });
</script>

<div class="cost-estimator">
  <h2>Cost Estimation by Codebase Size</h2>

  <div class="chart-container">
    <canvas bind:this={chartCanvas}></canvas>
  </div>

  <div class="slider-container">
    <div class="breakpoint-labels">
      {#each breakpointLabelsVisuals as label, i}
        <span style="left: {(i/(breakpointLabels.length-1))*100}%; position: absolute; transform: translateX(-50%);">{label}</span>
      {/each}
    </div>

    <input
      type="range"
      min="0"
      max="100"
      value={logPosition()}
      on:input={handleSliderChange}
      class="slider"
    />

    <div class="current-size">
      Current Codebase Size: {formatLoc(locValue)} LOC
    </div>
  </div>

  <div class="cost-breakdown">
    <h3>Estimated Costs</h3>

    <div class="cost-item">
      <span>Bugfix/Feature Generation:</span>
      <span>~ ${bugfixCost.toFixed(2)} per task</span>
    </div>

    <div class="cost-item">
      <span>PR Review:</span>
      <span>~ ${prReviewCost.toFixed(2)} per review</span>
    </div>

    <div class="cost-item">
      <span>Bug Scanning:</span>
      <span>~ ${bugScanningCost.toFixed(2)} per scan</span>
    </div>
  </div>
</div>

<style>
  .cost-estimator {
    background-color: #ffffff14;
    color: white;
    padding: 20px;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .chart-container {
    height: 300px;
    margin-bottom: 30px;
  }

  .slider-container {
    margin: 20px 10px;
    position: relative;
  }

  .breakpoint-labels {
    position: relative;
    height: 20px;
    margin-bottom: 5px;
  }

  .breakpoint-labels span {
    font-size: 0.8rem;
  }

  .slider {
    width: 100%;
    height: 8px;
    -webkit-appearance: none;
    appearance: none;
    background-color: #2e2e4e;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #6366f1;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #6366f1;
    cursor: pointer;
  }

  .current-size {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .cost-breakdown {
    background-color: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
  }

  h3 {
    margin: 0 0 15px 0;
    text-align: center;
  }

  .cost-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .total {
    margin: 15px 0 5px 0;
    font-weight: bold;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 15px;
  }
</style>