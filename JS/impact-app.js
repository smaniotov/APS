function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularidade', "Amor"],
          ['Germany', 200,233],
          ['United States', 300, 400],
          ['Brazil', 400, 400],
          ['Canada', 500, 400],
          ['France', 600, 400],
          ['RU', 700, 400],
          ['Argentina', 200, 21321]
        ]);

      var options = {
        region: '005',
        colorAxis:{color: ["black", "blue"]}
      };

        var chart = new google.visualization.GeoChart($('regions_div'));

        chart.draw(data, options);
      }