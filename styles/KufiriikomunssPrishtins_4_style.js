var size = 0;
var placement = 'point';

var style_KufiriikomunssPrishtins_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Times New Roman\', sans-serif";
    var labelFill = "#8f4f13";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("Komuna") !== null) {
        labelText = String(feature.get("Komuna"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(143,79,19,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.3299999999999998}),fill: new ol.style.Fill({color: 'rgba(228,228,228,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
