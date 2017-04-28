$(function (){
	var score1, score2, name1, name2, answer1a, answer1b, answer1c, answer2a, answer2b, answer2c, answer3a, answer3b, answer3c, answer4a, answer4b, answer4c, answer5a, answer5b, answer5c, answer6a, answer6b, answer6c, answer7a, answer7b, answer7c, answer8a, answer8b, answer8c, answer9a, answer9b, answer9c, answer10a, answer10b, answer10c, ans1a, ans1b, ans1c, ans2a, ans2b, ans2c, ans3a, ans3b, ans3c, ans4a, ans4b, ans4c, ans5a, ans5b, ans5c, ans6a, ans6b, ans6c, ans7a, ans7b, ans7c, ans8a, ans8b, ans8c, ans9a, ans9b, ans9c, ans10a, ans10b, ans10c;
	$("#start").click (function(){
		$("#question1").show();
		$("#name1, #start, #intro, #want_another1, #importance1").hide();
		name1= $("#name1").val();
	});
	$("#choice_a1").click (function(){
		$("#choose1").hide();
		$("#want_another1").show();
		answer1a = 'a';
	});
	$("#choice_b1").click (function(){
		$("#choose1").hide();
		$("#want_another1").show();
		answer1a = 'b';
	});
	$("#choice_another_a1").click (function(){
		$("#want_another1").hide();
		$("#importance1").show();
		answer1b = 'a';
	});
	$("#choice_another_b1").click (function(){
		$("#want_another1").hide();
		$("#importance1").show();
		answer1b = 'b';
	});
	$("#one1").click (function(){
		$("#importance1").hide();
		$("#question2").show();
		$("#want_another2, #importance2, #question1").hide();
		answer1c = 1;
	});
	$("#ten1").click (function(){
		$("#importance1").hide();
		$("#question2").show();
		$("#want_another2, #importance2, #question1").hide();
		answer1c = 10;
	});
	$("#fifty1").click (function(){
		$("#importance1").hide();
		$("#question2").show();
		$("#want_another2, #importance2, #question1").hide();
		answer1c = 50;
	});
	$("#hundred1").click (function(){
		$("#importance1").hide();
		$("#question2").show();
		$("#want_another2, #importance2, #question1").hide();
		answer1c = 100;
	});
	$("#twofifty1").click (function(){
		$("#importance1").hide();
		$("#question2").show();
		$("#want_another2, #importance2, #question1").hide();
		answer1c = 250;
	});



	$("#choice_a2").click (function(){
		$("#choose2").hide();
		$("#want_another2").show();
		answer2a = 'a';
	});
	$("#choice_b2").click (function(){
		$("#choose2").hide();
		$("#want_another2").show();
		answer2a = 'b';
	});
	$("#choice_another_a2").click (function(){
		$("#want_another2").hide();
		$("#importance2").show();
		answer2b = 'a';
	});
	$("#choice_another_b2").click (function(){
		$("#want_another2").hide();
		$("#importance2").show();
		answer2b = 'b';
	});
	$("#one2").click (function(){
		$("#importance2").hide();
		$("#question3").show();
		$("#want_another3, #importance3, #question2").hide();
		answer2c = 1;
	});
	$("#ten2").click (function(){
		$("#importance2").hide();
		$("#question3").show();
		$("#want_another3, #importance3, #question2").hide();
		answer2c = 10;
	});
	$("#fifty2").click (function(){
		$("#importance2").hide();
		$("#question3").show();
		$("#want_another3, #importance3, #question2").hide();
		answer2c = 50;
	});
	$("#hundred2").click (function(){
		$("#importance2").hide();
		$("#question3").show();
		$("#want_another3, #importance3, #question2").hide();
		answer2c = 100;
	});
	$("#twofifty2").click (function(){
		$("#importance2").hide();
		$("#question3").show();
		$("#want_another3, #importance3, #question2").hide();
		answer2c = 250;
	});



	$("#choice_a3").click (function(){
		$("#choose3").hide();
		$("#want_another3").show();
		answer3a = 'a';
	});
	$("#choice_b3").click (function(){
		$("#choose3").hide();
		$("#want_another3").show();
		answer3a = 'b';
	});
	$("#choice_another_a3").click (function(){
		$("#want_another3").hide();
		$("#importance3").show();
		answer3b = 'a';
	});
	$("#choice_another_b3").click (function(){
		$("#want_another3").hide();
		$("#importance3").show();
		answer3b = 'b';
	});
	$("#one3").click (function(){
		$("#importance3").hide();
		$("#question4").show();
		$("#want_another4, #importance4, #question3").hide();
		answer3c = 1;
	});
	$("#ten3").click (function(){
		$("#importance3").hide();
		$("#question4").show();
		$("#want_another4, #importance4, #question3").hide();
		answer3c = 10;
	});
	$("#fifty3").click (function(){
		$("#importance3").hide();
		$("#question4").show();
		$("#want_another4, #importance4, #question3").hide();
		answer3c = 50;
	});
	$("#hundred3").click (function(){
		$("#importance3").hide();
		$("#question4").show();
		$("#want_another4, #importance4, #question3").hide();
		answer3c = 100;
	});
	$("#twofifty3").click (function(){
		$("#importance3").hide();
		$("#question4").show();
		$("#want_another4, #importance4, #question3").hide();
		answer3c = 250;
	});



	$("#choice_a4").click (function(){
		$("#choose4").hide();
		$("#want_another4").show();
		answer4a = 'a';
	});
	$("#choice_b4").click (function(){
		$("#choose4").hide();
		$("#want_another4").show();
		answer4a = 'b';
	});
	$("#choice_another_a4").click (function(){
		$("#want_another4").hide();
		$("#importance4").show();
		answer4b = 'a';
	});
	$("#choice_another_b4").click (function(){
		$("#want_another4").hide();
		$("#importance4").show();
		answer4b = 'b';
	});
	$("#one4").click (function(){
		$("#importance4").hide();
		$("#question5").show();
		$("#want_another5, #importance5, #question4").hide();
		answer4c = 1;
	});
	$("#ten4").click (function(){
		$("#importance4").hide();
		$("#question5").show();
		$("#want_another5, #importance5, #question4").hide();
		answer4c = 10;
	});
	$("#fifty4").click (function(){
		$("#importance4").hide();
		$("#question5").show();
		$("#want_another5, #importance5, #question4").hide();
		answer4c = 50;
	});
	$("#hundred4").click (function(){
		$("#importance4").hide();
		$("#question5").show();
		$("#want_another5, #importance5, #question4").hide();
		answer4c = 100;
	});
	$("#twofifty4").click (function(){
		$("#importance4").hide();
		$("#question5").show();
		$("#want_another5, #importance5, #question4").hide();
		answer4c = 250;
	});



	$("#choice_a5").click (function(){
		$("#choose5").hide();
		$("#want_another5").show();
		answer5a = 'a';
	});
	$("#choice_b5").click (function(){
		$("#choose5").hide();
		$("#want_another5").show();
		answer5a = 'b';
	});
	$("#choice_another_a5").click (function(){
		$("#want_another5").hide();
		$("#importance5").show();
		answer5b = 'a';
	});
	$("#choice_another_b5").click (function(){
		$("#want_another5").hide();
		$("#importance5").show();
		answer5b = 'b';
	});
	$("#one5").click (function(){
		$("#importance5").hide();
		$("#question6").show();
		$("#want_another6, #importance6, #question5").hide();
		answer5c = 1;
	});
	$("#ten5").click (function(){
		$("#importance5").hide();
		$("#question6").show();
		$("#want_another6, #importance6, #question5").hide();
		answer5c = 10;
	});
	$("#fifty5").click (function(){
		$("#importance5").hide();
		$("#question6").show();
		$("#want_another6, #importance6, #question5").hide();
		answer5c = 50;
	});
	$("#hundred5").click (function(){
		$("#importance5").hide();
		$("#question6").show();
		$("#want_another6, #importance6, #question5").hide();
		answer5c = 100;
	});
	$("#twofifty5").click (function(){
		$("#importance5").hide();
		$("#question6").show();
		$("#want_another6, #importance6, #question5").hide();
		answer5c = 250;
	});



	$("#choice_a6").click (function(){
		$("#choose6").hide();
		$("#want_another6").show();
		answer6a = 'a';
	});
	$("#choice_b6").click (function(){
		$("#choose6").hide();
		$("#want_another6").show();
		answer6a = 'b';
	});
	$("#choice_another_a6").click (function(){
		$("#want_another6").hide();
		$("#importance6").show();
		answer6b = 'a';
	});
	$("#choice_another_b6").click (function(){
		$("#want_another6").hide();
		$("#importance6").show();
		answer6b = 'b';
	});
	$("#one6").click (function(){
		$("#importance6").hide();
		$("#question7").show();
		$("#want_another7, #importance7, #question6").hide();
		answer6c = 1;
	});
	$("#ten6").click (function(){
		$("#importance6").hide();
		$("#question7").show();
		$("#want_another7, #importance7, #question6").hide();
		answer6c = 10;
	});
	$("#fifty6").click (function(){
		$("#importance6").hide();
		$("#question7").show();
		$("#want_another7, #importance7, #question6").hide();
		answer6c = 50;
	});
	$("#hundred6").click (function(){
		$("#importance6").hide();
		$("#question7").show();
		$("#want_another7, #importance7, #question6").hide();
		answer6c = 100;
	});
	$("#twofifty6").click (function(){
		$("#importance6").hide();
		$("#question7").show();
		$("#want_another7, #importance7, #question6").hide();
		answer6c = 250;
	});



	$("#choice_a7").click (function(){
		$("#choose7").hide();
		$("#want_another7").show();
		answer7a = 'a';
	});
	$("#choice_b7").click (function(){
		$("#choose7").hide();
		$("#want_another7").show();
		answer7a = 'b';
	});
	$("#choice_another_a7").click (function(){
		$("#want_another7").hide();
		$("#importance7").show();
		answer7b = 'a';
	});
	$("#choice_another_b7").click (function(){
		$("#want_another7").hide();
		$("#importance7").show();
		answer7b = 'b';
	});
	$("#one7").click (function(){
		$("#importance7").hide();
		$("#question8").show();
		$("#want_another8, #importance8, #question7").hide();
		answer7c = 1;
	});
	$("#ten7").click (function(){
		$("#importance7").hide();
		$("#question8").show();
		$("#want_another8, #importance8, #question7").hide();
		answer7c = 10;
	});
	$("#fifty7").click (function(){
		$("#importance7").hide();
		$("#question8").show();
		$("#want_another8, #importance8, #question7").hide();
		answer7c = 50;
	});
	$("#hundred7").click (function(){
		$("#importance7").hide();
		$("#question8").show();
		$("#want_another8, #importance8, #question7").hide();
		answer7c = 100;
	});
	$("#twofifty7").click (function(){
		$("#importance7").hide();
		$("#question8").show();
		$("#want_another8, #importance8, #question7").hide();
		answer7c = 250;
	});



	$("#choice_a8").click (function(){
		$("#choose8").hide();
		$("#want_another8").show();
		answer8a = 'a';
	});
	$("#choice_b8").click (function(){
		$("#choose8").hide();
		$("#want_another8").show();
		answer8a = 'b';
	});
	$("#choice_another_a8").click (function(){
		$("#want_another8").hide();
		$("#importance8").show();
		answer8b = 'a';
	});
	$("#choice_another_b8").click (function(){
		$("#want_another8").hide();
		$("#importance8").show();
		answer8b = 'b';
	});
	$("#one8").click (function(){
		$("#importance8").hide();
		$("#question9").show();
		$("#want_another9, #importance9, #question8").hide();
		answer8c = 1;
	});
	$("#ten8").click (function(){
		$("#importance8").hide();
		$("#question9").show();
		$("#want_another9, #importance9, #question8").hide();
		answer8c = 10;
	});
	$("#fifty8").click (function(){
		$("#importance8").hide();
		$("#question9").show();
		$("#want_another9, #importance9, #question8").hide();
		answer8c = 50;
	});
	$("#hundred8").click (function(){
		$("#importance8").hide();
		$("#question9").show();
		$("#want_another9, #importance9, #question8").hide();
		answer8c = 100;
	});
	$("#twofifty8").click (function(){
		$("#importance8").hide();
		$("#question9").show();
		$("#want_another9, #importance9, #question8").hide();
		answer8c = 250;
	});



	$("#choice_a9").click (function(){
		$("#choose9").hide();
		$("#want_another9").show();
		answer9a = 'a';
	});
	$("#choice_b9").click (function(){
		$("#choose9").hide();
		$("#want_another9").show();
		answer9a = 'b';
	});
	$("#choice_another_a9").click (function(){
		$("#want_another9").hide();
		$("#importance9").show();
		answer9b = 'a';
	});
	$("#choice_another_b9").click (function(){
		$("#want_another9").hide();
		$("#importance9").show();
		answer9b = 'b';
	});
	$("#one9").click (function(){
		$("#importance9").hide();
		$("#question10").show();
		$("#want_another10, #importance10, #question9").hide();
		answer9c = 1;
	});
	$("#ten9").click (function(){
		$("#importance9").hide();
		$("#question10").show();
		$("#want_another10, #importance10, #question9").hide();
		answer9c = 10;
	});
	$("#fifty9").click (function(){
		$("#importance9").hide();
		$("#question10").show();
		$("#want_another10, #importance10, #question9").hide();
		answer9c = 50;
	});
	$("#hundred9").click (function(){
		$("#importance9").hide();
		$("#question10").show();
		$("#want_another10, #importance10, #question9").hide();
		answer9c = 100;
	});
	$("#twofifty9").click (function(){
		$("#importance9").hide();
		$("#question10").show();
		$("#want_another10, #importance10, #question9").hide();
		answer9c = 250;
	});



	$("#choice_a10").click (function(){
		$("#choose10").hide();
		$("#want_another10").show();
		answer10a = 'a';
	});
	$("#choice_b10").click (function(){
		$("#choose10").hide();
		$("#want_another10").show();
		answer10a = 'b';
	});
	$("#choice_another_a10").click (function(){
		$("#want_another10").hide();
		$("#importance10").show();
		answer10b = 'a';
	});
	$("#choice_another_b10").click (function(){
		$("#want_another10").hide();
		$("#importance10").show();
		answer10b = 'b';
	});
	$("#one10").click (function(){
		$("#importance10").hide();
		$("#intro2").html(""+name1+"'s response has been recorded. Please type the NAME of the other person then click START.");
		$("#start2, #intro2, #name2").show();
		$("#question10, #start, #intro").hide();
		answer10c = 1;
	});
	$("#ten10").click (function(){
		$("#importance10").hide();
		$("#intro2").html(""+name1+"'s response has been recorded. Please type the NAME of the other person then click START.");
		$("#start2, #intro2, #name2").show();
		$("#question10, #start, #intro").hide();
		answer10c = 10;
	});
	$("#fifty10").click (function(){
		$("#importance10").hide();
		$("#intro2").html(""+name1+"'s response has been recorded. Please type the NAME of the other person then click START.");
		$("#start2, #intro2, #name2").show();
		$("#question10, #start, #intro").hide();
		answer10c = 50;
	});
	$("#hundred10").click (function(){
		$("#importance10").hide();
		$("#intro2").html(""+name1+"'s response has been recorded. Please type the NAME of the other person then click START.");
		$("#start2, #intro2, #name2").show();
		$("#question10, #start, #intro").hide();
		answer10c = 100;
	});
	$("#twofifty10").click (function(){
		$("#importance10").hide();
		$("#intro2").html(""+name1+"'s response has been recorded. Please type the NAME of the other person then click START.");
		$("#start2, #intro2, #name2").show();
		$("#question10, #start, #intro").hide();
		answer10c = 250;
	});


	// PERSON2


	$("#start2").click (function(){
		$("#question1x").show();
		$("#start2, #intro2, #name2, #want_another1x, #importance1x").hide();
		name2= $("#name2").val();
	});
	$("#choice_a1x").click (function(){
		$("#choose1x").hide();
		$("#want_another1x").show();
		ans1a = 'a';
	});
	$("#choice_b1x").click (function(){
		$("#choose1x").hide();
		$("#want_another1x").show();
		ans1a = 'b';
	});
	$("#choice_another_a1x").click (function(){
		$("#want_another1x").hide();
		$("#importance1x").show();
		ans1b = 'a';
	});
	$("#choice_another_b1x").click (function(){
		$("#want_another1x").hide();
		$("#importance1x").show();
		ans1b = 'b';
	});
	$("#one1x").click (function(){
		$("#importance1x").hide();
		$("#question2x").show();
		$("#want_another2x, #importance2x, #question1x").hide();
		ans1c = 1;
	});
	$("#ten1x").click (function(){
		$("#importance1x").hide();
		$("#question2x").show();
		$("#want_another2x, #importance2x, #question1x").hide();
		ans1c = 10;
	});
	$("#fifty1x").click (function(){
		$("#importance1x").hide();
		$("#question2x").show();
		$("#want_another2x, #importance2x, #question1x").hide();
		ans1c = 50;
	});
	$("#hundred1x").click (function(){
		$("#importance1x").hide();
		$("#question2x").show();
		$("#want_another2x, #importance2x, #question1x").hide();
		ans1c = 100;
	});
	$("#twofifty1x").click (function(){
		$("#importance1x").hide();
		$("#question2x").show();
		$("#want_another2x, #importance2x, #question1x").hide();
		ans1c = 250;
	});



	$("#choice_a2x").click (function(){
		$("#choose2x").hide();
		$("#want_another2x").show();
		ans2a = 'a';
	});
	$("#choice_b2x").click (function(){
		$("#choose2x").hide();
		$("#want_another2x").show();
		ans2a = 'b';
	});
	$("#choice_another_a2x").click (function(){
		$("#want_another2x").hide();
		$("#importance2x").show();
		ans2b = 'a';
	});
	$("#choice_another_b2x").click (function(){
		$("#want_another2x").hide();
		$("#importance2x").show();
		ans2b = 'b';
	});
	$("#one2x").click (function(){
		$("#importance2x").hide();
		$("#question3x").show();
		$("#want_another3x, #importance3x, #question2x").hide();
		ans2c = 1;
	});
	$("#ten2x").click (function(){
		$("#importance2x").hide();
		$("#question3x").show();
		$("#want_another3x, #importance3x, #question2x").hide();
		ans2c = 10;
	});
	$("#fifty2x").click (function(){
		$("#importance2x").hide();
		$("#question3x").show();
		$("#want_another3x, #importance3x, #question2x").hide();
		ans2c = 50;
	});
	$("#hundred2x").click (function(){
		$("#importance2x").hide();
		$("#question3x").show();
		$("#want_another3x, #importance3x, #question2x").hide();
		ans2c = 100;
	});
	$("#twofifty2x").click (function(){
		$("#importance2x").hide();
		$("#question3x").show();
		$("#want_another3x, #importance3x, #question2x").hide();
		ans2c = 250;
	});



	$("#choice_a3x").click (function(){
		$("#choose3x").hide();
		$("#want_another3x").show();
		ans3a = 'a';
	});
	$("#choice_b3x").click (function(){
		$("#choose3x").hide();
		$("#want_another3x").show();
		ans3a = 'b';
	});
	$("#choice_another_a3x").click (function(){
		$("#want_another3x").hide();
		$("#importance3x").show();
		ans3b = 'a';
	});
	$("#choice_another_b3x").click (function(){
		$("#want_another3x").hide();
		$("#importance3x").show();
		ans3b = 'b';
	});
	$("#one3x").click (function(){
		$("#importance3x").hide();
		$("#question4x").show();
		$("#want_another4x, #importance4x, #question3x").hide();
		ans3c = 1;
	});
	$("#ten3x").click (function(){
		$("#importance3x").hide();
		$("#question4x").show();
		$("#want_another4x, #importance4x, #question3x").hide();
		ans3c = 10;
	});
	$("#fifty3x").click (function(){
		$("#importance3x").hide();
		$("#question4x").show();
		$("#want_another4x, #importance4x, #question3x").hide();
		ans3c = 50;
	});
	$("#hundred3x").click (function(){
		$("#importance3x").hide();
		$("#question4x").show();
		$("#want_another4x, #importance4x, #question3x").hide();
		ans3c = 100;
	});
	$("#twofifty3x").click (function(){
		$("#importance3x").hide();
		$("#question4x").show();
		$("#want_another4x, #importance4x, #question3x").hide();
		ans3c = 250;
	});



	$("#choice_a4x").click (function(){
		$("#choose4x").hide();
		$("#want_another4x").show();
		ans4a = 'a';
	});
	$("#choice_b4x").click (function(){
		$("#choose4x").hide();
		$("#want_another4x").show();
		ans4a = 'b';
	});
	$("#choice_another_a4x").click (function(){
		$("#want_another4x").hide();
		$("#importance4x").show();
		ans4b = 'a';
	});
	$("#choice_another_b4x").click (function(){
		$("#want_another4x").hide();
		$("#importance4x").show();
		ans4b = 'b';
	});
	$("#one4x").click (function(){
		$("#importance4x").hide();
		$("#question5x").show();
		$("#want_another5x, #importance5x, #question4x").hide();
		ans4c = 1;
	});
	$("#ten4x").click (function(){
		$("#importance4x").hide();
		$("#question5x").show();
		$("#want_another5x, #importance5x, #question4x").hide();
		ans4c = 10;
	});
	$("#fifty4x").click (function(){
		$("#importance4x").hide();
		$("#question5x").show();
		$("#want_another5x, #importance5x, #question4x").hide();
		ans4c = 50;
	});
	$("#hundred4x").click (function(){
		$("#importance4x").hide();
		$("#question5x").show();
		$("#want_another5x, #importance5x, #question4x").hide();
		ans4c = 100;
	});
	$("#twofifty4x").click (function(){
		$("#importance4x").hide();
		$("#question5x").show();
		$("#want_another5x, #importance5x, #question4x").hide();
		ans4c = 250;
	});



	$("#choice_a5x").click (function(){
		$("#choose5x").hide();
		$("#want_another5x").show();
		ans5a = 'a';
	});
	$("#choice_b5x").click (function(){
		$("#choose5x").hide();
		$("#want_another5x").show();
		ans5a = 'b';
	});
	$("#choice_another_a5x").click (function(){
		$("#want_another5x").hide();
		$("#importance5x").show();
		ans5b = 'a';
	});
	$("#choice_another_b5x").click (function(){
		$("#want_another5x").hide();
		$("#importance5x").show();
		ans5b = 'b';
	});
	$("#one5x").click (function(){
		$("#importance5x").hide();
		$("#question6x").show();
		$("#want_another6x, #importance6x, #question5x").hide();
		ans5c = 1;
	});
	$("#ten5x").click (function(){
		$("#importance5x").hide();
		$("#question6x").show();
		$("#want_another6x, #importance6x, #question5x").hide();
		ans5c = 10;
	});
	$("#fifty5x").click (function(){
		$("#importance5x").hide();
		$("#question6x").show();
		$("#want_another6x, #importance6x, #question5x").hide();
		ans5c = 50;
	});
	$("#hundred5x").click (function(){
		$("#importance5x").hide();
		$("#question6x").show();
		$("#want_another6x, #importance6x, #question5x").hide();
		ans5c = 100;
	});
	$("#twofifty5x").click (function(){
		$("#importance5x").hide();
		$("#question6x").show();
		$("#want_another6x, #importance6x, #question5x").hide();
		ans5c = 250;
	});



	$("#choice_a6x").click (function(){
		$("#choose6x").hide();
		$("#want_another6x").show();
		ans6a = 'a';
	});
	$("#choice_b6x").click (function(){
		$("#choose6x").hide();
		$("#want_another6x").show();
		ans6a = 'b';
	});
	$("#choice_another_a6x").click (function(){
		$("#want_another6x").hide();
		$("#importance6x").show();
		ans6b = 'a';
	});
	$("#choice_another_b6x").click (function(){
		$("#want_another6x").hide();
		$("#importance6x").show();
		ans6b = 'b';
	});
	$("#one6x").click (function(){
		$("#importance6x").hide();
		$("#question7x").show();
		$("#want_another7x, #importance7x, #question6x").hide();
		ans6c = 1;
	});
	$("#ten6x").click (function(){
		$("#importance6x").hide();
		$("#question7x").show();
		$("#want_another7x, #importance7x, #question6x").hide();
		ans6c = 10;
	});
	$("#fifty6x").click (function(){
		$("#importance6x").hide();
		$("#question7x").show();
		$("#want_another7x, #importance7x, #question6x").hide();
		ans6c = 50;
	});
	$("#hundred6x").click (function(){
		$("#importance6x").hide();
		$("#question7x").show();
		$("#want_another7x, #importance7x, #question6x").hide();
		ans6c = 100;
	});
	$("#twofifty6x").click (function(){
		$("#importance6x").hide();
		$("#question7x").show();
		$("#want_another7x, #importance7x, #question6x").hide();
		ans6c = 250;
	});



	$("#choice_a7x").click (function(){
		$("#choose7x").hide();
		$("#want_another7x").show();
		ans7a = 'a';
	});
	$("#choice_b7x").click (function(){
		$("#choose7x").hide();
		$("#want_another7x").show();
		ans7a = 'b';
	});
	$("#choice_another_a7x").click (function(){
		$("#want_another7x").hide();
		$("#importance7x").show();
		ans7b = 'a';
	});
	$("#choice_another_b7x").click (function(){
		$("#want_another7x").hide();
		$("#importance7x").show();
		ans7b = 'b';
	});
	$("#one7x").click (function(){
		$("#importance7x").hide();
		$("#question8x").show();
		$("#want_another8x, #importance8x, #question7x").hide();
		ans7c = 1;
	});
	$("#ten7x").click (function(){
		$("#importance7x").hide();
		$("#question8x").show();
		$("#want_another8x, #importance8x, #question7x").hide();
		ans7c = 10;
	});
	$("#fifty7x").click (function(){
		$("#importance7x").hide();
		$("#question8x").show();
		$("#want_another8x, #importance8x, #question7x").hide();
		ans7c = 50;
	});
	$("#hundred7x").click (function(){
		$("#importance7x").hide();
		$("#question8x").show();
		$("#want_another8x, #importance8x, #question7x").hide();
		ans7c = 100;
	});
	$("#twofifty7x").click (function(){
		$("#importance7x").hide();
		$("#question8x").show();
		$("#want_another8x, #importance8x, #question7x").hide();
		ans7c = 250;
	});



	$("#choice_a8x").click (function(){
		$("#choose8x").hide();
		$("#want_another8x").show();
		ans8a = 'a';
	});
	$("#choice_b8x").click (function(){
		$("#choose8x").hide();
		$("#want_another8x").show();
		ans8a = 'b';
	});
	$("#choice_another_a8x").click (function(){
		$("#want_another8x").hide();
		$("#importance8x").show();
		ans8b = 'a';
	});
	$("#choice_another_b8x").click (function(){
		$("#want_another8x").hide();
		$("#importance8x").show();
		ans8b = 'b';
	});
	$("#one8x").click (function(){
		$("#importance8x").hide();
		$("#question9x").show();
		$("#want_another9x, #importance9x, #question8x").hide();
		ans8c = 1;
	});
	$("#ten8x").click (function(){
		$("#importance8x").hide();
		$("#question9x").show();
		$("#want_another9x, #importance9x, #question8x").hide();
		ans8c = 10;
	});
	$("#fifty8x").click (function(){
		$("#importance8x").hide();
		$("#question9x").show();
		$("#want_another9x, #importance9x, #question8x").hide();
		ans8c = 50;
	});
	$("#hundred8x").click (function(){
		$("#importance8x").hide();
		$("#question9x").show();
		$("#want_another9x, #importance9x, #question8x").hide();
		ans8c = 100;
	});
	$("#twofifty8x").click (function(){
		$("#importance8x").hide();
		$("#question9x").show();
		$("#want_another9x, #importance9x, #question8x").hide();
		ans8c = 250;
	});



	$("#choice_a9x").click (function(){
		$("#choose9x").hide();
		$("#want_another9x").show();
		ans9a = 'a';
	});
	$("#choice_b9x").click (function(){
		$("#choose9x").hide();
		$("#want_another9x").show();
		ans9a = 'b';
	});
	$("#choice_another_a9x").click (function(){
		$("#want_another9x").hide();
		$("#importance9x").show();
		ans9b = 'a';
	});
	$("#choice_another_b9x").click (function(){
		$("#want_another9x").hide();
		$("#importance9x").show();
		ans9b = 'b';
	});
	$("#one9x").click (function(){
		$("#importance9x").hide();
		$("#question10x").show();
		$("#want_another10x, #importance10x, #question9x").hide();
		ans9c = 1;
	});
	$("#ten9x").click (function(){
		$("#importance9x").hide();
		$("#question10x").show();
		$("#want_another10x, #importance10x, #question9x").hide();
		ans9c = 10;
	});
	$("#fifty9x").click (function(){
		$("#importance9x").hide();
		$("#question10x").show();
		$("#want_another10x, #importance10x, #question9x").hide();
		ans9c = 50;
	});
	$("#hundred9x").click (function(){
		$("#importance9x").hide();
		$("#question10x").show();
		$("#want_another10x, #importance10x, #question9x").hide();
		ans9c = 100;
	});
	$("#twofifty9x").click (function(){
		$("#importance9x").hide();
		$("#question10x").show();
		$("#want_another10x, #importance10x, #question9x").hide();
		ans9c = 250;
	});



	$("#choice_a10x").click (function(){
		$("#choose10x").hide();
		$("#want_another10x").show();
		ans10a = 'a';
	});
	$("#choice_b10x").click (function(){
		$("#choose10x").hide();
		$("#want_another10x").show();
		ans10a = 'b';
	});
	$("#choice_another_a10x").click (function(){
		$("#want_another10x").hide();
		$("#importance10x").show();
		ans10b = 'a';
	});
	$("#choice_another_b10x").click (function(){
		$("#want_another10x").hide();
		$("#importance10x").show();
		ans10b = 'b';
	});
	$("#one10x").click (function(){
		$("#importance10x").hide();
		$("#finish").show();
		$("#question10x, #start, #intro").hide();
		ans10c = 1;
	});
	$("#ten10x").click (function(){
		$("#importance10x").hide();
		$("#finish").show();
		$("#question10x, #start, #intro").hide();
		ans10c = 10;
	});
	$("#fifty10x").click (function(){
		$("#importance10x").hide();
		$("#finish").show();
		$("#question10x, #start, #intro").hide();
		ans10c = 50;
	});
	$("#hundred10x").click (function(){
		$("#importance10x").hide();
		$("#finish").show();
		$("#question10x, #start, #intro").hide();
		ans10c = 100;
	});
	$("#twofifty10x").click (function(){
		$("#importance10x").hide();
		$("#finish").show();
		$("#question10x, #start, #intro").hide();
		ans10c = 250;
	});

	$("#submit").click(function(){
		score1=0;
		if(answer1a==ans1b)
			score1 += ans1c;
		if(answer2a==ans2b)
			score1 += ans2c;
		if(answer3a==ans3b)
			score1 += ans3c;
		if(answer4a==ans4b)
			score1 += ans4c;
		if(answer5a==ans5b)
			score1 += ans5c;
		if(answer6a==ans6b)
			score1 += ans6c;
		if(answer7a==ans7b)
			score1 += ans7c;
		if(answer8a==ans8b)
			score1 += ans8c;
		if(answer9a==ans9b)
			score1 += ans9c;
		if(answer10a==ans10b)
			score1 += ans10c;

		var c2 = ans1c + ans2c + ans3c + ans4c + ans5c + ans6c + ans7c + ans8c + ans9c + ans10c;

		var like1 = parseFloat(100*score1/c2).toFixed(2);

		score2=0;
		if(ans1a==answer1b)
			score2 += answer1c;
		if(ans2a==answer2b)
			score2 += answer2c;
		if(ans3a==answer3b)
			score2 += answer3c;
		if(ans4a==answer4b)
			score2 += answer4c;
		if(ans5a==answer5b)
			score2 += answer5c;
		if(ans6a==answer6b)
			score2 += answer6c;
		if(ans7a==answer7b)
			score2 += answer7c;
		if(ans8a==answer8b)
			score2 += answer8c;
		if(ans9a==answer9b)
			score2 += answer9c;
		if(ans10a==answer10b)
			score2 += answer10c;

		var c1 = answer1c + answer2c + answer3c + answer4c + answer5c + answer6c + answer7c + answer8c + answer9c + answer10c;

		var like2 = parseFloat(100*score2/c1).toFixed(2);


		var compatibility = parseFloat(Math.sqrt(like1*like2)).toFixed(2);
	
		$("#likable1").html(""+name1+" is "+like1+" percent likeable by "+name2+"'s standards.");
		$("#likable2").html(""+name2+" is "+like2+" percent likeable by "+name1+"'s standards.");
		$("#compatibility").html(""+name1+" and "+name2+" are "+compatibility+" percent compatible.")
		$("#likable1").show();
		$("#likable2").show();
		$("#compatibility").show();
		$("#finish").hide();
	});


})
