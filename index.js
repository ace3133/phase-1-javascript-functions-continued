// Define saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define wrapAdjective function
  function wrapAdjective(wrapper = '*') {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Example usage:
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun('hike')); // Output: "This Saturday, I want to hike!"
  
  console.log(mondayWork()); // Output: "This Monday, I have to go to the office."
  console.log(mondayWork('work from home')); // Output: "This Monday, I will work from home."
  
  const highlightStar = wrapAdjective('*');
  console.log(highlightStar('amazing')); // Output: "You are *amazing*!"
  
  const highlightDoublePipe = wrapAdjective('||');
  console.log(highlightDoublePipe('awesome')); // Output: "You are ||awesome||!"
  