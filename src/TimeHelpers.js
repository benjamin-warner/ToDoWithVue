export function getFormattedDate(date){
	var day = date.getDate(),
		month = date.getMonth() + 1,
		year = date.getFullYear();

	if(day < 10) day = "0" + day;
	if(month < 10) month = "0" + month;
	return [ year, month, day].join("-");
}

export function isDateInThePast(date){
	var todayInUnix = Date.now();
	var dateToCheckInUnix = date.getTime();
	return todayInUnix - dateToCheckInUnix >= 0;
}

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
