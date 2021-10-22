var wms_layers = [];


        var lyr_CartoLightNoLabels_0 = new ol.layer.Tile({
            'title': 'Carto Light No Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_tokyogrid1_1 = new ol.format.GeoJSON();
var features_tokyogrid1_1 = format_tokyogrid1_1.readFeatures(json_tokyogrid1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tokyogrid1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tokyogrid1_1.addFeatures(features_tokyogrid1_1);
var lyr_tokyogrid1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tokyogrid1_1, 
                style: style_tokyogrid1_1,
                interactive: true,
    title: 'tokyo-grid-1<br />\
    <img src="styles/legend/tokyogrid1_1_0.png" /> pray zone<br />\
    <img src="styles/legend/tokyogrid1_1_1.png" /> bar pray zone<br />\
    <img src="styles/legend/tokyogrid1_1_2.png" /> bar zone<br />'
        });
var format_tokyodissolved1_2 = new ol.format.GeoJSON();
var features_tokyodissolved1_2 = format_tokyodissolved1_2.readFeatures(json_tokyodissolved1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tokyodissolved1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tokyodissolved1_2.addFeatures(features_tokyodissolved1_2);
var lyr_tokyodissolved1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tokyodissolved1_2, 
                style: style_tokyodissolved1_2,
                interactive: false,
                title: '<img src="styles/legend/tokyodissolved1_2.png" /> tokyo-dissolved-1'
            });

lyr_CartoLightNoLabels_0.setVisible(true);lyr_tokyogrid1_1.setVisible(true);lyr_tokyodissolved1_2.setVisible(true);
var layersList = [lyr_CartoLightNoLabels_0,lyr_tokyogrid1_1,lyr_tokyodissolved1_2];
lyr_tokyogrid1_1.set('fieldAliases', {'fid': 'FID', 'bar-count': 'Number of bars', 'church-count': 'Number of churches', 'zone': 'Zone type', });
lyr_tokyodissolved1_2.set('fieldAliases', {'fid': 'fid', });
lyr_tokyogrid1_1.set('fieldImages', {'fid': 'TextEdit', 'bar-count': 'TextEdit', 'church-count': 'TextEdit', 'zone': 'TextEdit', });
lyr_tokyodissolved1_2.set('fieldImages', {'fid': '', });
lyr_tokyogrid1_1.set('fieldLabels', {'fid': 'inline label', 'bar-count': 'inline label', 'church-count': 'inline label', 'zone': 'inline label', });
lyr_tokyodissolved1_2.set('fieldLabels', {'fid': 'no label', });
lyr_tokyodissolved1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});