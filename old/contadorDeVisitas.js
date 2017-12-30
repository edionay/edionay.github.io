window.addEventListener("load", function() {
        console.log("Bem-vindo(a)!");

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDj-UDV4cJqqHJtHDQCbDTKgh_tUErGh2k",
            authDomain: "contador-de-acessos-em-site.firebaseapp.com",
            databaseURL: "https://contador-de-acessos-em-site.firebaseio.com",
            projectId: "contador-de-acessos-em-site",
            storageBucket: "contador-de-acessos-em-site.appspot.com",
            messagingSenderId: "1082869795279"
        };
        firebase.initializeApp(config);
        
            // Get a reference to the database service
            var database = firebase.database();


        firebase.auth().signInAnonymously().catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        var totalDeVisitas;
        var referenciaAoTotalDeVisitas = firebase.database().ref('contador');
        referenciaAoTotalDeVisitas.once('value').then(consultaVisitasAtual);
           
        function consultaVisitasAtual (snapshot) {
            totalDeVisitas = snapshot.val();
            incrementarVisitas();
        }

        function incrementarVisitas(snapshot) {
            totalDeVisitas = totalDeVisitas + 1;
            referenciaAoTotalDeVisitas.set(totalDeVisitas);
        };
        
        referenciaAoTotalDeVisitas.on('value', function(snapshot) {
                var visitas = document.getElementById('visitas');
                visitas.innerText = "Acesso: " + snapshot.val();
        });

    });