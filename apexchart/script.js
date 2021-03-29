
 const myapp = new Vue({
                el: "#myapp",
                components: {
                    component1: httpVueLoader("component1.vue"),
                    component2: httpVueLoader("component2.vue"),
                },
            });

