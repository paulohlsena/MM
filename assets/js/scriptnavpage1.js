
const sections = document.querySelectorAll('.content section');

// Função para controlar a ativação do menu
function setActiveLink(index) {
  document.querySelectorAll('nav a').forEach((link, i) => {
    if (i === index) {
      link.classList.add('active'); // Adiciona a classe 'active' ao link selecionado
    } else {
      link.classList.remove('active'); // Remove a classe 'active' dos outros links
    }
  });
}

document.querySelectorAll('nav a').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    sections.forEach(section => {
      section.classList.add('hidden');
    });

    sections[index].classList.remove('hidden');
    setActiveLink(index); // Chama a função para ativar visualmente o link do menu
  });
});
