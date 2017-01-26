let questions = [
    {
        id: 1,
        question: 'What fruit is this?',
        resource: {
            type: 'image',
            url: 'assets/images/apple.png'
        },
        options: ['apple', 'peach', 'pear', 'orange'],
        answer: 'apple',
        explanation: 'This is an apple'
    },
    {
        id: 2,
        question: 'What shape is this?',
        resource: {
            type: 'image',
            url: 'assets/images/square.png'
        },
        options: ['square', 'triangle', 'circle', 'rectangle'],
        answer: 'square',
        explanation: 'A square is a shape with four sides of equal length'
    },
    {
        id: 3,
        question: 'Is this a letter or number?',
        resource: {
            type: 'image',
            url: 'assets/images/three.png'
        },
        options: ['letter', 'number'],
        answer: 'number',
        explanation: 'This is the number 3'
    },
    {
        id: 4,
        question: 'How many letters are in the alphabet?',
        resource: {
            type: 'image',
            url: 'assets/images/alphabet.png'
        },
        options: ['10', '12', '18', '26'],
        answer: '26',
        explanation: 'There are 26 letters in the english alphabet'
    },
    {
        id: 5,
        question: 'What Shape is this?',
        resource: {
            type: 'image',
            url: 'assets/images/triangle.png'
        },
        options: ['square', 'triangle', 'rectangle', 'circle'],
        answer: 'triangle',
        explanation: 'A triangle is a shape that has 3 sides'
    }
];

export { questions };