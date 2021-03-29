<template>
    <div>
        <apexchart
            type="pie"
            width="600"
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
            series: [25, 25, 25, 25],
            chartOptions: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                fill: {
                    colors: ["#000000", "#E91E63", "#9C27B0", "#E91E63"],
                },
                labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 450,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    },
};
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>
