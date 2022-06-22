let map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 49.23536773390601,
            lng: 28.468193370642787
        },
        zoom: 11
    });

    const locations = [
        {
            position: new google.maps.LatLng(49.24964982471641, 28.455594506063086),
            name: 'Замок-палац Ґрохольських',
            info: 'це замок-палац Ґрохольських',
            img: `<img src = "https://lh5.googleusercontent.com/p/AF1QipN8LNXkXjBdZK6iJOSChVzQQf-7cCzYfYAUydsb=w408-h306-k-no">`
        },

        {
            position: new google.maps.LatLng(49.23338034201405, 28.48572322699331),
            name: 'Фонтан Roshen',
            info: 'це фонтан Roshen',
            img: `<img src = "https://lh5.googleusercontent.com/p/AF1QipNjMopnD9fxG2_Wog0Umm4tNs0DT6sjaqwkz8dD=w408-h305-k-no"`,
        },

        {
            position: new google.maps.LatLng(49.23508305947715, 28.410850911665975),
            name: 'Вінницький національний технічний університет',
            info: 'це Вінницький національний технічний університет',
            img: `<img src = "https://lh5.googleusercontent.com/p/AF1QipPcCLUu8QC_5pHbAC8dsL-ZcQEUdvi7a4a6z3ik=w408-h544-k-no"`,
        },

        {
            position: new google.maps.LatLng(49.21512624542286, 28.40921389848869),
            name: 'Національний музей-садиба М.І. Пирогова',
            info: 'це національний музей-садиба М.І. Пирогова',
            img: `<img src = "https://lh5.googleusercontent.com/p/AF1QipP4LuwH6aU_cJ2UdZ8yj1rBCAIPKgjj9h9L9OMA=w408-h305-k-no"`,
        },
    ]


    const infoWindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });

        const content = `<div class = "img-holder">${locations[i].img}</div>
        <p>${locations[i].name}</p>
        <p>${locations[i].info}</p>
        `;

        marker.addListener('click', () => {
            infoWindow.setContent(content);
            infoWindow.open({
                anchor: marker,
                map,
            });
        })
    }

}