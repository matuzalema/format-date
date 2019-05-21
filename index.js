const formatDate = (timeInSeconds) => {
	 if (typeof(timeInSeconds)==="undefined"){
			return "0s";
		}
	const seconds = Math.floor(timeInSeconds%3600%60);
	const minutes = Math.floor(timeInSeconds%3600/60);
	const hours = Math.floor(timeInSeconds/3600);

	const displaySeconds = function(){
		if(seconds!=0){
			return `${seconds}s`;
		} else {
			return "";
		}
	};

	const displayMinutes = function(){
		if (minutes==0 && hours==0 || hours!=0 && minutes==0){
			return "";
		} else {
			return `${minutes}m `;
		}
	};
		

	const displayHours = function(){
		if (hours==0){
			return "";
		} else {
			return `${hours}h `
		}
	};

  return (`${displayHours()}${displayMinutes()}${displaySeconds()}`).trim();
};


module.exports = formatDate;
