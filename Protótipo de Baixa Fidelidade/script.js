// Pega todos os itens do menu
const menuItems = document.querySelectorAll('.menu-list li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove a classe active de todos
    menuItems.forEach(i => i.classList.remove('active'));

    // Adiciona active ao item clicado
    item.classList.add('active');

    // Mostra qual foi clicado (só para teste)
    console.log('Clicou em:', item.textContent.trim());
  });
});
const content = document.getElementById('content');

document.getElementById('btnCursos').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Gerenciar Cursos</h2>
    <p>Aqui você poderá cadastrar e organizar os cursos.</p>
  `;
});

document.getElementById('btnDisciplinas').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Gerenciar Disciplinas</h2>
    <p>Aqui você poderá cadastrar e organizar as disciplinas dos cursos.</p>
  `;
});

document.getElementById('btnProfessores').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Gerenciar Professores</h2>
    <p>Área para adicionar, editar ou remover professores do sistema.</p>
  `;
});

document.getElementById('btnTurmas').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Gerenciar Turmas</h2>
    <p>Aqui você poderá criar turmas e vincular cursos e alunos.</p>
  `;
});

document.getElementById('btnAulas').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Planejamento de Aulas</h2>
    <p>Consulte, edite e registre aulas para as turmas.</p>
  `;
});

document.getElementById('btnSubstituicoes').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Substituições de Aulas</h2>
    <p>Gerencie substituições de professores ou mudanças de horários.</p>
  `;
});

document.getElementById('btnDisponibilidade').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Disponibilidade de Horários</h2>
    <p>Defina a disponibilidade de horários dos professores.</p>
  `;
});

document.getElementById('btnConfiguracoes').addEventListener('click', () => {
  content.innerHTML = `
    <h2>Configurações do Sistema</h2>
    <p>Configurações gerais da aplicação, segurança, e preferências.</p>
  `;
});

document.getElementById('btnSair').addEventListener('click', () => {
  const confirmacao = confirm("Deseja realmente sair?");
  if (confirmacao) {
    content.innerHTML = `
      <h2>Você saiu do sistema</h2>
      <p>Obrigado por utilizar o painel do SENAI Cabo.</p>
    `;
  }
});
const menuButtons = document.querySelectorAll('.menu-list button');

const btnCursos = document.getElementById('btnCursos');

const cursosHTML = `
  <section>
    <h2 tabindex="-1">Gerenciar Cursos</h2>
    <p>Lista de cursos existentes</p>
    <button class="btn-add">Adicionar Curso</button>
    <table>
      <thead><tr><th>Curso</th><th>Ações</th></tr></thead>
      <tbody>
        <tr>
          <td>Curso Exemplo 1</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
            <button>Ver Disciplinas do Curso</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;

btnCursos.addEventListener('click', () => {
  content.innerHTML = cursosHTML;
  
  // Aqui pode colocar código para destacar botão ativo se quiser
});
const btnDisciplinas = document.getElementById('btnDisciplinas');

const disciplinasHTML = `
  <section>
    <h2 tabindex="-1">Gerenciar Disciplinas</h2>
    <p>Lista de disciplinas com curso relacionado</p>
    <button class="btn-add">Adicionar Disciplina</button>
    <div class="filters">
      <label for="filter-curso">Filtrar por Curso:</label>
      <select id="filter-curso">
        <option value="">Todos</option>
        <option value="curso1">Curso 1</option>
        <option value="curso2">Curso 2</option>
      </select>
      <label for="filter-carga">Filtrar por Carga Horária:</label>
      <select id="filter-carga">
        <option value="">Todas</option>
        <option value="30">30 horas</option>
        <option value="60">60 horas</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Disciplina</th>
          <th>Curso</th>
          <th>Carga Horária</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Disciplina Exemplo 1</td>
          <td>Curso 1</td>
          <td>30</td>
          <td>
            <button class="btn-edit">Editar</button>
            <button class="btn-delete">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;

btnDisciplinas.addEventListener('click', () => {
  content.innerHTML = disciplinasHTML;
});

const btnProfessores = document.getElementById('btnProfessores');

const professoresHTML = `
  <section>
    <h2 tabindex="-1">Gerenciar Professores</h2>
    <p>Nome, especialidade, disciplinas que pode lecionar</p>
    <button class="btn-add">Adicionar Professor</button>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Especialidade</th>
          <th>Disciplinas</th>
          <th>Disponibilidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>João Silva</td>
          <td>Matemática</td>
          <td>Álgebra, Geometria</td>
          <td>Manhã</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
            <button>Disponibilidade</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;

