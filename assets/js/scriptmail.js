function limparCampos(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input');
    
  
    inputs.forEach(input => {
      input.value = '';
    });

    const resultado = document.getElementById('resultado');
    resultado.innerText = '';
    
  }
  
  function gerarMensagem(formId) {
    const form = document.getElementById(formId);
    let mensagem = ``;

        const saudacao = 
            formId === 'form1' ? document.getElementById('saudacao1').value :
            formId === 'form2' ? document.getElementById('saudacao2').value :
            formId === 'form3' ? document.getElementById('saudacao3').value :
            formId === 'form4' ? document.getElementById('saudacao4').value :
            formId === 'form5' ? document.getElementById('saudacao5').value :
            formId === 'form6' ? document.getElementById('saudacao6').value :
            formId === 'form7' ? document.getElementById('saudacao7').value :
            formId === 'form8' ? document.getElementById('saudacao8').value :
            formId === 'form9' ? document.getElementById('saudacao9').value :
            formId === 'form10' ? document.getElementById('saudacao10').value :
            'Valor Padrão para Outros Casos';

    if (formId === 'form1') {
      const equipamento = document.getElementById('equipamento').value;
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const paciente = document.getElementById('paciente').value;
      const hospital = document.getElementById('hospital').value;
  
      if (equipamento && data && hora && paciente && hospital) {
        mensagem = `Fernando, ${saudacao}.

        Por favor, agendar ${equipamento} para procedimento em ${data} às ${hora}.

        Paciente: ${paciente}
        
        Hospital: ${hospital}`;         
      }
    } else if (formId === 'form2') {
      const hospital2 = document.getElementById('hospital2').value;
      const ref1 = document.getElementById('ref1').value;
      const mat1 = document.getElementById('mat1').value;
      const qtd1 = document.getElementById('qtd1').value;
      const ref2 = document.getElementById('ref2').value;
      const mat2 = document.getElementById('mat2').value;
      const qtd2 = document.getElementById('qtd2').value;
      const ref3 = document.getElementById('ref3').value;
      const mat3 = document.getElementById('mat3').value;
      const qtd3 = document.getElementById('qtd3').value;
      const ref4 = document.getElementById('ref4').value;
      const mat4 = document.getElementById('mat4').value;
      const qtd4 = document.getElementById('qtd4').value;
      const ref5 = document.getElementById('ref5').value;
      const mat5 = document.getElementById('mat5').value;
      const qtd5 = document.getElementById('qtd5').value;
  
      if (hospital2 && ref1 && mat1 && qtd1) {
        mensagem = `Eduardo, ${saudacao}! 
        
        Solicito autorização para reposição de materiais no ${hospital2}.

        Segue relaçao solicitada:
        
        ${ref1} - ${mat1} - ${qtd1}
        ${ref2} - ${mat2} - ${qtd2}
        ${ref3} - ${mat3} - ${qtd3}
        ${ref4} - ${mat4} - ${qtd4}
        ${ref5} - ${mat5} - ${qtd5}`;
      }
    } else if (formId === 'form3'){
        const solicitante = document.getElementById('solicitante3').value;
        const representante = document.getElementById('representante3').value;

        if (solicitante && representante){
          mensagem = `Olá, ${solicitante}. ${saudacao}!
          
          Conforme alinhado anteriormente com ${representante}, nosso representante comercial, para este procedimento, gostaria de solicitar a gentileza de utilizar os materiais disponíveis em consignação permanente.
          
          Agradeço o contato e permaneço à disposição para qualquer dúvida ou suporte necessário.`;
        }
    } else if (formId === 'form4'){
        const solicitante = document.getElementById('solicitante4').value;

        if (solicitante){
          mensagem = `Olá, ${solicitante}. ${saudacao}!
          
          Recebemos seu e-mail e estamos dando continuidade no processo para que seja realizada a reposição dos materiais.
          
          Para previsão de entrega entrar em contato com nosso setor de logística através do e-mail: estoque@multimed.com.br
          
          Agradeço o contato e permaneço à disposição para qualquer dúvida ou suporte necessário.`;
        }
    } else if (formId === 'form5'){
        const solicitante = document.getElementById('solicitante5').value;

        if (solicitante){
          mensagem = `Olá, ${solicitante}. ${saudacao}!
          
          Peço desculpas por qualquer inconveniente causado, mas infelizmente, não poderei atender à solicitação neste momento. Circunstâncias imprevistas surgiram, impedindo-me de atender as expectativas. 
          
          Agradeço a compreensão e permaneço à disposição para qualquer dúvida ou suporte necessário.`;
        }
    }
  
    const resultado = document.getElementById('resultado');
    resultado.innerText = mensagem;
  }
  
  document.getElementById('formSelector').addEventListener('change', function() {
    const selectedForm = document.getElementById(this.value);
    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {
      if (form === selectedForm) {
        form.style.display = 'block';
      } else {
        form.style.display = 'none';
        limparCampos(form.id);
      }
    });
  });
  
  // Exibir o formulário 1 por padrão
  document.getElementById('form1').style.display = 'block';