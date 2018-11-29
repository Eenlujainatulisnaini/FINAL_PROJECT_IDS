var wms_layers = [];
var format_hasil_fix_0 = new ol.format.GeoJSON();
var features_hasil_fix_0 = format_hasil_fix_0.readFeatures(json_hasil_fix_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hasil_fix_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_hasil_fix_0.addFeatures(features_hasil_fix_0);var lyr_hasil_fix_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hasil_fix_0, 
                style: style_hasil_fix_0,
    title: 'hasil_fix<br />\
    <img src="styles/legend/hasil_fix_0_0.png" /> Sangat sesuai<br />\
    <img src="styles/legend/hasil_fix_0_1.png" /> Sesuai<br />\
    <img src="styles/legend/hasil_fix_0_2.png" /> Kurang sesuai<br />'
        });var format_Perairan_darat_1 = new ol.format.GeoJSON();
var features_Perairan_darat_1 = format_Perairan_darat_1.readFeatures(json_Perairan_darat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perairan_darat_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Perairan_darat_1.addFeatures(features_Perairan_darat_1);var lyr_Perairan_darat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perairan_darat_1, 
                style: style_Perairan_darat_1,
                title: '<img src="styles/legend/Perairan_darat_1.png" /> Perairan_darat'
            });var format_jalan_utama_kp_2 = new ol.format.GeoJSON();
var features_jalan_utama_kp_2 = format_jalan_utama_kp_2.readFeatures(json_jalan_utama_kp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_utama_kp_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_utama_kp_2.addFeatures(features_jalan_utama_kp_2);var lyr_jalan_utama_kp_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_utama_kp_2, 
                style: style_jalan_utama_kp_2,
                title: '<img src="styles/legend/jalan_utama_kp_2.png" /> jalan_utama_kp'
            });var format_Desa_Kp_3 = new ol.format.GeoJSON();
var features_Desa_Kp_3 = format_Desa_Kp_3.readFeatures(json_Desa_Kp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Kp_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Desa_Kp_3.addFeatures(features_Desa_Kp_3);var lyr_Desa_Kp_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Desa_Kp_3, 
                style: style_Desa_Kp_3,
                title: '<img src="styles/legend/Desa_Kp_3.png" /> Desa_Kp'
            });

