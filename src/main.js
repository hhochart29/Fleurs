import * as vis from "vis";
import TweenMax from "gsap";
import VanillaTilt from "vanilla-tilt";
require('./style/main.scss');

let nodes =
    [
        {
            id: 0,
            label: "          ",
            group: 'core'
        },
        {
            id: 1,
            label: "1828",
            group: "divers",
            title: "Création de la société Nantaise d\'horticulture",
            content: "Dès sa création en 1828, la Société nantaise d\'horticulture présente une première exposition florale dans la salle de la Bourse lors de la visite officielle de la Duchesse de Berry."
        },
        {
            id: 2,
            label: "1829",
            group: "divers",
            title: "La société Nantaise d\'horticulture organise des fêtes florales saisonnières",
            content: 'Dès 1829, elle organise des fêtes florales saisonnières, les «expositions printanières des plantes » ont lieu sur la promenade de la Bourse. Quant aux expositions automnales, elles se déroulent le plus souvent au Cirque Paquer (rue de l’Arche Sèche).',
        },
        {
            id: 3,
            label: "1920",
            group: "divers",
            title: "La Société d\'horticulture organise encore deux expositions florales",
            content: "En 1920 la Société d’horticulture organise encore deux expositions florales annuelles : l\’une au printemps, l\’autre fin octobre"
        },
        {
            id: 4,
            label: "1920",
            group: "divers",
            title: "La société Nantaise d’horticulture initie les concours de jardins ouvriers",
            content: ''
        },
        {
            id: 5,
            label: "1886",
            group: "divers",
            title: "Création de la société des horticulteurs de Nantes",
            content: ''
        },
        {
            id: 6,
            label: "1921",
            group: "divers",
            title: "Exposition saisonnières",
            content: "La ville de Nantes sous l’impulsion de la commission de surveillance du Jardin des Plantes décide la présentation d’expositions saisonnières et thématiques dans les serres et l’Orangerie du Jardin des Plantes afin « de permettre aux horticulteurs et jardiniers de mettre sous les yeux du public leurs produits : plants, fleurs en pots, fleurs coupées, primeurs, fruits et légumes de saison ». Ces expositions seront multipliées et renouvelées à chaque floraison spéciale : ainsi en juin 1922, les roses sont à l’honneur, en novembre 1923 ce sont les chrysanthèmes, en octobre 1926 les cyclamens puis les dahlias en septembre 1930."
        },
        {
            id: 7,
            label: "1700",
            group: "camellia",
            title: "Introduction du Camélia en France",
            content: "Introduit en France dans la première moitié du XVIIIème siècle, le camellia va connaître son heure de gloire au siècle suivant. À Nantes le développement de la culture du camellia doit beaucoup à Ferdinand Favre, industriel, maire de Nantes de 1832 à 1848 et de 1852 à 1866 qui passionné d’horticulture, réussit à acclimater le camellia, considéré comme plante de serre, à l’air libre."
        },
        {
            id: 8,
            label: "1950",
            group: "camellia",
            title: "La Société nantaise d’horticulture organise des expositions de camellias",
            content: "À partir du milieu du XIXème siècle, la Société nantaise d’horticulture participe largement à cette diffusion en organisant des expositions de camellias lors desquelles sont primées nombre de variétés nantaises."
        },
        {
            id: 9,
            label: "1992",
            group: "camellia",
            title: "3ème salon du camellia",
            content: "Le troisième salon du camellia à lieu à la chapelle de l'oratoire."
        },
        {
            id: 10,
            label: "1789",
            group: "chrysantheme",
            title: "Importation du chrysanthème en France par un marseillais",
            content: "Rapporté du Japon en 1789 par un marseillais, le chrysanthème, plante d’automne par excellence, a fait l’objet de très nombreuses expositions à Nantes."
        },
        {
            id: 11,
            label: "1912",
            group: "chrysantheme",
            title: "Congrès international des chrysanthémistes",
            content: "En novembre 1912, Nantes accueille le Congrès international des chrysanthémistes, occasion d’une exposition florale sur le Cours Saint-Pierre, nouveau congrès en novembre 1936 doublé d’une exposition dans le bâtiment du harnachement du Château."
        },
        {
            id: 12,
            label: "1936",
            group: "chrysantheme",
            title: "Nouveau congrès international des chrysanthémistes",
            content: "Nouveau congrès international des chrysanthémistes en novembre 1936 doublé d’une exposition dans le bâtiment du harnachement du Château."
        },
        {
            id: 13,
            label: "1712",
            group: "dahlia",
            title: "Importation du Dahlia en Europe",
            content: ""
        },
        {
            id: 14,
            label: "1929",
            group: "dahlia",
            title: "Création de la société Nantaise du Dahlia",
            content: ""
        },
        {
            id: 15,
            label: "1930",
            group: "dahlia",
            title: "Première exposition de dahlia",
            content: "la Société Nantaise du Dahlia organise une première exposition en 1930 à l’Orangerie du jardin des Plantes."
        },
        {
            id: 16,
            label: "1932",
            group: "dahlia",
            title: "Exposition Nationale de Dahlia",
            content: "En 1932 se tient au Château dans le bâtiment du harnachement, une exposition nationale, l’année suivante a lieu une exposition internationale de dahlia."
        },
        {
            id: 17,
            label: "1938",
            group: "dahlia",
            title: "Congrès international du dahlia",
            content: "En 1938, Nantes accueille le Congrès international du dahlia accompagné d’une grande exposition présentée au nouveau palais du Champ de Mars, inauguré à l’occasion le 14 septembre 1938"
        },
        {
            id: 18,
            label: "1861",
            group: "divers",
            title: "Grande exposition nationale",
            content: ""
        },
        {
            id: 19,
            label: "1904",
            group: "divers",
            title: "Grande exposition internationale",
            content: ""
        },
        {
            id: 20,
            label: "1861",
            group: "divers",
            title: "Exposition sur les cours Saint-Pierre et Saint-André",
            content: "En 1861, l’exposition qui se tient sur les Cours Saint-Pierre et Saint-André, est l’occasion de la création d’un jardin paysager avec cours d’eau et ponts"
        },
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
            color: 'white',
            face: 'Ubuntu',
            strokeWidth: 2,
            strokeColor: 'black'
        },
    },
    groups: {
        "core": {
            color: 'yellow'
        },
        "divers": {
            color: '#ecbf54'
        },
        "camellia": {
            color: '#e75665'
        },
        "chrysantheme": {
            color: '#f5bfcf'
        },
        "dahlia": {
            color: '#AB99FF'
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

VanillaTilt.init(image, {
    max: 25,
    speed: 400
});

network.on('hoverNode', (obj) => {
    if (obj.node !== undefined && obj.node !== 0) {
        let hoverNode = nodes[obj.node];
        nodeInfo.querySelector('h2').innerHTML = hoverNode.title;
        TweenMax.to(nodeInfo, 1, {y: "-100%"});
    }
});

network.on('blurNode', (obj) => {
    if (obj.node !== undefined && obj.node !== 0) {
        TweenMax.to(nodeInfo, 1, {y: "0%"});
    }
});

TweenMax.set(content, {autoAlpha: 0});
const tl = new TimelineMax();
tl.to(content, 1, {autoAlpha: 1});
tl.from(date, .5, {autoAlpha: 0, scale: 0.5}, '-=0.5');
tl.from(description, .5, {autoAlpha: 0, scale: 0.5}, '-=0.5');
tl.from(image, .5, {autoAlpha: 0, scale: 0.5}, '-=0.5');
tl.from(close, .5, {autoAlpha: 0, rotation: 180, top: -5}, '-=0.5');

tl.pause();

network.on('click', (obj) => {
    date.classList = 'date';
    if (obj.nodes[0] !== undefined && obj.nodes[0] !== 0) {
        let currentNode = nodes[obj.nodes[0]];
        // Wrapping of all letters in a span (for TweenMax animation)
        titre.innerHTML = currentNode.title.replace(/(.)/g, "<span>$&</span>");
        date.innerHTML = currentNode.label;
        date.classList += ' ' + currentNode.group;
        description.innerHTML = currentNode.content;
        image.style.backgroundImage = "url('./images/" + currentNode.label + "_" + currentNode.id + ".jpg')";

        //animations
        let letterspan = document.querySelectorAll('.event-content h2 span');
        TweenMax.staggerFrom(letterspan, .3, {autoAlpha: 0, rotation: 90}, 0.025);
        tl.play();
    }
});
close.onclick = (e) => {
    tl.reverse();
};

document.querySelector("canvas").onwheel = function (event) {
    event.preventDefault();
};

/*
* Timeline End
* */