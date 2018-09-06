	var d = new Date();
	var month = d.getMonth();
	var month_name=['January','February','March','April','May','June','July','August','September','October','November','December'];
	var year = d.getFullYear();//2018
	var first_date= month_name[month]+ " " + 1 + " " + year;
	// August 1 2018
	var tmp = new Date(first_date).toDateString();
	// Wed Aug 01 2018
	var first_day = tmp.substring(0,3);
	var day_name = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
	var day_no = 0;
	var days = new Date(year, month+1,0).getDate();
	var calendar ="";
	var btnPrev,btnNext;
function main(){
	var mainNode =document.getElementById("calendar-dates");
	var range = document.createRange();
	range.selectNodeContents(mainNode);
	range.deleteContents();

if (btnPrev == undefined) {
		btnPrev = document.createElement('button');

		document.getElementById("calendar-header").appendChild(btnPrev);
		btnPrev.id="btnPrevid";
		document.getElementById("btnPrevid").innerHTML ="Önceki Ay";
		btnPrev.onclick = function(){prevMonth();} 
	}
if (btnNext == undefined) {
	btnNext = document.createElement('button');
	document.getElementById("calendar-header").appendChild(btnNext);
	btnNext.id = "btnNextid";
	document.getElementById("btnNextid").innerHTML="Sonraki Ay";
	btnNext.onclick = function(){nextMonth();} 
}
	calendar =get_calendar(day_no,days,day_name);
	document.getElementById("calendar-month-year").innerHTML = month_name[month]+ " " + year;
	mainNode.appendChild(calendar);
}
function get_calendar(day_no,days,day_name){
var table = document.createElement('table');
	var tr =  document.createElement('tr');
	table =bicimAyarla(table);
	//Gün isimleri yazdırma
	for (var c = 0; c <=6; c++) {
		var th = document.createElement('th');
		th.innerHTML = day_name[c];
		tr.appendChild(th);		
	}
	table.appendChild(tr);
	tr = document.createElement('tr');
	var c;
	first_date= month_name[month]+ " " + 1 + " " + year;
	tmp = new Date(first_date).toDateString();
	first_day = tmp.substring(0,3);
	day_no = day_name.indexOf(first_day);
	days = new Date(year, month+1,0).getDate();
	var previousMonthDays = new Date(year, month,0).getDate();
	var previousDays= previousMonthDays - day_no;
	for (c = 0; c <= 6; c++) {
		
		if (c== day_no) {
			break;
		}
			var td = document.createElement('td');
			td.innerHTML=previousDays;
			tr.appendChild(td);
			previousDays= previousDays+1;
	}
	 count ="1";
	for (;c<=6;c++) {
		var td = document.createElement('td');

		td.onclick = function(){
					document.getElementById("textBox").value =this.innerHTML+"/"+(parseInt(month)+1)+"/"+year;
					table= undefined;	
					}


		td.innerHTML = count;
		count++;
		tr.appendChild(td);
	}
	table.appendChild(tr);
	for (var r = 3; r<=7; r++) {
		tr = document.createElement('tr');
		for (var c = 0; c<=6; c++) {
			var nextDays= 1;
			
			var td= document.createElement('td');
			td.onclick = function(){
					document.getElementById("textBox").value =this.innerHTML+"/"+(parseInt(month)+1)+"/"+year;	
					}
			td.innerHTML= count;
			count++;
			tr.appendChild(td);
			if(count>days){
				for(; c<6; c++){
					var td = document.createElement('td');
					td.innerHTML=nextDays;
					tr.appendChild(td);
					nextDays++;
				}	
				table.appendChild(tr);
				return table;
			}
		}
		table.appendChild(tr);
	}
	document.getElementById("calendar-container") = undefined;
}
function bicimAyarla(table){
	table.id="tablom";
	return table;
}
function nextMonth(){
	count=1;
	if (month==11) {
		month=0;
		year=year+1;
	}
	else{
		month=month+1;	
	}
	main();
}
function prevMonth(){
	count=1;
	if (month==0){
		month=11;
		year=year-1;
	}
	else{
		month=month-1;
	}
	main();
}