var mapView = new ol.View({
  center: ol.proj.fromLonLat([126.978, 37.566]),
  zoom: 10
});

var map = new ol.Map({
  target: 'map',
  view: mapView
});

var osmTile = new ol.layer.Tile({
  title: 'Open Street Map',
  visible: true,
  source: new ol.source.OSM()
});

map.addLayer(osmTile);

var seoulTile = new ol.layer.Tile({
  title: "Seoul sw",
  source: new ol.source.TileWMS({
    url: 'http://localhost:8089/geoserver/GISSimplified/wms?service=WMS',
    params: {'LAYERS': 'GISSimplified:Seoul_sw3857', 'TILED': true},
    serverType: 'geoserver', 
    visible: true
  })
});

map.addLayer(seoulTile);

