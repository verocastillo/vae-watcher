// Store our API and perform a GET request

const text1 = '[{"statename":"Alabama","state":"AL","latitude":"32.318231","longitude":"-86.902298","janssen":"3","moderna":"141","pfizer":"145","total":"289"},{"statename":"Alaska","state":"AK","latitude":"63.588753","longitude":"-154.493062","janssen":"1","moderna":"57","pfizer":"109","total":"166"},{"statename":"Arizona","state":"AZ","latitude":"34.048928","longitude":"-111.093731","janssen":"6","moderna":"259","pfizer":"382","total":"647"},{"statename":"Arkansas","state":"AR","latitude":"35.20105","longitude":"-91.831833","janssen":"1","moderna":"117","pfizer":"147","total":"265"},{"statename":"California","state":"CA","latitude":"36.778261","longitude":"-119.417932","janssen":"28","moderna":"1203","pfizer":"1327","total":"2558"},{"statename":"Colorado","state":"CO","latitude":"39.550051","longitude":"-105.782067","janssen":"42","moderna":"330","pfizer":"241","total":"613"},{"statename":"Connecticut","state":"CT","latitude":"41.603221","longitude":"-73.087749","janssen":"80","moderna":"258","pfizer":"184","total":"522"},{"statename":"Delaware","state":"DE","latitude":"38.910832","longitude":"-75.52767","janssen":"1","moderna":"26","pfizer":"38","total":"65"},{"statename":"District of Columbia","state":"DC","latitude":"38.905985","longitude":"-77.033418","janssen":"7","moderna":"28","pfizer":"20","total":"55"},{"statename":"Florida","state":"FL","latitude":"27.664827","longitude":"-81.515754","janssen":"43","moderna":"801","pfizer":"792","total":"1636"},{"statename":"Georgia","state":"GA","latitude":"32.157435","longitude":"-82.907123","janssen":"5","moderna":"298","pfizer":"322","total":"625"},{"statename":"Hawaii","state":"HI","latitude":"19.898682","longitude":"-155.665857","janssen":"1","moderna":"55","pfizer":"77","total":"132"},{"statename":"Idaho","state":"ID","latitude":"44.068202","longitude":"-114.742041","janssen":"1","moderna":"88","pfizer":"67","total":"156"},{"statename":"Illinois","state":"IL","latitude":"40.633125","longitude":"-89.398528","janssen":"40","moderna":"534","pfizer":"556","total":"1130"},{"statename":"Indiana","state":"IN","latitude":"40.551217","longitude":"-85.602364","janssen":"159","moderna":"445","pfizer":"536","total":"1140"},{"statename":"Iowa","state":"IA","latitude":"41.878003","longitude":"-93.097702","janssen":"23","moderna":"209","pfizer":"103","total":"335"},{"statename":"Kansas","state":"KS","latitude":"39.011902","longitude":"-98.484246","janssen":"2","moderna":"151","pfizer":"139","total":"292"},{"statename":"Kentucky","state":"KY","latitude":"37.839333","longitude":"-84.270018","janssen":"9","moderna":"218","pfizer":"212","total":"439"},{"statename":"Louisiana","state":"LA","latitude":"31.244823","longitude":"-92.145024","janssen":"19","moderna":"119","pfizer":"173","total":"311"},{"statename":"Maine","state":"ME","latitude":"45.253783","longitude":"-69.445469","janssen":"6","moderna":"159","pfizer":"69","total":"234"},{"statename":"Maryland","state":"MD","latitude":"39.045755","longitude":"-76.641271","janssen":"47","moderna":"343","pfizer":"300","total":"690"},{"statename":"Massachusetts","state":"MA","latitude":"42.407211","longitude":"-71.382437","janssen":"32","moderna":"439","pfizer":"366","total":"837"},{"statename":"Michigan","state":"MI","latitude":"44.314844","longitude":"-85.602364","janssen":"7","moderna":"368","pfizer":"536","total":"911"},{"statename":"Minnesota","state":"MN","latitude":"46.729553","longitude":"-94.6859","janssen":"31","moderna":"273","pfizer":"297","total":"601"},{"statename":"Mississippi","state":"MS","latitude":"32.354668","longitude":"-89.398528","janssen":"8","moderna":"88","pfizer":"53","total":"149"},{"statename":"Missouri","state":"MO","latitude":"37.964253","longitude":"-91.831833","janssen":"12","moderna":"267","pfizer":"274","total":"553"},{"statename":"Montana","state":"MT","latitude":"46.879682","longitude":"-110.362566","janssen":"1","moderna":"131","pfizer":"130","total":"261"},{"statename":"Nebraska","state":"NE","latitude":"41.492537","longitude":"-99.901813","janssen":"14","moderna":"134","pfizer":"115","total":"263"},{"statename":"Nevada","state":"NV","latitude":"38.80261","longitude":"-116.419389","janssen":"5","moderna":"103","pfizer":"86","total":"194"},{"statename":"New Hampshire","state":"NH","latitude":"43.193852","longitude":"-71.572395","janssen":"5","moderna":"123","pfizer":"74","total":"202"},{"statename":"New Jersey","state":"NJ","latitude":"40.058324","longitude":"-74.405661","janssen":"30","moderna":"403","pfizer":"395","total":"828"},{"statename":"New Mexico","state":"NM","latitude":"34.97273","longitude":"-105.032363","janssen":"7","moderna":"86","pfizer":"134","total":"227"},{"statename":"New York","state":"NY","latitude":"43.299428","longitude":"-74.217933","janssen":"102","moderna":"901","pfizer":"765","total":"1768"},{"statename":"North Carolina","state":"NC","latitude":"35.759573","longitude":"-79.0193","janssen":"24","moderna":"297","pfizer":"420","total":"741"},{"statename":"North Dakota","state":"ND","latitude":"47.551493","longitude":"-101.002012","janssen":"1","moderna":"65","pfizer":"35","total":"101"},{"statename":"Ohio","state":"OH","latitude":"40.417287","longitude":"-82.907123","janssen":"49","moderna":"671","pfizer":"339","total":"1059"},{"statename":"Oklahoma","state":"OK","latitude":"35.007752","longitude":"-97.092877","janssen":"10","moderna":"141","pfizer":"178","total":"329"},{"statename":"Oregon","state":"OR","latitude":"43.804133","longitude":"-120.554201","janssen":"3","moderna":"205","pfizer":"151","total":"359"},{"statename":"Pennsylvania","state":"PA","latitude":"41.203322","longitude":"-77.194525","janssen":"9","moderna":"436","pfizer":"549","total":"994"},{"statename":"Puerto Rico","state":"PR","latitude":"18.220833","longitude":"-66.590149","janssen":"1","moderna":"74","pfizer":"120","total":"194"},{"statename":"Rhode Island","state":"RI","latitude":"41.580095","longitude":"-71.477429","janssen":"1","moderna":"52","pfizer":"59","total":"112"},{"statename":"South Carolina","state":"SC","latitude":"33.836081","longitude":"-81.163725","janssen":"11","moderna":"87","pfizer":"181","total":"279"},{"statename":"South Dakota","state":"SD","latitude":"43.969515","longitude":"-99.901813","janssen":"2","moderna":"70","pfizer":"44","total":"116"},{"statename":"Tennessee","state":"TN","latitude":"35.517491","longitude":"-86.580447","janssen":"8","moderna":"240","pfizer":"272","total":"520"},{"statename":"Texas","state":"TX","latitude":"31.968599","longitude":"-99.901813","janssen":"77","moderna":"978","pfizer":"725","total":"1780"},{"statename":"Utah","state":"UT","latitude":"39.32098","longitude":"-111.093731","janssen":"9","moderna":"125","pfizer":"93","total":"227"},{"statename":"Vermont","state":"VT","latitude":"44.558803","longitude":"-72.577841","janssen":"1","moderna":"55","pfizer":"48","total":"104"},{"statename":"Virginia","state":"VA","latitude":"37.431573","longitude":"-78.656894","janssen":"53","moderna":"279","pfizer":"389","total":"721"},{"statename":"Washington","state":"WA","latitude":"47.751074","longitude":"-120.740139","janssen":"7","moderna":"339","pfizer":"275","total":"621"},{"statename":"West Virginia","state":"WV","latitude":"38.597626","longitude":"-80.454903","janssen":"1","moderna":"131","pfizer":"87","total":"218"},{"statename":"Wisconsin","state":"WI","latitude":"43.78444","longitude":"-88.787868","janssen":"4","moderna":"360","pfizer":"279","total":"643"},{"statename":"Wyoming","state":"WY","latitude":"43.075968","longitude":"-107.290284","janssen":"1","moderna":"32","pfizer":"20","total":"52"}]'

