$(document).ready(function() {
            $("#map").goMap({
                latitude: 53.11700,
                longitude:  23.14607,
                zoom: 16,
                scaleControl: true,
                maptype: "SATELLITE"
            });

            $.goMap.createMarker({
                latitude: 53.11750,
                longitude:  23.14657,
                title: "PB",
                html: {
                    content: "<h2>Politechnika Białostocka</h2><p>Wydział Informatyki</p>",
                    popup: true
                }
            });
        });

$(document).ready(function() {
    $("#signup").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                rangelength:[8,16]
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            },
            dob: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Podaj adres e-mail.",
                email: "To nie jest prawidłowy adres e-mail."
            },
            password: {
                required: "Wpisz hasło.",
                rangelength: "Hasło musi mieć od 8 do 16 znaków."
            },
            confirm_password: {
                required: "Wpisz hasło ponownie.",
                equalTo: "Podane hasła nie pasują do siebie."
            },
            dob: {
                required: "Podaj datę urodzenia."
            }
        }
            });
        });