export default function calculateLayout(events) {
    // Convert start times to minutes and sort events

    const eventsWithStartInMinutes = events.map(event => ({
      ...event,
      startInMinutes: convertTimeToMinutes(event.start),
      endInMinutes: convertTimeToMinutes(event.start) + event.duration,
    })).sort((a, b) => a.startInMinutes - b.startInMinutes);
  
    // Calculate overlapping event groups
    let eventGroups = [];
    for (let event of eventsWithStartInMinutes) {
      let placed = false;
      for (let group of eventGroups) {
        if (group.end <= event.startInMinutes) { // Aucun chevauchement
          group.events.push(event);
          group.end = Math.max(group.end, event.endInMinutes);
          placed = true;
          break;
        }
      }
      if (!placed) { // Create a new group
        eventGroups.push({ events: [event], end: event.endInMinutes });
      }
    }
  
    // Calculate width and horizontal position
    const maxWidth = 100; // Total width available in percentage
    const layouts = [];
    for (let group of eventGroups) {
      const groupWidth = maxWidth / eventGroups.length;
      let horizontalPosition = 0;
  
      for (let event of group.events) {
        layouts.push({
          id: event.id,
          top: (event.startInMinutes / (24 * 60)) * 720, // Total height of calendar in pixels
          height: (event.duration / (24 * 60)) * 720,
          left: horizontalPosition,
          width: groupWidth,
        });
        horizontalPosition += groupWidth;
      }
    }
  
    return layouts;
  }
  
  function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }


  