const text = text1 
const myArr = JSON.parse(text)

var myMap;

var spotTotal = [];
  for (var cont = 0; cont < myArr.length; cont++) {
    var statename = myArr[cont].statename
    var state = myArr[cont].state
    var latitude = myArr[cont].latitude
    var longitude = myArr[cont].longitude
    var latitudelongitude = [latitude,longitude]
    var total = myArr[cont].total;
    var color = "red";
    spotTotal.push(
      L.circle(latitudelongitude, {
        stroke: false,
        fillOpacity: 0.5,
        color: "white",
        fillColor: color,
        radius: total*200
      }).bindPopup("<h3>" + statename + "(" + state + ")" + "</h3><hr><p>"  + "Total Vax: " + total + "</p>")
    )
  }
var Totalmap = L.layerGroup(spotTotal)
createMap(Totalmap);

  // Create our map, giving it the streetmap and earthquakes layers to display on load
  myMap = L.map("map", {
    center: [
      //-23.5489, -46.6388
      -10,-55
    ],
    zoom: 3,
    layers: [streetmap]
  });

  // Function to create layers mapping
function createMap(Totalmap) {
  // Three differents maps (Grayscale, Satellite and Outdoors)
  var grayscale = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,id: "light-v10",accessToken: API_KEY});
  var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,maxZoom: 18,zoomOffset: -1,id: "mapbox/satellite-v9",accessToken: API_KEY});
  var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,id: "outdoors-v11",accessToken: API_KEY});
  
  var spotPfizer = [];
    for (var cont = 0; cont < myArr.length; cont++) {
      var statename = myArr[cont].statename
      var state = myArr[cont].state
      var latitude = myArr[cont].latitude
      var longitude = myArr[cont].longitude
      var latitudelongitude = [latitude,longitude]
      var pfizer = myArr[cont].pfizer
      var color = "blue";
      spotPfizer.push(
        L.circle(latitudelongitude, {
          stroke: false,
          fillOpacity: 0.5,
          color: "white",
          fillColor: color,
          radius: pfizer*200
        }).bindPopup("<h3>" + statename + "(" + state + ")" + "</h3><hr><p>"  + "Pfizer Vax: " + pfizer + "</p>")
      )
    }
  var Pfizermap = L.layerGroup(spotPfizer)  
  
  var spotModerna = [];
  for (var cont = 0; cont < myArr.length; cont++) {
    var statename = myArr[cont].statename
    var state = myArr[cont].state
    var latitude = myArr[cont].latitude
    var longitude = myArr[cont].longitude
    var latitudelongitude = [latitude,longitude]
    var moderna = myArr[cont].moderna
    var color = "green";
    spotModerna.push(
      L.circle(latitudelongitude, {
        stroke: false,
        fillOpacity: 0.5,
        color: "white",
        fillColor: color,
        radius: moderna*200
      }).bindPopup("<h3>" + statename + "(" + state + ")" + "</h3><hr><p>"  + "Moderna Vax: " + moderna + "</p>")
    )
  }
  var Modernamap = L.layerGroup(spotModerna)  

  var spotJanssen = [];
  for (var cont = 0; cont < myArr.length; cont++) {
    var statename = myArr[cont].statename
    var state = myArr[cont].state
    var latitude = myArr[cont].latitude
    var longitude = myArr[cont].longitude
    var latitudelongitude = [latitude,longitude]
    var janssen = myArr[cont].janssen
    var color = "yellow";
    spotJanssen.push(
      L.circle(latitudelongitude, {
        stroke: false,
        fillOpacity: 0.5,
        color: "white",
        fillColor: color,
        radius: janssen*200
      }).bindPopup("<h3>" + statename + "(" + state + ")" + "</h3><hr><p>"  + "Janssen Vax: " + janssen + "</p>")
    )
  }
  var Janssenmap = L.layerGroup(spotJanssen)

    // Define setup maps
  var baseMaps = {"Grayscale": grayscale,"Satellite": satellite,"Outdoors" : outdoors};
  var overlayMaps = {"Total Vax": Totalmap, "Pfizer": Pfizermap, "Moderna": Modernamap, "Janssen": Janssenmap}; 
  var myMap = L.map("map", {center: [37.60, -98.23],zoom: 4.5,layers: [grayscale, Totalmap, Pfizermap, Modernamap, Janssenmap]}); 

  //Layer control
  L.control.layers(baseMaps, overlayMaps, {collapsed: false,position: 'topright'}).addTo(myMap);
}