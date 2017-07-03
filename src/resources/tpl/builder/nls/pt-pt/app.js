/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "Aplicar",
      "close": "Fechar"
    },
    "header": {
      "sharingNotAvailable": "Isto não se encontra disponível até partilhar a sua história.",
      "edit": "Editar"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "Marcadores",
        "logoSharing": "Logo & Partilha",
        "theme": "Aspeto"
      },
      "bookmarks": {
        "title": "Secção",
        "bookmark": "Marcador",
        "intro": "Os marcadores são ligações a secções da história que são exibidos no cabeçalho. A criação de marcadores concisos para as principais secções da sua história ajuda os utilizadores se orientem na história.",
        "sequentialDefault": "Secção narrativa (não foi encontrado texto)",
        "immersiveDefault": "Secção Imersiva (não foi encontrado texto)",
        "titleDefault": "Secção de Título (não foi encontrado texto)",
        "coverDefault": "Secção de Capa (não foi encontrado texto)",
        "coverAppendage": "(Capa)"
      },
      "logoSharing": {
        "logo": "Logo",
        "logoButton": "Utilizar o Logo da ${ESRI}",
        "useOrgLogo": "Utilizar o logótipo da minha organização",
        "useOrgLogoHelp": "Utilize o valor disponibilizado pelo administrador.",
        "logoLink": "Ligação ao logótipo",
        "logoUploadProgress": "Carregamento do logótipo em curso",
        "logoUploadSuccess": "Logótipo carregado com sucesso.",
        "logoUploadError": "O carregamento do logótipo falhou, revertendo para o logótipo da ${ESRI}",
        "customHeaderText": "Slogan",
        "taglineLinkDisabledTooltip": "Introduza um slogan para ativar a ligação",
        "link": "Ligação ao slogan",
        "enableSocialSharing": "Exibir botão de partilha"
      },
      "appearance": {
        "themeLabel": "Tema",
        "fontLabel": "Fontes",
        "previewLabel": "Pré-visualizar",
        "fontsTitleLabel": "Títulos",
        "fontsBodyLabel": "Corpo",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "builderPanel": {
      "coverLabel": "Capa",
      "creditsLabel": "Créditos",
      "betaFeedback": "Feedback",
      "betaNote": "Por favor, dê-nos a sua opinião acerca de ${APP_NAME} ou comunique no caso de algo não estar a funcionar como pretende.",
      "notSharedNote": "A sua história não é partilhada, pode apenas ser visualizada por si.",
      "organizationWarning": "Para garantir que esta história pode ser visualizada por outros utilizadores, também tem de partilhar as respetivas cenas, camadas de cenas e aplicações incorporadas com a sua organização. Os mapas e as camadas de mapa são partilhados automaticamente.",
      "publicWarning": "Para garantir que esta história pode ser visualizada por outros utilizadores, também tem de partilhar as respetivas cenas e aplicações incorporadas com Todos. Os mapas e as camadas de mapa são partilhados automaticamente.",
      "addTitleNote": "Adicionar um título à capa para guardar",
      "saveError": "Ocorreu um erro ao guardar a sua história.",
      "duplicate": "Duplicar",
      "organize": "Organizar",
      "done": "Terminado",
      "invite": "À medida que constrói a sua história, as secções aparecem aqui...",
      "mystoriestooltip": "O Cascade Builder alerta-o para problemas na sua história e ajuda-o a corrigi-los. As cenas e as aplicações incorporadas não se encontram selecionadas, portanto, por favor, selecione-as manualmente."
    },
    "immersiveViewPanel": {
      "transition": "Transição",
      "fade": "Desvanecer",
      "fadeSlow": "Desvanecer Lento",
      "swipeVertical": "Deslizar Vertical",
      "swipeHorizontal": "Deslizar Horizontal",
      "none": "Nenhum",
      "disabledConsecutiveSameMedia": "Indisponível quando vistas consecutivas utilizam o mesmo media.",
      "disabledTooltipMap": "Para utilizar esta transição, as camadas de ambas as vistas têm de ser diferentes e as outras propriedades do mapa têm de ser iguais.",
      "disabledConsecutiveSameMap": "Indisponível quando vistas consecutivas utilizam o mesmo mapa.",
      "disabledNotInBeta": "Indisponível quando vistas consecutivas utilizam o mesmo mapa.",
      "disabledNonConsecutive": "Indisponível quando existe outra ocorrência deste media que é não-consecutiva-",
      "addMedia": "Adicionar media",
      "invite": "À medida que constrói a sua secção imersiva, as vistas aparecem aqui..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "Aspeto",
        "manage": "Gerir",
        "size": "Tamanho",
        "background": "Fundo",
        "mobile": "Mobile",
        "issues": "Problemas",
        "fixIssues": "Corrigir Problemas"
      },
      "manage": {
        "changeMedia": "Alterar imagem",
        "edit": "Editar",
        "editAside": "Abre num novo separador do navegador. Após guardar as suas edições, guarde e recarregue esta história para visualizar as alterações que efetuou.",
        "remove": "Remover"
      },
      "appearance": {
        "homeView": "Vista inicial",
        "audio": "Áudio",
        "on": "Ligar",
        "muted": "Silenciado",
        "volumeAside": "O vídeo será reproduzido automaticamente quando um leitor chega a esta vista. Caso silencie o som, o leitor não poderá ativá-lo.",
        "view": "Ver",
        "resetLocation": "Redefinir Localiz",
        "resetLayers": "Redefinir Camadas",
        "clearPopup": "Limpar Janela Pop-up",
        "interaction": "Interação",
        "interactionDisabled": "Interação Desativada",
        "buttonToEnable": "Botão para Ativar",
        "interactionEnabled": "Interação Ativada",
        "interactionAside": "*Nos dispositivos touch surge um botão de interação.",
        "slide": "Slide",
        "noSlides": "Não existem slides disponíveis.",
        "mapExtentPrompt": "Atualize o mapa para contar a sua história, clique no sinal de confirmação para guardar as alterações"
      },
      "sectionAppearance": {
        "layout": "Layout",
        "theme": "Tema"
      },
      "size": {
        "small": "Pequeno",
        "medium": "Média",
        "large": "Grande",
        "noCrop": "Não recortar imagens com altura elevada",
        "noCropTallTooltip": "Não recortar uma imagem com altura elevada produz um efeito significativo para quem lê, que obriga a fazer scroll para percorrer a imagem na sua totalidade."
      },
      "background": {
        "noCrop": "Não recortar",
        "mostImportantPart": "Selecionar o ponto mais importante",
        "cropExplanationImmersive": "Selecione um ponto na imagem para escolher como a mesma será recortada em diferentes tamanhos de ecrã. O ponto selecionado estará sempre visível. Marque a caixa ‘Não Recortar’ caso seja necessário que a sua imagem fique totalmente visível.",
        "cropExplanation": "Selecione um ponto na imagem para escolher como a mesma será recortada em diferentes tamanhos de ecrã. O ponto selecionado estará sempre visível.",
        "color": "Cor",
        "previews": "Pré-visualizações"
      },
      "altMedia": {
        "alternativeMedia": "Media Alternativos",
        "explanation": "Alguns media não são suportados ou podem não funcionar bem em dispositivos móveis. Recorra a este painel para selecionar um item alternativo, mais adequado a ambientes móveis, que será exibido ao invés deste media quando a sua história é visualizada num telefone ou num tablet.",
        "changeAltImage": "Alterar imagem",
        "uploadAltImage": "Adicionar imagem"
      }
    },
    "imageGallery": {
      "addImage": "Adicionar outra imagem",
      "moveBackward": "Mover para trás",
      "moveForward": "Mover para a frente"
    },
    "cover": {
      "titlePrompt": "Introduza o título da sua história...",
      "subtitlePrompt": "Faça scroll para baixo para começar, ou introduza um subtítulo opcional",
      "mediaPlaceholder": "Adicione a sua imagem ou vídeo",
      "saveError": "Guardar falhou, já possui um item com este título"
    },
    "credits": {
      "sectionInvite": "Adicionar um botão de créditos",
      "warning": "Ambos os campos têm de ser preenchidos",
      "content": "Conteúdo...",
      "source": "Origem...",
      "linkPrompt": "Ligação opcional...",
      "introductionPlaceholder": "Introduza uma introdução, opcional, à sua secção de créditos..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "Tema"
      },
      "panelConfig": {
        "position": "Posição",
        "theme": "Tema",
        "size": "Tamanho",
        "background": "Fundo",
        "layout": "Scrolling (para ambos os painéis)"
      }
    },
    "title": {
      "placeholder": "Introduza um título..."
    },
    "media": {
      "imageUpload": "Carregamento de imagem em curso...",
      "imageUploadSuccess": "Imagem carregada com sucesso",
      "imageUploadFail": "Falha ao carregar a imagem"
    },
    "controller": {
      "sectionOrganize": "Organizou as secções",
      "immersiveOrganize": "Organizou as vistas",
      "sectionDelete": "Eliminou uma secção",
      "viewDelete": "Eliminou uma vista"
    },
    "notification": {
      "cancel": "Cancelar",
      "close": "Fechar",
      "undo": "Anular"
    },
    "sections": {
      "sequence": "Narrativa",
      "immersive": "Imersivo",
      "title": "Título"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "Imagem",
        "webmap": "mapa",
        "webscene": "cena 3D",
        "video": "vídeo",
        "content": "conteúdo",
        "webpage": "página web"
      },
      "placeholders": {
        "generic": "Não é possível aceder a este conteúdo.",
        "deleted": "Este item foi eliminado.",
        "inaccessible": "Não é possível aceder a este conteúdo.",
        "unauthorized": "Não tem autorização para visualizar este conteúdo.",
        "unshared": "Este item não é partilhado do mesmo modo que a sua história.",
        "othersUnshared": "Este item não é partilhado do mesmo modo que a sua história.",
        "subscriptionContent": "Este mapa contém uma camada de subscrição.",
        "premiumContent": "Este mapa contém uma camada premium.",
        "secureService": "Este mapa contém uma camada segura."
      },
      "contentIssues": {
        "noAltImage": "Media Não Suportado em Dispositivos Móveis",
        "altImageBroken": "A imagem alternativa definida para este item de media não se encontra acessível."
      },
      "contentWarnings": {
        "noAltImage": "Este tipo de media não é suportado em dispositivos móveis. Introduza uma imagem alternativa que será exibida quando a história for visualizada em dispositivos móveis.",
        "noAltImageAlt": "Este tipo de media não é suportado em dispositivos móveis. No separador móvel, introduza uma imagem alternativa que será exibida quando a história for visualizada em dispositivos móveis."
      },
      "mapIssues": {
        "fixButton": "Corrigir Problemas",
        "nofixButton": "Problemas",
        "mapLabel": "Mapa:",
        "summaries": {
          "unshared": "Conteúdo Não-Partilhado",
          "othersUnshared": "Conteúdo Não-Partilhado de Outro Utilizador",
          "subscriptionContent": "Conteúdo de Subscritor",
          "premiumContent": "Conteúdo Premium",
          "secureContent": "Conteúdo Seguro",
          "deleted": "Conteúdo Eliminado",
          "inaccessible": "Conteúdo inacessível",
          "unauthorized": "Conteúdo Não-Autorizado"
        },
        "descriptions": {
          "unshared": "Este conteúdo não é partilhado do mesmo modo que a sua história.",
          "othersUnshared": "Este conteúdo é propriedade de outra pessoa e não é partilhado do mesmo modo que a sua história.",
          "othersUnsharedAuthorized": "Este conteúdo é propriedade de outra pessoam, mas é-lhe concedida autorização para o partilhar.",
          "inaccessible": "Não é possível aceder a este conteúdo.",
          "deleted": "Este conteúdo foi eliminado.",
          "unauthorized": "Não tem autorização para visualizar este conteúdo.",
          "popupFeatureLayer": "As janelas pop-up de uma camada de mosaicos provêm de uma camada de elementos que não é partilhada do mesmo modo que a sua história.",
          "subscriptionContent": "É necessário que autorize a utilização pública do conteúdo de subscritor.",
          "premiumContent": "É necessário que autorize a utilização pública do conteúdo premium.",
          "secureService": "Os seus leitores não têm acesso ao conteúdo seguro.",
          "missingItemWarning": "O item associado a esta camada foi eliminado."
        },
        "tooltips": {
          "unshared": "Clique para obter mais informações sobre partilha.",
          "othersUnshared": "Não possui permissões para partilhar conteúdo que pertença a outros. Peça ao proprietário que o partilhe, remova o mapa da sua história, ou edite o mapa para remover as camadas de que não é proprietário. Clique para obter mais informações sobre edição de mapas.",
          "inaccessible": "Remova este mapa da sua história ou edite-o para remover as camadas inacessíveis. Clique para obter mais informações sobre edição de mapas.",
          "deleted": "Remova este mapa da sua história ou edite-o para remover as camadas em falta. Clique para obter mais informações sobre edição de mapas.",
          "unauthorized": "Remova este mapa da sua história ou edite-o para remover as camadas em não-autorizadas. Clique para obter mais informações sobre edição de mapas.",
          "popupFeatureLayer": "As janelas pop-up de uma camada de mosaicos provêm de uma camada de elementos que não é partilhada do mesmo modo que a sua história.",
          "subscriptionContent": "O conteúdo de subscritor não consome quaisquer créditos. Clique para saber mais.",
          "premiumContent": "Serão cobrados créditos à sua organização de cada vez que alguém visualize uma camada premium na sua história. Clique para saber mais.",
          "secureService": "Remova o conteúdo seguro da sua história, ou clique para descobrir como autorizar a utilização de conteúdo seguro para outros utilizadores.",
          "missingItemWarning": "Esta camada continua funcional, mas os respetivos símbolos, janelas pop-up ou nome podem ter mudado. Confirme que a camada tem a aparência esperadam ou remova-a da sua história."
        },
        "fixButtons": {
          "share": "Partilhar",
          "hide": "Esconder",
          "authorize": "Autorizar",
          "remove": "Remover",
          "help": "Obter Ajuda",
          "ignore": "Ignorar",
          "confirm": "Confirmar",
          "edit": "Editar Mapa"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "Alguns mapas e camadas também foram partilhados.",
          "alsoSharedMaps": "Alguns mapas também foram partilhados.",
          "alsoSharedLayers": "Algumas camadas também foram partilhadas.",
          "sharedOthersContent": "Uilizou os seus privilégios aministrativos para partilhar conteúdo pertencente a outra pessoa."
        }
      },
      "storyHealth": {
        "healthy": "Sem assuntos",
        "notHealthy": "Corrigir problemas",
        "warnings": "Visualizar avisos"
      }
    }
  }
});