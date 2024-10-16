document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value;
        
        // Obtener emails existentes o inicializar un array vacío
        let emails = JSON.parse(localStorage.getItem('emails')) || [];
        
        // Agregar el nuevo email si no existe
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('emails', JSON.stringify(emails));
            alert('¡Gracias por suscribirte!');
        } else {
            alert('Este email ya está registrado.');
        }
        
        emailInput.value = '';
    });
});
function mostrarEmails() {
    const emails = JSON.parse(localStorage.getItem('emails')) || [];
    console.log('Emails registrados:', emails);
}