btnProfessores.addEventListener('click', () => {
  content.innerHTML = professoresHTML;
});
 const btnTurmas = document.getElementById('btnTurmas');

const turmasHTML = `
  <section>
    <h2 tabindex="-1">Gerenciar Turmas</h2>
    <p>Nome da turma, curso vinculado, turno e alunos matriculados.</p>
    <button class="btn-add">Nova Turma</button>
    <table>
      <thead>
        <tr>
          <th>Nome da Turma</th>
          <th>Curso Vinculado</th>
          <th>Turno</th>
          <th>Alunos Matriculados</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Turma Exemplo 1</td>
          <td>Curso 1</td>
          <td>Manhã</td>
          <td>25</td>
          <td>
            <button>Editar</button>
            <button>Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;

btnTurmas.addEventListener('click', () => {
  content.innerHTML = turmasHTML;
});

const btnAulas = document.getElementById('btnAulas');

const aulasHTML = `
  <section style="background:#fff; padding:1rem; max-width:600px; border-radius:6px; box-shadow:0 0 5px rgba(0,0,0,0.1);">
    <h2 tabindex="-1">Planejamento de Aulas</h2>
    <p>Grade semanal, seleção de turma, disciplina e professor, com verificação automática de disponibilidade.</p>
    <form>
      <label for="select-turma" style="display:block; margin-bottom:0.5rem; font-weight:600;">Selecione a Turma:</label>
      <select id="select-turma" required style="width:100%; padding:0.4rem; margin-bottom:1rem; border-radius:4px; border:1px solid #ccc;">
        <option value="">-- Escolha uma turma --</option>
        <option value="turma1">Turma 1</option>
        <option value="turma2">Turma 2</option>
      </select>

      <label for="select-disciplina" style="display:block; margin-bottom:0.5rem; font-weight:600;">Selecione a Disciplina:</label>
      <select id="select-disciplina" required style="width:100%; padding:0.4rem; margin-bottom:1rem; border-radius:4px; border:1px solid #ccc;">
        <option value="">-- Escolha uma disciplina --</option>
        <option value="disciplina1">Disciplina 1</option>
        <option value="disciplina2">Disciplina 2</option>
      </select>

      <label for="select-professor" style="display:block; margin-bottom:0.5rem; font-weight:600;">Selecione o Professor:</label>
      <select id="select-professor" required style="width:100%; padding:0.4rem; margin-bottom:1rem; border-radius:4px; border:1px solid #ccc;">
        <option value="">-- Escolha um professor --</option>
        <option value="professor1">Professor 1</option>
        <option value="professor2">Professor 2</option>
      </select>

      <button type="submit" style="background:#0d6efd; color:#fff; border:none; padding:0.5rem 1rem; border-radius:4px; cursor:pointer; font-size:1rem;">Salvar Aula</button>
    </form>
  </section>
