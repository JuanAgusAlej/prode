import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  EN: {
    translation: {
      loading: 'loading data...',
      name: 'Name',
      email: 'Email',
      region: 'Region',
      points: 'Points',
      modifyUser: 'MODIFY USER',
      currentIcon: 'Current icon',
      changeIcon: 'Change icon',
      currentUsername: 'Current username',
      changeUsername: 'Change username',
      currentLanguage: 'Current language',
      changeLanguage: 'Change language',
      save: 'Save',
      fixture: 'Fixture',
      tutorial: 'Tutorial',
      prizes: 'Prizes',
      howToPlay: 'HOW TO PLAY',
      tuto1:
        'First of all, you need to be on Home, go to the fixture, and touch the matches to be played',
      tuto2: 'Then you will see all the available matches here',
      tuto3: 'Here you can guess your winner and the amount of each team goals',
      tuto4: 'If you accert the exact result, you will win 5 points',
      tuto5:
        'If you accert the winner but not the exact result, you will win 3 points',
      tuto6: 'If you dont accert anything, you will not win points',
      tuto7: 'You can see your total score on top of the screen',
      tuto8:
        'Also you can see the leaderboard to check the best prode players of your region',
      tuto9: 'Finally, you can win amazing prizes on the process',
      gamesPlayed: 'Finished games',
      gamesToBePlayed: 'Games to be played',
      predict: 'Predict',
      predictEdit: 'Edit prediction',
      youHave: 'You have',
      leftToPlay: 'left to play',
    },
  },
  ES: {
    translation: {
      loading: 'cargando datos...',
      name: 'Nombre',
      email: 'Email',
      region: 'Region',
      points: 'Puntos',
      modifyUser: 'MODIFICAR USUARIO',
      currentIcon: 'Icono actual',
      changeIcon: 'Cambiar icono',
      currentUsername: 'Username actual',
      changeUsername: 'Cambiar username',
      currentLanguage: 'Idioma actual',
      changeLanguage: 'Cambiar idioma',
      save: 'Guardar',
      fixture: 'Fixture',
      tutorial: 'Tutorial',
      prizes: 'Premios',
      howToPlay: 'COMO JUGAR',
      tuto1:
        'Primero que nada dirigite a la pesta??a Home, toca en fixture y finalmente en partidos por jugar',
      tuto2: 'Luego podras ver todos los partidos disponibles',
      tuto3: 'Aqui podr??s elegir el ganador y la cantidad de goles por equipo',
      tuto4: 'Si acert??s el resultado exacto, ganar??s 5 puntos',
      tuto5:
        'Si acert??s el ganador,pero no el resultado exacto, ganar??s 3 puntos',
      tuto6: 'Si no acert??s el ganador, no recibir??s puntos',
      tuto7: 'Puedes ver tu puntaje total en la parte superior de la pantalla',
      tuto8:
        'Tambi??n podr??s ver la tabla general para ver los mejores puntajes de tu regi??n',
      tuto9: 'Finalmente puedes ganar grandes premios en el proceso',
      gamesPlayed: 'Partidos terminados',
      gamesToBePlayed: 'Partidos por jugar',
      predict: 'Predecir',
      predictEdit: 'Editar predicci??n',
      youHave: 'Tienes',
      leftToPlay: 'restantes para jugar',
    },
  },
  PT: {
    translation: {
      loading: 'carregando dados...',
      name: 'Nome',
      email: 'Email',
      region: 'Regi??o',
      points: 'Pontos',
      modifyUser: 'MODIFICAR USUARIO',
      currentIcon: 'Icone atual',
      changeIcon: 'Mudar ??cone',
      currentUsername: 'Username atual',
      changeUsername: 'Mudar username',
      currentLanguage: 'Idioma atual',
      changeLanguage: 'Mudar idioma',
      save: 'Salve',
      fixture: 'Fixture',
      tutorial: 'Tutorial',
      prizes: 'Pr??mios',
      howToPlay: 'COMO JOGAR',
      tuto1:
        'Em primeiro lugar, v?? para a guia Home, toque em fixture e, finalmente, em jogos para jogar',
      tuto2: 'Ent??o voc?? pode ver todas as correspond??ncias dispon??veis',
      tuto3: 'Aqui voc?? pode escolher o vencedor e o n??mero de gols por equipe',
      tuto4: 'Se voc?? acertar o resultado exato, ganhar?? 5 pontos',
      tuto5:
        'Se voc?? adivinhar o vencedor, mas n??o o resultado exato, ganhar?? 3 pontos',
      tuto6: 'Se voc?? n??o adivinhar o vencedor, n??o receber?? pontos',
      tuto7: 'Voc?? pode ver sua pontua????o total no topo da tela',
      tuto8:
        'Voc?? tamb??m pode visualizar a tabela geral para ver as melhores pontua????es para sua regi??o',
      tuto9: 'Voc?? pode finalmente ganhar grandes pr??mios no processo',
      gamesPlayed: 'Partidas finalizadas',
      gamesToBePlayed: 'Partida por jogar',
      predict: 'Prever',
      predictEdit: 'Editar previs??o',
      youHave: 'Voc?? tem',
      leftToPlay: 'restante para jogar',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ES', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
