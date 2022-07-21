export let renderModal = () => {

    // Se podría estudiar lo que hicimos en laravel en "notification.js" para que con la misma ventana salgan mensajes diferentes.

    let chargeModalContainer = document.querySelector('.charge-window-container');
    let destroyModalContainer = document.querySelector('.destroy-window-container');
    let denieButtons = document.querySelectorAll('.denie');
    let acceptButtons = document.querySelectorAll('.accept');

    let destroyButton = document.querySelector('.destroy-button');
    let chargeButton = document.querySelector('.charge-button');

    if(chargeModalContainer || destroyModalContainer) {

        // eliminar

        destroyButton.addEventListener('click', function(event) {
            destroyModalContainer.classList.add('active');
        });

        // cobrar

        chargeButton.addEventListener('click', function(event) {
            chargeModalContainer.classList.add('active');
        });

        console.log(denieButtons);

        denieButtons.forEach((denieButton) => {

            denieButton.addEventListener('click', function(event) {

                chargeModalContainer.classList.remove('active');
                destroyModalContainer.classList.remove('active');
            });
        });

        acceptButtons.forEach((acceptButton) => {

            acceptButton.addEventListener('click', function(event) {

                chargeModalContainer.classList.remove('active');
                destroyModalContainer.classList.remove('active');
            });
        });

        // Tratando de hacer que se cierre la ventana cuando se hace click afuera de la caja del mensaje.
        //
        // chargeModalContainer.addEventListener('click', function(event) {
        //     chargeModalContainer.classList.remove('active');
        // });

        // destroyModalContainer.addEventListener('click', function(event) {
        //     destroyModalContainer.classList.remove('active');
        // });
    }
}