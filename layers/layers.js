ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9141").setExtent([7512924.597753, 4722995.616776, 7513803.014419, 4723428.871985]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Emrtimetelagjeve_1 = new ol.format.GeoJSON();
var features_Emrtimetelagjeve_1 = format_Emrtimetelagjeve_1.readFeatures(json_Emrtimetelagjeve_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Emrtimetelagjeve_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emrtimetelagjeve_1.addFeatures(features_Emrtimetelagjeve_1);
var lyr_Emrtimetelagjeve_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emrtimetelagjeve_1,
maxResolution:9.801563153291687,
 minResolution:2.8004466152261966,

                style: style_Emrtimetelagjeve_1,
                popuplayertitle: "Emërtimet e lagjeve",
                interactive: false,
                title: '<img src="styles/legend/Emrtimetelagjeve_1.png" /> Emërtimet e lagjeve'
            });
var format_Emrtimeterrugve_2 = new ol.format.GeoJSON();
var features_Emrtimeterrugve_2 = format_Emrtimeterrugve_2.readFeatures(json_Emrtimeterrugve_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Emrtimeterrugve_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emrtimeterrugve_2.addFeatures(features_Emrtimeterrugve_2);
var lyr_Emrtimeterrugve_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emrtimeterrugve_2,
maxResolution:9.801563153291687,
 
                style: style_Emrtimeterrugve_2,
                popuplayertitle: "Emërtimet e rrugëve",
                interactive: false,
                title: '<img src="styles/legend/Emrtimeterrugve_2.png" /> Emërtimet e rrugëve'
            });
var format_Zonatkadastrale_3 = new ol.format.GeoJSON();
var features_Zonatkadastrale_3 = format_Zonatkadastrale_3.readFeatures(json_Zonatkadastrale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Zonatkadastrale_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonatkadastrale_3.addFeatures(features_Zonatkadastrale_3);
var lyr_Zonatkadastrale_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonatkadastrale_3,
maxResolution:56.00893230452392,
 minResolution:8.401339845678589,

                style: style_Zonatkadastrale_3,
                popuplayertitle: "Zonat kadastrale",
                interactive: false,
                title: '<img src="styles/legend/Zonatkadastrale_3.png" /> Zonat kadastrale'
            });
var format_KufiriikomunssPrishtins_4 = new ol.format.GeoJSON();
var features_KufiriikomunssPrishtins_4 = format_KufiriikomunssPrishtins_4.readFeatures(json_KufiriikomunssPrishtins_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_KufiriikomunssPrishtins_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KufiriikomunssPrishtins_4.addFeatures(features_KufiriikomunssPrishtins_4);
var lyr_KufiriikomunssPrishtins_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KufiriikomunssPrishtins_4, minResolution:16.802679691357177,

                style: style_KufiriikomunssPrishtins_4,
                popuplayertitle: "Kufiri i komunës së Prishtinës",
                interactive: false,
                title: '<img src="styles/legend/KufiriikomunssPrishtins_4.png" /> Kufiri i komunës së Prishtinës'
            });
var format_Stacionetetrafikuturban_5 = new ol.format.GeoJSON();
var features_Stacionetetrafikuturban_5 = format_Stacionetetrafikuturban_5.readFeatures(json_Stacionetetrafikuturban_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Stacionetetrafikuturban_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stacionetetrafikuturban_5.addFeatures(features_Stacionetetrafikuturban_5);
var lyr_Stacionetetrafikuturban_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stacionetetrafikuturban_5,
maxResolution:1.2602009768517881,
 
                style: style_Stacionetetrafikuturban_5,
                popuplayertitle: "Stacionet e trafikut urban",
                interactive: true,
                title: '<img src="styles/legend/Stacionetetrafikuturban_5.png" /> Stacionet e trafikut urban'
            });
var format_Parking_6 = new ol.format.GeoJSON();
var features_Parking_6 = format_Parking_6.readFeatures(json_Parking_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Parking_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_6.addFeatures(features_Parking_6);
var lyr_Parking_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_6,
maxResolution:1.2602009768517881,
 
                style: style_Parking_6,
                popuplayertitle: "Parking",
                interactive: true,
    title: 'Parking<br />\
    <img src="styles/legend/Parking_6_0.png" /> Veturë<br />\
    <img src="styles/legend/Parking_6_1.png" /> Biçikletë<br />'
        });
