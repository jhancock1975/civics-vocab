var FlashCard = function(question, answer){
    this.question = question;
    this.answer = answer;
};

var FlashCards  = function(){
    this.cards = [
	new FlashCard('What is socialism?',
		      'Socialism is an economic system where the \
government takes an active role in the economy. (share)'),
	new FlashCard('What is naturalization?',
		      'Naturalization is the process by which a legal \
resident becomes a citezen.'),
	new FlashCard('What is an autocracy?',
		      'An autocracy is a government where the leader \
has absolute power.'),
	new FlashCard('What is direct democracy?',
		      'Direct democracy is a system where everyone \
votes on everything.')
    ]
    
    this.next = function(){
	return this.cards[0];
    };


}
