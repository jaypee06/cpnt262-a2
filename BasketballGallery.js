const randomImages = [
    {
      id:  1,
      title: 'Golden State Warriors arena',
      Description: 'People watching concert during night time at the Golden State Warriors arena.',
      width: '4032px',
      height: '3024px',
      pathURL: 'img1.jpg',
      linkURL: 'https://images.unsplash.com/photo-1591626291279-9f347d083814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      credit: 'Corleone Brown',
      creditURL: 'https://unsplash.com/@wugod1852'
    },
    {
        id: 2,
        title:'White and Orang Baksetball hoop',
        Description: 'NBA spalding ball shot inside the ring by a player',
        width: '2400px',
        height: '3600px',
        pathURL: 'img2.jpg',
        linkURL: 'https://images.unsplash.com/photo-1629297234856-b54624f3f298?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5iYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Tom Briskey',
        creditURL: 'https://unsplash.com/@tombriskey',
    },
    {
        id: 3,
        title: 'Toronto Raptors arena',
        Description: 'People cheering and watching a game in a Toronto Raptors arena',
        width: '3664px',
        height: '5496px',
        pathURL: 'img3.jpg',
        linkURL: 'https://images.unsplash.com/photo-1553174968-b6b7bb5f1e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5iYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        credit: 'Christian Mendoza',
        creditURL: 'https://unsplash.com/@buningmendoza',
    },
    {
        id: 4,
        title: 'Miami Heat arena',
        Description: 'Miami Heat Players practicing inside of basketball court for their next game',
        width: '4000px',
        height: '5000px',
        pathURL: 'img4.jpg',
        linkURL: 'https://images.unsplash.com/photo-1563506644863-444710df1e03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5iYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Andre Tan',
        creditURL: 'https://unsplash.com/@andredantan19',
    },
    {
        id: 5,
        title: 'Hoop',
        Description: 'A ball shot by a player that scored 3 points to win a game',
        width: '5650px',
        height: '3685px',
        pathURL: 'img5.jpg',
        linkURL: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5iYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Markus Spiske',
        creditURL: 'https://unsplash.com/@markusspiske',
    },
    {
        id: 6,
        title: 'Basketball court',
        Description: 'Areal view photography of yellow and blue full basketball court',
        width: '1961px',
        height: '3486px', 
        pathURL: 'img6.jpg',
        linkURL: 'https://images.unsplash.com/photo-1509027572446-af8401acfdc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Izuddin Helmi Adnan',
        creditURL: 'https://unsplash.com/@izuddinhelmi',
    },
    {
        id: 7,
        title: 'Kobe Bryant',
        Description: 'Late Kobe Bryant Art painting on the wall wearing jersey number 08',
        width: '2960px',
        height: '2027px',
        pathURL: 'img7.jpg',
        linkURL: 'https://images.unsplash.com/photo-1584770557404-a5d2a798e81a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Dean Bennett',
        creditURL: 'https://unsplash.com/@deanbennett',
    },
    {
        id: 8,
        title: 'Black and Brown basketball hoop',
        Description: 'Basketball court inside of a private property of an NBA player',
        width: '4480px',
        height: '6720px',
        pathURL: 'img8.jpg',
        linkURL: 'https://images.unsplash.com/photo-1583571779860-274b8e30b02e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Kelsey Powers',
        creditURL: 'https://unsplash.com/@kelseypowers',
    },
    {
        id: 9,
        title: 'Miami Heat',
        Description: 'People Watching a live NBA regular season game in Miami Heat arena',
        width: '3949px',
        height: '4936px',
        pathURL: 'img9.jpg',
        linkURL: 'https://images.unsplash.com/photo-1570840584974-9078b1d976c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        credit: 'Andre Tan',
        creditURL: 'https://unsplash.com/@andredantan19',
    },
    {
        id: 10,
        title: 'NBA spalding ball',
        Description: 'A candid picture of NBA spalding BasketBall on the ground',
        width: '7952px',
        height: '5304px',
        pathURL: 'img10.jpg',
        linkURL: 'https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        credit: 'Edgar Chaparro',
        creditURL: 'https://unsplash.com/@echaparro',
    }
];

let output = '';


randomImages.forEach(function(imageId){
  output += `
  <figure>
  <a href= "${imageId.linkURL}">
  <img src="images/sm/${imageId.pathURL}"  alt= "${imageId.title}" width="${imageId.width}" height= "${imageId.height}">
  </a>
  <figcaption> ${imageId.title}</figcaption>
  </figure>`
  
});

 

const images = document.querySelector('.hoop');
images.innerHTML = output;



