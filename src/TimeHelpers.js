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

export function formatDateInputToLocalizableString(dateString){
	var dateElements = dateString.split('-');
	return [ dateElements[1], dateElements[2], dateElements[0]].join('-');
}

export function formatDateToLocalizableString(date){
	var day = date.getDate(),
	month = date.getMonth() + 1,
	year = date.getFullYear();

	if(day < 10) day = "0" + day;
	if(month < 10) month = "0" + month;
	return [ month, day, year].join("-");
}

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}
