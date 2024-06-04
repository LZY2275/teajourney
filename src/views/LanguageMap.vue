<template>
    <div>
        这是languageMap
        <div id="viewDiv" style="width: 100%;height: 600px;"></div>
    </div>
</template>
<script>
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

export default{

    mounted(){
        this.initMap();
    },
    methods:{
        initMap(){
            const map = new Map({
                basemap: "topo-vector"
            });

            const view = new MapView({
                container: "viewDiv",
                map: map,
                center: [120.5, 30.5],
                zoom: 10
            });
        }
    }

}
</script>