var format_Restaurant_7 = new ol.format.GeoJSON();
var features_Restaurant_7 = format_Restaurant_7.readFeatures(json_Restaurant_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Restaurant_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurant_7.addFeatures(features_Restaurant_7);
var lyr_Restaurant_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurant_7,
maxResolution:1.2602009768517881,
 
                style: style_Restaurant_7,
                popuplayertitle: "Restaurant",
                interactive: true,
                title: '<img src="styles/legend/Restaurant_7.png" /> Restaurant'
            });
var format_Akomodim_8 = new ol.format.GeoJSON();
var features_Akomodim_8 = format_Akomodim_8.readFeatures(json_Akomodim_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Akomodim_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Akomodim_8.addFeatures(features_Akomodim_8);
var lyr_Akomodim_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Akomodim_8,
maxResolution:1.2602009768517881,
 
                style: style_Akomodim_8,
                popuplayertitle: "Akomodim",
                interactive: true,
                title: '<img src="styles/legend/Akomodim_8.png" /> Akomodim'
            });
var format_ShrbimetEmergjente_9 = new ol.format.GeoJSON();
var features_ShrbimetEmergjente_9 = format_ShrbimetEmergjente_9.readFeatures(json_ShrbimetEmergjente_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_ShrbimetEmergjente_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShrbimetEmergjente_9.addFeatures(features_ShrbimetEmergjente_9);
var lyr_ShrbimetEmergjente_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShrbimetEmergjente_9,
maxResolution:3.080491276748816,
 
                style: style_ShrbimetEmergjente_9,
                popuplayertitle: "Shërbimet Emergjente",
                interactive: true,
    title: 'Shërbimet Emergjente<br />\
    <img src="styles/legend/ShrbimetEmergjente_9_0.png" /> Qendër Shëndetësore<br />\
    <img src="styles/legend/ShrbimetEmergjente_9_1.png" /> Stacion Policor<br />\
    <img src="styles/legend/ShrbimetEmergjente_9_2.png" /> Stacioni i Zjarrfikësve<br />'
        });