`;

btnAulas.addEventListener('click', () => {
  content.innerHTML = aulasHTML;
});

const btnSubstituicoes = document.getElementById('btnSubstituicoes');

const substituicoesHTML = `
  <nav style="margin-bottom:1rem;">
    <button id="tabAula" style="margin-right:0.5rem;">Aula</button>
    <button id="tabTurma" style="margin-right:0.5rem;">Turma</button>
    <button id="tabDisciplina" style="margin-right:0.5rem;">Disciplina</button>
    <button id="tabProfessor" style="margin-right:0.5rem;">Professor</button>
    <button id="tabCurso">Curso</button>
  </nav>

  <section id="subAula" class="tabContent" style="display:block;">
    <h2>Substituição de Aula</h2>
    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:700px;">
      <thead style="background:#e9ecef;">
        <tr>
          <th>Data</th>
          <th>Turma</th>
          <th>Disciplina</th>
          <th>Professor Ausente</th>
          <th>Substituto</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15/07/2025</td>
          <td>Turma 1</td>
          <td>Matemática</td>
          <td>João Silva</td>
          <td>
            <select>
              <option value="">Selecione</option>
              <option value="profMaria">Maria Souza</option>
              <option value="profCarlos">Carlos Lima</option>
            </select>
          </td>
          <td>
            <button style="background:#0d6efd; color:#fff; border:none; padding:0.3rem 0.7rem; border-radius:4px; cursor:pointer;">
              Confirmar Substituição
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <section id="subTurma" class="tabContent" style="display:none">
    <h2>Substituição de Turma</h2>
    <form>
      <label>Turma atual: <input type="text" value="Turma 1" readonly></label><br>
      <label>Nova turma:
        <select>
          <option value="">Selecione</option>
          <option value="turma2">Turma 2</option>
          <option value="turma3">Turma 3</option>
        </select>
      </label><br>
      <button type="submit">Confirmar substituição de turma</button>
    </form>
  </section>

  <section id="subDisciplina" class="tabContent" style="display:none">
    <h2>Substituição de Disciplina</h2>
    <form>
      <label>Disciplina atual: <input type="text" value="Matemática" readonly></label><br>
      <label>Nova disciplina:
        <select>
          <option value="">Selecione</option>
          <option value="fisica">Física</option>
          <option value="quimica">Química</option>
        </select>
      </label><br>
      <button type="submit">Confirmar substituição de disciplina</button>
    </form>
  </section>

  <section id="subProfessor" class="tabContent" style="display:none">
    <h2>Substituição de Professor</h2>
    <form>
      <label>Professor atual: <input type="text" value="João Silva" readonly></label><br>
      <label>Professor substituto:
        <select>
          <option value="">Selecione</option>
          <option value="profMaria">Maria Souza</option>
          <option value="profCarlos">Carlos Lima</option>
        </select>
      </label><br>
      <button type="submit">Confirmar substituição de professor</button>
    </form>
  </section>

  <section id="subCurso" class="tabContent" style="display:none">
    <h2>Substituição de Curso</h2>
    <form>
      <label>Curso atual: <input type="text" value="Engenharia" readonly></label><br>
      <label>Novo curso:
        <select>
          <option value="">Selecione</option>
          <option value="administracao">Administração</option>
          <option value="direito">Direito</option>
        </select>
      </label><br>
      <button type="submit">Confirmar substituição de curso</button>
    </form>
  </section>
`;

btnSubstituicoes.addEventListener('click', () => {
  content.innerHTML = substituicoesHTML;

  const tabs = {
    tabAula: 'subAula',
    tabTurma: 'subTurma',
    tabDisciplina: 'subDisciplina',
    tabProfessor: 'subProfessor',
    tabCurso: 'subCurso',
  };

  Object.keys(tabs).forEach(tabId => {
    const btn = document.getElementById(tabId);
    btn.addEventListener('click', () => {
      Object.values(tabs).forEach(secId => {
        document.getElementById(secId).style.display = 'none';
      });
      document.getElementById(tabs[tabId]).style.display = 'block';
    });
  });
});


 const btnConfiguracoes = document.getElementById('btnConfiguracoes');

const configuracoesHTML = `
  <section>
    <h2 tabindex="-1">Configurações do Sistema</h2>
    <p>Configurações gerais da aplicação, segurança e preferências.</p>
    <form>
      <label for="config-tema">Tema:</label>
      <select id="config-tema">
        <option value="claro">Claro</option>
        <option value="escuro">Escuro</option>
      </select>

      <label for="config-notificacoes">Notificações:</label>
      <select id="config-notificacoes">
        <option value="ativadas">Ativadas</option>
        <option value="desativadas">Desativadas</option>
      </select>

      <label for="config-seguranca">Segurança:</label>
      <select id="config-seguranca">
        <option value="basico">Básico</option>
        <option value="avancado">Avançado</option>
      </select>

      <button type="submit">Salvar Configurações</button>
    </form>
  </section>
