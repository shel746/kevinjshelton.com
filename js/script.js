//can set color for cities
var toc = [ {
        title: "Where I'm From",
        color: "red"
      }, {
        title: "Places I've Visited",
        color: "blue"
      }, {
        title: "Planned visit (Summer 2017)",
        color: "black"
      }, {
        title: "Where I am Now",
        color: "yellow"
      }];
// add - Seattle, Banff, Vancouver, Whistler, Tampa, New Orleans, Boston, New York (Home) - yellow, Iceland, Azores, Buenos Aires, Chalten, Santiago, Jackson Hole, Detroit, Montreal
var cities = [{
      title: "Paris",
      latitude: 48.8567,
      longitude: 2.3510
    }, {
      title: "Rome",
      latitude: 41.8955,
      longitude: 12.4823
    }, {
      title: "Los Angeles",
      latitude: 34.05,
      longitude: -118.233333,
      color: "yellow"
    }, {
      title: "Los Gatos",
      latitude: 37.233333,
      longitude: -121.95,
      color: "red"
    }, {
      title: "London",
      latitude: 51.5,
      longitude: 0.116667
    }, {
      title: "Florence",
      latitude: 43.766667,
      longitude: 11.25
    }, {
      title: "Normandy",
      latitude: 48.866667,
      longitude: 0.166667
    }, {
      title: "Cancun",
      latitude: 21.15,
      longitude: -86.90
    }, {
      title: "Seattle",
      latitude: 47.6,
      longitude: -122.316667
    }, {
      title: "Yellowstone",
      latitude: 44.416667,
      longitude: -110.583333
    }, {
      title: "Yosemite",
      latitude: 37.85,
      longitude: -119.533333
    }, {
      title: "Grand Canyon",
      latitude: 36.1,
      longitude: -112.1
    }, {
      title: "Lake Tahoe",
      latitude: 39.083333,
      longitude: -120.016667
    }, {
      title: "Las Vegas",
      latitude: 36.166667,
      longitude: -115.133333
    }, {
      title: "Austin",
      latitude: 30.266667,
      longitude: -97.733333
    }, {
      title: "Purdue University",
      latitude: 40.45,
      longitude: -87.05
    }, {
      title: "Chicago",
      latitude: 41.866667,
      longitude: -87.68
    }, {
      title: "Nashville",
      latitude: 36.15,
      longitude: -86.766667
    }, {
      title: "New York",
      latitude: 40.7,
      longitude: -73.9
    }, {
      title: "Boston",
      latitude: 42.35,
      longitude: -71.05
    }, {
      title: "Minneapolis",
      latitude: 44.966667,
      longitude: -93.25
    }, {
      title: "Orlando",
      latitude: 28.533333,
      longitude: -81.366667
    }, {
      title: "Honolulu",
      latitude: 21.35,
      longitude: -157.85
    }, {
      title: "Lahaina",
      latitude: 20.866667,
      longitude: -156.666667
    }, {
      title: "Juneau",
      latitude: 58.3,
      longitude: -134.416667
    }, {
      title: "Anchorage",
      latitude: 61.216667,
      longitude: -149.9
    }, {
      title: "Denali National Park",
      latitude: 63.1,
      longitude: -151.183333
    }, {
      title: "Vancouver",
      latitude: 49.266667,
      longitude: -123.116667
    }, {
      title: "Whistler",
      latitude: 50.1,
      longitude: -122.95
    }, {
      title: "Cabo San Lucas",
      latitude: 22.89,
      longitude: -109.91
    }, {
      title: "Washington D.C.",
      latitude: 38.9072,
      longitude: -77.036
    }, {
      title: "Whistler",
      latitude: 50.1,
      longitude: -122.95
    },{
      title: "Singapore",
      latitude: 1.4,
      longitude: 103.816667
    }, {
      title: "Kuala Lumpur",
      latitude: 3.133333,
      longitude: 101.683333
    }, {
      title: "Phuket",
      latitude: 7.95,
      longitude: 98.4
    }, {
      title: "Bangkok",
      latitude: 13.75,
      longitude: 100.5
    }, {
      title: "Phnom Penh",
      latitude: 11.533333,
      longitude: 104.883333
    }, {
      title: "Ho Chi Minh City",
      latitude: 10.816667,
      longitude: 106.616667
    }, {
      title: "Hanoi",
      latitude: 21.016667,
      longitude: 105.833333
    }, {
      title: "Hong Kong",
      latitude: 22.383333,
      longitude: 114.2
    }, {
      title: "Bali",
      latitude: -8.3405,
      longitude: 115.09
    }];

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    "theme": "none",
    //pathToImages: "http://www.amcharts.com/lib/3/images/",
    fontSize: "10px",

    "balloon": {
        "adjustBorderColor": true,
        "color": "#000000",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF",
        "balloonText": "[[title]]"
        //"enabled": false
    },

    imagesSettings: {
        color:"blue"
    },

zoomControl:{buttonFillColor:"#3CB371"},

areasSettings:{unlistedAreasColor:"#3CB371"},

    dataProvider: {
        map: "worldLow",
        images: [],
    },


  legend: {
      width: 240,
      marginRight:27,
      marginLeft:27,
      equalWidths:true,
      maxColumns: 1,
      backgroundAlpha: 0.5,
      backgroundColor: "#FFFFFF",
      borderColor: "#ffffff",
      borderAlpha: 1,
      right: 0,
      color: "#000000",
      horizontalGap: 10,
      switchable: true,
      data: [],
  }
    
});

//map.addTitle("Travels", 30, "#000000", 1, true);

//adds the cities in the array cities to the map
setTimeout(
  function() 
  {
      for(var i = 0; i < cities.length; i ++){
        var city = cities[i];
        console.dir(city.title);    //prints out the city name
        //console.dir(city.color);
        city.svgPath = targetSVG;
        city.zoomLevel = 5;
        city.scale = 0.5;
        
        // add city object to map
        map.dataProvider.images.push(city);
        map.validateData();
        //map.legend.validateNow();
      }
  }, 1);

setTimeout(
  function(){
    for(var i = 0; i < toc.length; i ++){
      var newtoc = toc[i];
      console.dir(newtoc.title);
      map.legend.data.push(newtoc);
      map.validateData();
    }
    console.dir(map.legend.data[0]);
  }, 1);

AmCharts.myHandleLegendClick = function (event) {
    var groupId = event.dataItem.groupId;
    if (undefined !== event.dataItem.hidden && event.dataItem.hidden) {
        event.dataItem.hidden = false;
        map.showGroup(groupId);
    }
    else {
        event.dataItem.hidden = true;
        map.hideGroup(groupId);
    }
    map.legend.validateNow();
}

