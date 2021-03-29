<template>
    <div class="bar-chart" id="element-to-print">
        <apexchart
            type="bar"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>

<script>
module.exports = {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            series: [
                {
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
                },
            ],
            chartOptions: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        "South Korea",
                        "Canada",
                        "United Kingdom",
                        "Netherlands",
                        "Italy",
                        "France",
                        "Japan",
                        "United States",
                        "China",
                        "Germany",
                    ],
                },
            },
        };
    },
   };
</script>

<style>
.hello {
    background-color: #ffe;
}

.bar-chart {
    width: 600px;
}
</style>
