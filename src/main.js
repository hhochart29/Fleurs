import * as vis from "vis";

require('./style/main.scss');

/*
* Timeline
* */

//TODO : regrouper les groupes par thèmes
// Ajouter une légende en bas de l'écran = tel couleur = tel groupe
// Hover : avoir le titre en hover pour avoir un apercu de ce sur quoi on va cliquer
let nodes = [
    {id: 0, label: "          ", group: 'core'},
    {
        id: 1,
        label: "1828",
        group: 2,
        title: 'Création de la société Nantaise d\'horticulture',
        content: "Dès sa création en 1828, la Société nantaise d\'horticulture présente une première exposition florale dans la salle de la Bourse lors de la visite officielle de la Duchesse de Berry."
    },
    {
        id: 2,
        label: "1829",
        group: 1,
        title: 'La société Nantaise d\horticulture organise des fêtes florales saisonnières',
        content: 'Dès 1829, elle organise des fêtes florales saisonnières, les «expositions printanières des plantes » ont lieu sur la promenade de la Bourse. Quant aux expositions automnales, elles se déroulent le plus souvent au Cirque Paquer (rue de l’Arche Sèche).',
    },
    {
        id: 3,
        label: "1920",
        group: 2,
        title: 'La Société d\'horticulture organise encore deux expositions florales',
        content: ''
    },
    {id: 4, label: "1920", group: 3},
    {id: 5, label: "1920", group: 4},
    {id: 6, label: "1920", group: 1},
    {id: 7, label: "1920", group: 2},
    {id: 8, label: "1920", group: 3},
    {id: 9, label: "1920", group: 4},
    {id: 10, label: "1920", group: 1},
    {id: 11, label: "1920", group: 2},
    {id: 12, label: "1920", group: 3},
    {id: 13, label: "1920", group: 4},
    {id: 14, label: "1920", group: 3},
    {id: 15, label: "1920", group: 2},
    {id: 16, label: "1920", group: 1},
    {id: 17, label: "1920", group: 1},
    {id: 18, label: "1920", group: 2},
    {id: 19, label: "1920", group: 3},
    {id: 20, label: "1920", group: 4},
    {id: 21, label: "1920", group: 3},
    {id: 22, label: "1920", group: 4},
    {id: 23, label: "1920", group: 2},
    {id: 24, label: "1920", group: 1},
    {id: 25, label: "1920", group: 1},
    {id: 26, label: "1920", group: 2},
    {id: 27, label: "1920", group: 3},
    {id: 28, label: "1920", group: 4},
    {id: 29, label: "1920", group: 2}
];
let edges = [
    {from: 1, to: 0},
    {from: 2, to: 0},
    {from: 3, to: 0},
    {from: 4, to: 0},
    {from: 5, to: 0},
    {from: 6, to: 0},
    {from: 7, to: 0},
    {from: 8, to: 0},
    {from: 9, to: 0},
    {from: 10, to: 0},
    {from: 11, to: 0},
    {from: 12, to: 0},
    {from: 13, to: 0},
    {from: 14, to: 0},
    {from: 15, to: 0},
    {from: 16, to: 0},
    {from: 17, to: 0},
    {from: 18, to: 0},
    {from: 19, to: 0},
    {from: 20, to: 0},
    {from: 21, to: 0},
    {from: 22, to: 0},
    {from: 23, to: 0},
    {from: 24, to: 0},
    {from: 25, to: 0},
    {from: 26, to: 0},
    {from: 27, to: 0},
    {from: 28, to: 0},
    {from: 29, to: 0},
    {from: 30, to: 0},

    {from: 0, to: 1},
    {from: 0, to: 2},
    {from: 0, to: 3},
    {from: 0, to: 4},
    {from: 0, to: 5},
    {from: 0, to: 6},
    {from: 0, to: 7},
    {from: 0, to: 8},
    {from: 0, to: 9},
    {from: 0, to: 10},
    {from: 0, to: 11},
    {from: 0, to: 12},
    {from: 0, to: 13},
    {from: 0, to: 14},
    {from: 0, to: 15},
    {from: 0, to: 16},
    {from: 0, to: 17},
    {from: 0, to: 18},
    {from: 0, to: 19},
    {from: 0, to: 20},
    {from: 0, to: 21},
    {from: 0, to: 22},
    {from: 0, to: 23},
    {from: 0, to: 24},
    {from: 0, to: 25},
    {from: 0, to: 26},
    {from: 0, to: 27},
    {from: 0, to: 28},
    {from: 0, to: 29},
    {from: 0, to: 30},
];

// create a network
let container = document.querySelector('#flower');
let data = {
    nodes: nodes,
    edges: edges
};
let options = {
    interaction: {
        hover: true,
        hoverConnectedEdges: false,
    },
    nodes: {
        shape: 'circle',
        size: 30,
        font: {
            size: 40,
            color: 'white'
        },
    },
    groups: {
        'core': {
            color: 'yellow'
        },
        1: {
            color: '#ecbf54'
        },
        2: {
            color: '#e75665'
        },
        3: {
            color: '#f5bfcf'
        },
        4: {
            color: '#afccce'
        }
    },
    edges: {
        width: 10
    }
};
let network = '';
network = new vis.Network(container, data, options);


const content = document.querySelector('#content');
const close = document.querySelector('#close');
const titre = document.querySelector('.event-content h2');
const date = document.querySelector('.event-content .date');
const image = document.querySelector('.event-content .image');
const description = document.querySelector('.event-content .description');
const nodeInfo = document.querySelector('.node-info');

network.on('click', (obj) => {
    if (obj.nodes[0] !== undefined && obj.nodes[0] !== 0) {
        let currentNode = nodes[obj.nodes[0]];
        titre.innerHTML = currentNode.title;
        date.innerHTML = currentNode.label;
        description.innerHTML = currentNode.content;
        image.style.backgroundImage = "url('./src/images/" + currentNode.label + "_" + currentNode.id + ".jpg')";
        content.classList.toggle('visible');

    }
});

network.on('hoverNode', (obj) => {
    if (obj.node !== undefined && obj.node !== 0) {
        let hoverNode = nodes[obj.node];
        setTimeout(() => {
            nodeInfo.querySelector('h2').innerHTML = hoverNode.title;
            nodeInfo.classList.toggle('entrance');
        }, 1000)
    }
});

network.on('blurNode', (obj) => {
    if (obj.node !== undefined && obj.node !== 0) {
        nodeInfo.classList.toggle('entrance');
        nodeInfo.classList.toggle('exit');
        setTimeout(() => {
            nodeInfo.classList.toggle('exit');
        },300)
    }
});

close.onclick = (e) => {
    content.classList.toggle('visible');
    content.classList.toggle('disappear');
    setTimeout(() => {
        content.classList.toggle('disappear');
    }, 1200)
};

document.querySelector("canvas").onwheel = function (event) {
    event.preventDefault();
};

/*
* Timeline End
* */