lyr_hasil_fix_0.setVisible(true);lyr_Perairan_darat_1.setVisible(true);lyr_jalan_utama_kp_2.setVisible(true);lyr_Desa_Kp_3.setVisible(true);
var layersList = [lyr_hasil_fix_0,lyr_Perairan_darat_1,lyr_jalan_utama_kp_2,lyr_Desa_Kp_3];
lyr_hasil_fix_0.set('fieldAliases', {'distance': 'distance', 'inner': 'inner', 'Bobot_jala': 'Bobot_jala', 'Bobot_j': 'Bobot_j', 'distance_2': 'distance_2', 'inner_2': 'inner_2', 'Bobot_sung': 'Bobot_sung', 'Bobot_s': 'Bobot_s', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GEOLOGI_': 'GEOLOGI_', 'GEOLOGI_ID': 'GEOLOGI_ID', 'KETERANGAN': 'KETERANGAN', 'REMARK': 'REMARK', 'LITOLOGI': 'LITOLOGI', 'KODE': 'KODE', 'STRKTR_BAT': 'STRKTR_BAT', 'Klas_geolg': 'Klas_geolg', 'Bobot_geol': 'Bobot_geol', 'Bobot_g': 'Bobot_g', 'ID': 'ID', 'JCODE': 'JCODE', 'JNAME': 'JNAME', 'area_2': 'area_2', 'perimeter_': 'perimeter_', 'HECTARES': 'HECTARES', 'Bobot_jnst': 'Bobot_jnst', 'Bobot_jt': 'Bobot_jt', 'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'area_3': 'area_3', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_1': 'FID_1', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'perimete_1': 'perimete_1', 'reclass': 'reclass', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Klas_lduse': 'Klas_lduse', 'Bobot_ldus': 'Bobot_ldus', 'Bobot_lu': 'Bobot_lu', 'DN': 'DN', 'Bobot_slop': 'Bobot_slop', 'Jml_bobot': 'Jml_bobot', 'Lok_altern': 'Lok_altern', 'ket': 'ket', });
lyr_Perairan_darat_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'AREA': 'AREA', 'CLAS1_NAM': 'CLAS1_NAM', 'FID_1': 'FID_1', 'LANDUSE_': 'LANDUSE_', 'LANDUSE_ID': 'LANDUSE_ID', 'PERIMETER': 'PERIMETER', 'reclass': 'reclass', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalan_utama_kp_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Desa_Kp_3.set('fieldAliases', {'DESA': 'DESA', 'KODE': 'KODE', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'STATUS_IDT': 'STATUS_IDT', 'STATUS_KOT': 'STATUS_KOT', 'STATUS_HUK': 'STATUS_HUK', 'SUMBER_AIR': 'SUMBER_AIR', 'IDT_94_95': 'IDT_94_95', 'IDT_95_96': 'IDT_95_96', 'KLASIFIKAS': 'KLASIFIKAS', 'TERMASUK_D': 'TERMASUK_D', 'LUAS_WILAY': 'LUAS_WILAY', 'SUMBER_PEN': 'SUMBER_PEN', 'SUB_SEKTOR': 'SUB_SEKTOR', 'KEMATIAN_B': 'KEMATIAN_B', 'KEMATIAN': 'KEMATIAN', 'BANYAKNYA_': 'BANYAKNYA_', 'latitude': 'latitude', 'longitude': 'longitude', 'Luas': 'Luas', 'Keliling': 'Keliling', });
lyr_hasil_fix_0.set('fieldImages', {'distance': 'TextEdit', 'inner': 'TextEdit', 'Bobot_jala': 'TextEdit', 'Bobot_j': 'TextEdit', 'distance_2': 'TextEdit', 'inner_2': 'TextEdit', 'Bobot_sung': 'TextEdit', 'Bobot_s': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GEOLOGI_': 'TextEdit', 'GEOLOGI_ID': 'TextEdit', 'KETERANGAN': 'TextEdit', 'REMARK': 'TextEdit', 'LITOLOGI': 'TextEdit', 'KODE': 'TextEdit', 'STRKTR_BAT': 'TextEdit', 'Klas_geolg': 'TextEdit', 'Bobot_geol': 'TextEdit', 'Bobot_g': 'TextEdit', 'ID': 'TextEdit', 'JCODE': 'TextEdit', 'JNAME': 'TextEdit', 'area_2': 'TextEdit', 'perimeter_': 'TextEdit', 'HECTARES': 'TextEdit', 'Bobot_jnst': 'TextEdit', 'Bobot_jt': 'TextEdit', 'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'area_3': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_1': 'TextEdit', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'perimete_1': 'TextEdit', 'reclass': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Klas_lduse': 'TextEdit', 'Bobot_ldus': 'TextEdit', 'Bobot_lu': 'TextEdit', 'DN': 'TextEdit', 'Bobot_slop': 'TextEdit', 'Jml_bobot': 'TextEdit', 'Lok_altern': 'TextEdit', 'ket': 'TextEdit', });
lyr_Perairan_darat_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'CLAS1_NAM': 'TextEdit', 'FID_1': 'TextEdit', 'LANDUSE_': 'TextEdit', 'LANDUSE_ID': 'TextEdit', 'PERIMETER': 'TextEdit', 'reclass': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalan_utama_kp_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Desa_Kp_3.set('fieldImages', {'DESA': 'TextEdit', 'KODE': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'STATUS_IDT': 'TextEdit', 'STATUS_KOT': 'TextEdit', 'STATUS_HUK': 'TextEdit', 'SUMBER_AIR': 'TextEdit', 'IDT_94_95': 'TextEdit', 'IDT_95_96': 'TextEdit', 'KLASIFIKAS': 'TextEdit', 'TERMASUK_D': 'TextEdit', 'LUAS_WILAY': 'TextEdit', 'SUMBER_PEN': 'TextEdit', 'SUB_SEKTOR': 'TextEdit', 'KEMATIAN_B': 'TextEdit', 'KEMATIAN': 'TextEdit', 'BANYAKNYA_': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Luas': 'TextEdit', 'Keliling': 'TextEdit', });
lyr_hasil_fix_0.set('fieldLabels', {'distance': 'no label', 'inner': 'no label', 'Bobot_jala': 'no label', 'Bobot_j': 'no label', 'distance_2': 'no label', 'inner_2': 'no label', 'Bobot_sung': 'no label', 'Bobot_s': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GEOLOGI_': 'no label', 'GEOLOGI_ID': 'no label', 'KETERANGAN': 'no label', 'REMARK': 'no label', 'LITOLOGI': 'no label', 'KODE': 'no label', 'STRKTR_BAT': 'no label', 'Klas_geolg': 'no label', 'Bobot_geol': 'no label', 'Bobot_g': 'no label', 'ID': 'no label', 'JCODE': 'no label', 'JNAME': 'no label', 'area_2': 'no label', 'perimeter_': 'no label', 'HECTARES': 'no label', 'Bobot_jnst': 'no label', 'Bobot_jt': 'no label', 'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'area_3': 'no label', 'CLAS1_NAM': 'no label', 'FID_1': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'perimete_1': 'no label', 'reclass': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Klas_lduse': 'no label', 'Bobot_ldus': 'no label', 'Bobot_lu': 'no label', 'DN': 'no label', 'Bobot_slop': 'no label', 'Jml_bobot': 'no label', 'Lok_altern': 'no label', 'ket': 'no label', });
lyr_Perairan_darat_1.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'AREA': 'no label', 'CLAS1_NAM': 'no label', 'FID_1': 'no label', 'LANDUSE_': 'no label', 'LANDUSE_ID': 'no label', 'PERIMETER': 'no label', 'reclass': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalan_utama_kp_2.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Desa_Kp_3.set('fieldLabels', {'DESA': 'header label', 'KODE': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'STATUS_IDT': 'no label', 'STATUS_KOT': 'no label', 'STATUS_HUK': 'no label', 'SUMBER_AIR': 'no label', 'IDT_94_95': 'no label', 'IDT_95_96': 'no label', 'KLASIFIKAS': 'no label', 'TERMASUK_D': 'no label', 'LUAS_WILAY': 'no label', 'SUMBER_PEN': 'no label', 'SUB_SEKTOR': 'no label', 'KEMATIAN_B': 'no label', 'KEMATIAN': 'no label', 'BANYAKNYA_': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Luas': 'no label', 'Keliling': 'no label', });
lyr_Desa_Kp_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});