var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="manimlib.data";var REMOTE_PACKAGE_BASE="manimlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","bin",true,true);Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","container",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","files",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","utils",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","camera",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","mobject",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","types",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","svg",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","animation",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","scene",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","web",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib-0.1.11.dev87-py3.7.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:252469,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1158,2174,3373,4461,5168,6031,7196,8277,9461,10927,12099,13500,14304,15400,16769,18342,19636,20850,22108,23256,24349,25630,26874,28120,29320,30589,31858,33072,34295,35590,36947,38150,39092,40363,41075,42218,43313,44313,45398,46503,47556,48702,49813,51020,51885,52821,53906,54888,55977,57101,58193,59375,60430,61640,62721,63718,64713,65814,66952,67981,68971,70024,71090,72231,73013,74131,75106,76217,77141,77960,79010,80068,81042,82140,82949,83935,85013,86031,87112,88252,89408,90430,91449,92571,93700,94588,95772,96988,97940,99079,100173,101191,102182,103366,104374,105519,106478,107677,108741,109844,110866,111765,112838,113975,115080,116308,117391,118543,119625,120804,121938,122977,124074,125047,125974,127009,128142,129229,130518,131669,132443,133296,134059,135004,136053,137102,138081,139326,140325,141459,142562,143614,144654,145844,147006,148161,149358,150259,151423,152602,153659,154706,155903,157095,158058,159175,159950,160855,161950,163110,164213,165033,166159,167329,168363,169344,170483,171601,172610,173792,174819,175755,176696,177730,178691,179772,180783,181939,182977,184087,185174,186234,187237,188423,189580,190709,191811,192847,193940,195031,196059,197198,198036,199068,200054,201139,202142,203276,204357,205452,206570,207542,208634,209405,210455,211685,212665,213821,214724,215899,216870,217945,218941,220073,221054,222059,223166,224319,225263,226367,227495,228561,229625,230510,231573,232511,233336,234544,235552,236544,237582,238560,239528,240515,241537,242691,243764,244799,246128,247358,248708,250200,251601,252409],sizes:[1158,1016,1199,1088,707,863,1165,1081,1184,1466,1172,1401,804,1096,1369,1573,1294,1214,1258,1148,1093,1281,1244,1246,1200,1269,1269,1214,1223,1295,1357,1203,942,1271,712,1143,1095,1e3,1085,1105,1053,1146,1111,1207,865,936,1085,982,1089,1124,1092,1182,1055,1210,1081,997,995,1101,1138,1029,990,1053,1066,1141,782,1118,975,1111,924,819,1050,1058,974,1098,809,986,1078,1018,1081,1140,1156,1022,1019,1122,1129,888,1184,1216,952,1139,1094,1018,991,1184,1008,1145,959,1199,1064,1103,1022,899,1073,1137,1105,1228,1083,1152,1082,1179,1134,1039,1097,973,927,1035,1133,1087,1289,1151,774,853,763,945,1049,1049,979,1245,999,1134,1103,1052,1040,1190,1162,1155,1197,901,1164,1179,1057,1047,1197,1192,963,1117,775,905,1095,1160,1103,820,1126,1170,1034,981,1139,1118,1009,1182,1027,936,941,1034,961,1081,1011,1156,1038,1110,1087,1060,1003,1186,1157,1129,1102,1036,1093,1091,1028,1139,838,1032,986,1085,1003,1134,1081,1095,1118,972,1092,771,1050,1230,980,1156,903,1175,971,1075,996,1132,981,1005,1107,1153,944,1104,1128,1066,1064,885,1063,938,825,1208,1008,992,1038,978,968,987,1022,1154,1073,1035,1329,1230,1350,1492,1401,808,60],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_manimlib.data")}Module["addRunDependency"]("datafile_manimlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/bin/manim",start:0,end:172,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/media_dir.txt",start:172,end:177,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/extract_scene.py",start:177,end:5111,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/tex_template.tex",start:5111,end:5605,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/__init__.py",start:5605,end:7378,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/config.py",start:7378,end:16125,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/ctex_template.tex",start:16125,end:16619,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/constants.py",start:16619,end:24089,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/imports.py",start:24089,end:27684,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/container/container.py",start:27684,end:28392,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/PiCreatures_plain.svg",start:28392,end:30229,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_thought.svg",start:30229,end:31572,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_speech.svg",start:31572,end:32288,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/images.py",start:32288,end:32902,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/paths.py",start:32902,end:34326,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/sounds.py",start:34326,end:35065,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/color.py",start:35065,end:37806,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/file_ops.py",start:37806,end:39811,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/tex_file_writing.py",start:39811,end:42727,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/bezier.py",start:42727,end:47287,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/iterables.py",start:47287,end:50405,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/simple_functions.py",start:50405,end:52682,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/rate_functions.py",start:52682,end:54848,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/space_ops.py",start:54848,end:60716,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/config_ops.py",start:60716,end:63517,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/strings.py",start:63517,end:65380,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/multi_camera.py",start:65380,end:67620,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/mapping_camera.py",start:67620,end:72123,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/camera.py",start:72123,end:88676,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/three_d_camera.py",start:88676,end:97183,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/moving_camera.py",start:97183,end:100289,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_dimensions.py",start:100289,end:104571,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/numbers.py",start:104571,end:109177,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/functions.py",start:109177,end:112271,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/coordinate_systems.py",start:112271,end:125714,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/frame.py",start:125714,end:126757,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject.py",start:126757,end:163977,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/number_line.py",start:163977,end:170195,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/geometry.py",start:170195,end:194889,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/value_tracker.py",start:194889,end:196286,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/shape_matchers.py",start:196286,end:198518,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/changing.py",start:198518,end:201720,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_utils.py",start:201720,end:203292,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/probability.py",start:203292,end:211177,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject_update_utils.py",start:211177,end:213771,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/vector_field.py",start:213771,end:225251,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/matrix.py",start:225251,end:231054,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_shading_utils.py",start:231054,end:232455,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/point_cloud_mobject.py",start:232455,end:240781,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/vectorized_mobject.py",start:240781,end:273988,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/image_mobject.py",start:273988,end:277668,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/brace.py",start:277668,end:282444,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/tex_mobject.py",start:282444,end:293287,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/svg_mobject.py",start:293287,end:308960,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/drawings.py",start:308960,end:342686,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/numbers.py",start:342686,end:344408,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/indication.py",start:344408,end:352285,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/update.py",start:352285,end:353521,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/growing.py",start:353521,end:354772,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/animation.py",start:354772,end:359941,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/transform.py",start:359941,end:369719,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/specialized.py",start:369719,end:372345,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/fading.py",start:372345,end:376379,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/composition.py",start:376379,end:381317,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/rotation.py",start:381317,end:382735,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/creation.py",start:382735,end:387881,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/movement.py",start:387881,end:390101,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/zoomed_scene.py",start:390101,end:393614,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/media_dir.txt",start:393614,end:393619,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/sample_space_scene.py",start:393619,end:398921,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/scene.py",start:398921,end:417149,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/three_d_scene.py",start:417149,end:423582,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/graph_scene.py",start:423582,end:443168,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/vector_space_scene.py",start:443168,end:461681,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/reconfigurable_scene.py",start:461681,end:463728,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/moving_camera_scene.py",start:463728,end:464898,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/utils.py",start:464898,end:465715,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_scene.py",start:465715,end:467381,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/PKG-INFO",start:467381,end:476392,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/pbr.json",start:476392,end:476440,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/dependency_links.txt",start:476440,end:476441,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/entry_points.txt",start:476441,end:476482,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/top_level.txt",start:476482,end:476491,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/requires.txt",start:476491,end:476504,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/SOURCES.txt",start:476504,end:479305,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev87-py3.7.egg-info/not-zip-safe",start:479305,end:479306,audio:0}],remote_package_size:256565,package_uuid:"db34bb1b-f621-4fc1-b38c-39fbb52783c8"})})();