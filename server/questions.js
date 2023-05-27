// const questions = [
  
//     //First category
//     {
//       // subject: "history",
//       question: "When did WWII start?",
//       answers: {
//         a:"1993", 
//         b: "1844", 
//         c:"1939"},
//       correctAnswer: "1993"
//     },
//     {
//       // subject: "histroy", 
//       question: "Where was Chirchhill Born",
//       answers:{
//         a: "London",
//         b: "Oxford", 
//         c: "Leeds"

//       },
//       correctAnswer: "London"
//     },

//       {
//     // subject: "history",
//           question: "What year was the Bolshevik Revolution in Russia?",
//           answers: {
//               a: 1905,
//               b: 1914,
//               c: 1917,
//               d: 1921
//           },
//           correctAnswer: 1917
//       },
//       {
//           // subject: "geography",
//           question: "What's the capital of Portugal",
//           answers: {
//               a: "Lisbon",
//               b: "Porto",
//               c: "Faro",
//               d: "Almada"
//           },
//           correctAnswer: "Lisbon"
//       },
//       {
//           // subject: "history",
//           question: "What year was the Russo-Japanese War?",
//           answers: {
//               a: 1905,
//               b: 1914,
//               c: 1917,
//               d: 1921
//           },
//           correctAnswer: 1905
//       },
//       {
//           // subject: "history",
//           question: "Who was the last Tsar of Russia",
//           answers: {
//               a: "Nicholas II",
//               b: "Alexander I",
//               c: "Alexandria The Great",
//               d: "Fredric III"
//           },
//           correctAnswer: "Nicholas II"
//       }
  
// ]

var myQuestions = [
	{
		question: "Who did Henry VII, the first Tudor King, defeat at the Battle of Bosworth in 1485 in order to take the throne?",
		answers: {
			a: 'King Richard I',
			b: 'King Richard III',
			c: 'Kind Richard II'
		},
		correctAnswer: 'b'
	},
	{  
        //subjects: "history",    if we were to make chooseable subjects this is how
		question: "To secure his position, and to end the Wars of the Roses, who did Henry VII marry in 1486?",
		answers: {
			a: 'Elizabeth Woodville',
			b: 'Anne Neville',
			c: 'Elizabeth Of York'
		},
		correctAnswer: 'c'
	},
    {
        question: "While Henry VII had at least seven children, only four survived infancy. Who was his eldest child?",
		answers: {
			a: 'Henry VIII',
			b: 'Margaret of Scotland',
			c: 'Prince Arthur'
		},
		correctAnswer: 'c'
    },
	{
		question: "In which royal palace did Henry VII die on 21 April 1509?",
		answers: {
			a: 'Richmond Palace',
			b: '5',
			c: '10'
		},
		correctAnswer: 'a'
	},
	{
		question: "Henry VIII was eighteen years old when he became King in 1509. Who did he marry that same year?",
		answers: {
			a: 'Catherine Of Braganza',
			b: 'Catherine Of Aragon',
			c: 'Anne Of Cleves'
		},
		correctAnswer: 'b'
	},
];

module.exports = myQuestions;