`;

btnConfiguracoes.addEventListener('click', () => {
  content.innerHTML = configuracoesHTML;
});
const btnDisponibilidade = document.getElementById('btnDisponibilidade');

const disponibilidadeHTML = `
  <section>
    <h2 tabindex="-1">Disponibilidade de Horário dos Professores</h2>
    <p>Selecione os horários em que cada professor está disponível</p>

    <label for="select-professor">Selecionar Professor:</label>
    <select id="select-professor">
      <option value="">Selecione</option>
      <option value="prof1">Prof. João Silva</option>
      <option value="prof2">Profª. Maria Oliveira</option>
    </select>

    <table class="horario-table">
      <thead>
        <tr>
          <th>Horário</th>
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
        </tr>
      </thead>
      <tbody>
        ${['08:00', '10:00', '14:00', '16:00'].map(hora => `
          <tr>
            <td>${hora}</td>
            ${['seg', 'ter', 'qua', 'qui', 'sex'].map(dia => `
              <td>
                <input type="checkbox" data-dia="${dia}" data-hora="${hora}">
              </td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>

    <div class="actions">
      <button id="salvar-disponibilidade">Salvar</button>
      <button id="editar-disponibilidade">Editar</button>
      <button id="excluir-disponibilidade">Excluir</button>
    </div>
  </section>
`;

// Armazenamento simulado da disponibilidade por professor
const disponibilidadeProfessores = {};

btnDisponibilidade.addEventListener('click', () => {
  content.innerHTML = disponibilidadeHTML;

  const selectProfessor = document.getElementById('select-professor');
  const checkboxes = () => document.querySelectorAll('.horario-table input[type="checkbox"]');

  // Salvar
  document.getElementById('salvar-disponibilidade').addEventListener('click', () => {
    const professor = selectProfessor.value;
    if (!professor) return alert('Selecione um professor.');

    const disponibilidade = [];

    checkboxes().forEach(cb => {
      if (cb.checked) {
        disponibilidade.push({ dia: cb.dataset.dia, hora: cb.dataset.hora });
      }
    });

    disponibilidadeProfessores[professor] = disponibilidade;
    alert('Disponibilidade salva!');
  });

  // Editar (carregar)
  document.getElementById('editar-disponibilidade').addEventListener('click', () => {
    const professor = selectProfessor.value;
    if (!professor) return alert('Selecione um professor.');

    const dados = disponibilidadeProfessores[professor];
    if (!dados) return alert('Nenhuma disponibilidade salva para este professor.');

    checkboxes().forEach(cb => {
      cb.checked = dados.some(item => item.dia === cb.dataset.dia && item.hora === cb.dataset.hora);
    });

    alert('Disponibilidade carregada para edição.');
  });

  // Excluir
  document.getElementById('excluir-disponibilidade').addEventListener('click', () => {
    const professor = selectProfessor.value;
    if (!professor) return alert('Selecione um professor.');

    if (disponibilidadeProfessores[professor]) {
      delete disponibilidadeProfessores[professor];
      checkboxes().forEach(cb => cb.checked = false);
      alert('Disponibilidade excluída.');
    } else {
      alert('Não há disponibilidade para excluir.');
    }
  });
});

 
const btnSair = document.getElementById('btnSair');

btnSair.addEventListener('click', () => {
  const confirmacao = confirm("Deseja realmente sair?");
  if (confirmacao) {
    content.innerHTML = `
      <section>
        <h2>Você saiu do sistema</h2>
        <p>Obrigado por utilizar o painel do SENAI Cabo.</p>
      </section>
    `;
  }
});

function loadContent(id) {
  if (id === 'btnSair') {
    const confirmacao = confirm("Deseja realmente sair?");
    if (!confirmacao) return;
  }

  content.innerHTML = sections[id] || '<p>Conteúdo não disponível.</p>';
  const heading = content.querySelector('h2');
  if (heading) heading.focus();

  menuButtons.forEach(btn => {
    btn.classList.toggle('active', btn.id === id);
    btn.setAttribute('aria-current', btn.id === id ? 'true' : 'false');
  });
}

menuButtons.forEach(button => {
  button.addEventListener('click', () => loadContent(button.id));
});

