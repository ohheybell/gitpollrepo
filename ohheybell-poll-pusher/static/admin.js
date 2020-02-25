    var dataPoints = [
      { label: "Bocchie", y: 0 },
      { label: "Alec Baldwin as Trump", y: 0 },
      { label: "Lizzo", y: 0 },
      { label: "Andy Cohen", y: 0 },
    ]

    var chartContainer = document.querySelector('#chartContainer');

    if (chartContainer) {
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "theme2",
        data: [
          {
            type: "column",
            dataPoints: dataPoints
          }
        ]
      });

      chart.render();
    }

    Pusher.logToConsole = true;

    // Configure Pusher instance
    const pusher = new Pusher('953695', {
      cluster: 'us2',
      encrypted: true
    });

    // Subscribe to poll trigger
    var channel = pusher.subscribe('poll');

    // Listen to vote event
    channel.bind('vote', function(data) {
      dataPoints = dataPoints.map(dataPoint => {
        if(dataPoint.label == data[4].name[0]) {
          dataPoint.y += 10;
        }

        return dataPoint
      });

      // Re-render chart
      chart.render()
    });
