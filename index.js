const formatDate = (timeInSeconds) => {
	const hours = Math.floor(timeInSeconds/3600);
	const minutes = Math.floor(timeInSeconds%3600/60);
	const seconds = Math.floor(timeInSeconds%3600%60);

	const displaySeconds = seconds===0 ? "":`${seconds}s`;
	const displayMinutes = minutes===0 ? "":`${minutes}h`;
	const displayHours = hours===0 ? "":`${hours}h`; 

	// if (timeInSeconds<60){
	// 	return `${seconds}s`;
	// } else if (isNaN(timeInSeconds)){
	// 	return `0s`;
	// } else if (hour===0){
	// 	return hour="";
	// } else if (seconds===0){
	// 	return `${day}d ${hour}h ${minutes}m`;
	// } else {
	// 	return;
	// }

  return `${displayHours}${displayMinutes}${displaySeconds}`;
};


module.exports = formatDate;
