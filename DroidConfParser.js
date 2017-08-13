
// Find talks
var talks = document.getElementsByClassName('view-content')[0].children

// Extract names
var getName = talk => talk.getElementsByClassName('views-field views-field-title')[0].getElementsByClassName('field-content')[0].children[0].innerHTML;
var getLink = talk => talk.getElementsByClassName('views-field views-field-title')[0].getElementsByClassName('field-content')[0].children[0].href;

var getDate = talk => talk.getElementsByClassName('views-field views-field-field-session-datetime')[0].getElementsByClassName('field-content')[0].children[0].innerHTML.split(" ")[0];
var getStartTime = talk => talk.getElementsByClassName('views-field views-field-field-session-datetime')[0].getElementsByClassName('field-content')[0].getElementsByClassName('date-display-start')[0].innerHTML;
var getEndTime = talk => talk.getElementsByClassName('views-field views-field-field-session-datetime')[0].getElementsByClassName('field-content')[0].getElementsByClassName('date-display-end')[0].innerHTML;

var getRoom = talk => talk.getElementsByClassName('views-field views-field-field-session-room')[0].getElementsByClassName('field-content')[0].children[0].innerHTML.split(" ")[1];



var parseTalk = talk => ({ topic : getName(talk), date : getDate(talk), starts : getStartTime(talk), ends : getEndTime(talk), room : getRoom(talk), link : getLink(talk) })


JSON.stringify(Array.from(talks).map(parseTalk))
