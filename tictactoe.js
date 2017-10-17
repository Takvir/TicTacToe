//JS code goes here
//var cellNum = document.getElecmentByID('cell1');
//console.log(window.document.getElecmentByID('cell1'));

var bool = 0;
var state = [0,0,0,0,0,0,0,0,0];
var p1Wins = 0;
var p2Wins = 0;
var p1Lost = 0;
var p2Lost = 0;
var count = 0;

function point(){
	if (bool==1)
	{
		p1Wins++;
		p2Lost++;
	}
	else
	{
		p2Wins++;
		p1Lost++;
	}

	document.getElementById('pointP1').innerHTML = p1Wins;
	document.getElementById('pointP2').innerHTML = p2Wins;
	document.getElementById('lostP1').innerHTML = p1Lost;
	document.getElementById('lostP2').innerHTML = p2Lost;

	//window.location.reload(false); 

	for(var i=0; i < 9 ; i++)
	{
			document.getElementById(i).innerHTML = " ";
			state[i] =0;
	}
}

function draw()
{
	for(var i=0; i < 9 ; i++)
	{
			document.getElementById(i).innerHTML = " ";
			state[i] =0;
	}
}

function cellClicked(event){

	if (state[event.target.id] == 0)
	{
		if (bool==0){
			event.target.innerHTML = "X";
			bool = 1;
			state[event.target.id] = 1;
		}else{
			event.target.innerHTML = "O";
			bool = 0;
			state[event.target.id] = 2;
		}
	}

	if( state[4]!=0 && ( (state[0]==state[4] && state[4]==state[8]) || (state[2]==state[4] && state[4]==state[6]) || (state[1]==state[4] && state[4]==state[7]) || (state[3]==state[4] && state[4]==state[5])))
	{
		point();
	}

	if ( state[0]!=0 && ( (state[0]==state[1] && state[1]==state[2]) || (state[0]==state[3] && state[3]==state[6]) ))
	{
		point();
	}

	if ( state[0]!=0 && ( (state[0]==state[1] && state[1]==state[2]) || (state[0]==state[3] && state[3]==state[6]) ))
	{
		point();
	}

	if ( state[8]!=0 && ( (state[2]==state[5] && state[5]==state[8]) || (state[6]==state[7] && state[7]==state[8]) ))
	{
		point();
	}

	count = 0;

	for(var i = 0 ; i<0 ; i++)
	{
		if(state[i]!=0) count++;
	}

	if(count==9) draw();
}

