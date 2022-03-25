var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_house_price_data_1 = new ol.format.GeoJSON();
var features_house_price_data_1 = format_house_price_data_1.readFeatures(json_house_price_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_house_price_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house_price_data_1.addFeatures(features_house_price_data_1);
var lyr_house_price_data_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_house_price_data_1, 
                style: style_house_price_data_1,
                interactive: true,
    title: 'house_price_data<br />\
    <img src="styles/legend/house_price_data_1_0.png" /> 2200 - 32000<br />\
    <img src="styles/legend/house_price_data_1_1.png" /> 32000 - 50000<br />\
    <img src="styles/legend/house_price_data_1_2.png" /> 50000 - 80000<br />\
    <img src="styles/legend/house_price_data_1_3.png" /> 80000 - 1200000<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_house_price_data_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_house_price_data_1];
lyr_house_price_data_1.set('fieldAliases', {'id': 'id', 'id_string': 'id_string', 'city': 'city', 'locality': 'locality', 'project': 'project', 'dev_name': 'dev_name', 'furnishing': 'furnishing', 'area': 'area', 'bathroom_num': 'bathroom_num', 'bedroom_num': 'bedroom_num', 'floor_count': 'floor_count', 'floor_num': 'floor_num', 'latitude': 'latitude', 'longitude': 'longitude', 'post_date': 'post_date', 'poster_name': 'poster_name', 'price': 'price', 'title': 'title', 'trans': 'trans', 'type': 'type', 'url': 'url', 'user_type': 'user_type', 'desc': 'desc', });
lyr_house_price_data_1.set('fieldImages', {'id': 'Hidden', 'id_string': 'Hidden', 'city': 'TextEdit', 'locality': 'TextEdit', 'project': 'Hidden', 'dev_name': 'Hidden', 'furnishing': 'Hidden', 'area': 'Hidden', 'bathroom_num': 'Hidden', 'bedroom_num': 'Hidden', 'floor_count': 'Hidden', 'floor_num': 'Hidden', 'latitude': 'Hidden', 'longitude': 'Hidden', 'post_date': 'Hidden', 'poster_name': 'Hidden', 'price': 'Range', 'title': 'Hidden', 'trans': 'Hidden', 'type': 'Hidden', 'url': 'Hidden', 'user_type': 'Hidden', 'desc': 'Hidden', });
lyr_house_price_data_1.set('fieldLabels', {'city': 'inline label', 'locality': 'inline label', 'price': 'inline label', });
lyr_house_price_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});