var format_PikatTuristiketPrishtins_10 = new ol.format.GeoJSON();
var features_PikatTuristiketPrishtins_10 = format_PikatTuristiketPrishtins_10.readFeatures(json_PikatTuristiketPrishtins_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_PikatTuristiketPrishtins_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PikatTuristiketPrishtins_10.addFeatures(features_PikatTuristiketPrishtins_10);
var lyr_PikatTuristiketPrishtins_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PikatTuristiketPrishtins_10, 
                style: style_PikatTuristiketPrishtins_10,
                popuplayertitle: "Pikat Turistike të Prishtinës",
                interactive: true,
    title: 'Pikat Turistike të Prishtinës<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_10_0.png" /> Atraksion natyror<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_10_1.png" /> Objekt fetar<br />\
    <img src="styles/legend/PikatTuristiketPrishtins_10_2.png" /> Objekt kulturor<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Emrtimetelagjeve_1.setVisible(true);lyr_Emrtimeterrugve_2.setVisible(true);lyr_Zonatkadastrale_3.setVisible(true);lyr_KufiriikomunssPrishtins_4.setVisible(true);lyr_Stacionetetrafikuturban_5.setVisible(true);lyr_Parking_6.setVisible(true);lyr_Restaurant_7.setVisible(true);lyr_Akomodim_8.setVisible(true);lyr_ShrbimetEmergjente_9.setVisible(true);lyr_PikatTuristiketPrishtins_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Emrtimetelagjeve_1,lyr_Emrtimeterrugve_2,lyr_Zonatkadastrale_3,lyr_KufiriikomunssPrishtins_4,lyr_Stacionetetrafikuturban_5,lyr_Parking_6,lyr_Restaurant_7,lyr_Akomodim_8,lyr_ShrbimetEmergjente_9,lyr_PikatTuristiketPrishtins_10];
lyr_Emrtimetelagjeve_1.set('fieldAliases', {'id': 'id', 'Emri': 'Emri', });
lyr_Emrtimeterrugve_2.set('fieldAliases', {'id': 'id', 'Emri': 'Emri', });
lyr_Zonatkadastrale_3.set('fieldAliases', {'CadastreZo': 'CadastreZo', 'Emri': 'Emri', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_KufiriikomunssPrishtins_4.set('fieldAliases', {'Municipali': 'Municipali', 'Municipal0': 'Municipal0', 'Municipal1': 'Municipal1', 'Municipal2': 'Municipal2', 'Municipal3': 'Municipal3', 'StateId': 'StateId', 'Komuna': 'Komuna', });
lyr_Stacionetetrafikuturban_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Linja': 'Linja', 'Stacioni': 'Stacioni', });
lyr_Parking_6.set('fieldAliases', {'id': 'id', 'Lloji': 'Lloji', });
lyr_Restaurant_7.set('fieldAliases', {'Emri': 'Emri', });
lyr_Akomodim_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'Emri': 'Emri', });
lyr_ShrbimetEmergjente_9.set('fieldAliases', {'Emri': 'Emri', 'Lloji': 'Lloji', 'id': 'id', 'path': 'path', 'Nr. Tel.': 'Nr. Tel.', });
lyr_PikatTuristiketPrishtins_10.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'longitude': 'longitude', 'latitude': 'latitude', 'Emri': 'Emri', 'Kategoria': 'Kategoria', 'ZonaKad.': 'ZonaKad.', 'Lloji': 'Lloji', 'Nr.i Pikës': 'Nr.i Pikës', 'Përshkrim': 'Përshkrim', });
lyr_Emrtimetelagjeve_1.set('fieldImages', {'id': 'TextEdit', 'Emri': 'TextEdit', });
lyr_Emrtimeterrugve_2.set('fieldImages', {'id': 'TextEdit', 'Emri': 'TextEdit', });
lyr_Zonatkadastrale_3.set('fieldImages', {'CadastreZo': 'TextEdit', 'Emri': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_KufiriikomunssPrishtins_4.set('fieldImages', {'Municipali': 'TextEdit', 'Municipal0': 'TextEdit', 'Municipal1': 'TextEdit', 'Municipal2': 'TextEdit', 'Municipal3': 'TextEdit', 'StateId': 'TextEdit', 'Komuna': 'TextEdit', });
lyr_Stacionetetrafikuturban_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Linja': 'TextEdit', 'Stacioni': 'TextEdit', });
lyr_Parking_6.set('fieldImages', {'id': 'TextEdit', 'Lloji': 'TextEdit', });
lyr_Restaurant_7.set('fieldImages', {'Emri': 'TextEdit', });
lyr_Akomodim_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'Emri': 'TextEdit', });
lyr_ShrbimetEmergjente_9.set('fieldImages', {'Emri': 'TextEdit', 'Lloji': 'TextEdit', 'id': 'TextEdit', 'path': 'TextEdit', 'Nr. Tel.': 'TextEdit', });
lyr_PikatTuristiketPrishtins_10.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'Emri': 'TextEdit', 'Kategoria': 'TextEdit', 'ZonaKad.': 'TextEdit', 'Lloji': 'TextEdit', 'Nr.i Pikës': 'Range', 'Përshkrim': 'TextEdit', });
lyr_Emrtimetelagjeve_1.set('fieldLabels', {'id': 'hidden field', 'Emri': 'inline label - visible with data', });
lyr_Emrtimeterrugve_2.set('fieldLabels', {'id': 'hidden field', 'Emri': 'inline label - visible with data', });
lyr_Zonatkadastrale_3.set('fieldLabels', {'CadastreZo': 'hidden field', 'Emri': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_KufiriikomunssPrishtins_4.set('fieldLabels', {'Municipali': 'hidden field', 'Municipal0': 'hidden field', 'Municipal1': 'hidden field', 'Municipal2': 'hidden field', 'Municipal3': 'hidden field', 'StateId': 'hidden field', 'Komuna': 'inline label - visible with data', });
lyr_Stacionetetrafikuturban_5.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'Linja': 'inline label - visible with data', 'Stacioni': 'inline label - visible with data', });
lyr_Parking_6.set('fieldLabels', {'id': 'hidden field', 'Lloji': 'header label - visible with data', });
lyr_Restaurant_7.set('fieldLabels', {'Emri': 'header label - visible with data', });
lyr_Akomodim_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'Emri': 'inline label - visible with data', });
lyr_ShrbimetEmergjente_9.set('fieldLabels', {'Emri': 'inline label - visible with data', 'Lloji': 'inline label - visible with data', 'id': 'hidden field', 'path': 'hidden field', 'Nr. Tel.': 'inline label - visible with data', });
lyr_PikatTuristiketPrishtins_10.set('fieldLabels', {'photo': 'no label', 'filename': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'Emri': 'inline label - visible with data', 'Kategoria': 'inline label - visible with data', 'ZonaKad.': 'inline label - visible with data', 'Lloji': 'inline label - visible with data', 'Nr.i Pikës': 'inline label - visible with data', 'Përshkrim': 'inline label - visible with data', });
lyr_PikatTuristiketPrishtins_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});