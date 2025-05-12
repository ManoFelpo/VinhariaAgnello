function confirmAge(isOfAge) {
    if (isOfAge) {
        document.getElementById('age-modal').style.display = 'none';
    } else {
        alert('Você precisa ser maior de 18 anos para acessar este site.');
        window.location.href = "https://www.google.com"; // Ou qualquer outro link que você quiser
    }
}