$(document).ready(function () {
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay",
    },

    defaultDate: "2023-10-08", // Updated to current year for relevance
    navLinks: true,
    selectable: true,
    selectHelper: true,
    select: function (start, end) {
      var title = prompt("Event Title:");
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end,
        };
        $("#calendar").fullCalendar("renderEvent", eventData, true);
      }
      $("#calendar").fullCalendar("unselect");
    },
    editable: true,
    eventLimit: true,
    events: [
      {
        title: "Magnetic Reconnection Observation",
        start: "2023-10-01",
      },
      {
        title: "Data Analysis Session",
        start: "2023-10-03",
        end: "2023-10-05",
      },
      {
        title: "Team Meeting",
        start: "2023-10-06T10:00:00",
        end: "2023-10-06T14:00:00",
      },
      {
        title: "Research Presentation",
        start: "2023-10-07T14:00:00",
      },
      {
        title: "Instrument Calibration",
        start: "2023-10-08T09:00:00",
      },
      {
        title: "Workshop on Magnetic Fields",
        start: "2023-10-09",
        end: "2023-10-10",
      },
      {
        title: "External Consultation",
        start: "2023-10-11T13:00:00",
      },
      {
        title: "Alert Review",
        start: "2023-10-12T15:00:00",
      },
      {
        title: "Click for OpenAI Swagger",
        url: "https://app.swaggerhub.com/apis/CHYRKOUM/Magnetic_Reconnection_Prediction_API/1.0.0",
        start: "2023-10-13",
      },
    ],
  });
});
