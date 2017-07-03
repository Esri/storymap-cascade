/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Ligação a Conteúdo",
      "urls_short": "Ligação",
      "contentType": {
        "error": "Não existem media autorizados.",
        "imageOnly": "Nesta parte da história pode adicionar uma imagem.",
        "imageAndVideo": "Nesta parte da história pode adicionar uma imagem ou um vídeo.",
        "imageVideoWebpage": "Nesta parte da história pode adicionar uma imagem, um vídeo ou uma página web."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "A pesquisar \"${searchterm}\"...",
        "searchedFor": "Resultados de pesquisa para \"${searchterm}\"",
        "albumsOf": "Álbuns de ${username}",
        "noPhotosFound": "Não existem fotografias que correspondam à sua pesquisa. Por favor, tente novamente.",
        "noItemsFound": "Não foram encontrados itens que correspondam à sua pesquisa. Por favor, tente novamente.",
        "noItemsInThisStory": "Ainda não foi adicionado qualquer conteúdo de ArcGIS a esta história.",
        "limitReached": "A exibir 100 Itens. Se não encontrou aquilo de que necessita, tente uma pesquisa por palavras-chave.",
        "galleryItems": {
          "uploadError": "Lamentamos, ocorreu uma falha ao carregar este item."
        },
        "agol": {
          "remove1": "Elimine esta imagem não-utilizada da sua conta ArcGIS.",
          "remove2": "(Terá de carregá-la novamente caso decida utilizá-la mais tarde.)",
          "removeFailed": "Remova esta imagem inacessível desta lista.",
          "modified": "Modificado em ${date}",
          "uploaded": "Atualizado em ${date}",
          "contentByAuthor": "${contentType} por ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Procure fotografias no ${Picasa} ou no ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Pesquise e procure fotos no ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Pesquise fotos no ${Unsplash}",
          "photoBy": "Fotografia de ${username}",
          "userLink": "Dirija-se à página de ${username} do ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Ligar a conteúdo na web",
            "imageOnly": "Ligar a uma imagem na web",
            "imageAndVideo": "Ligar a uma imagem ou vídeo na web"
          },
          "linkText": {
            "imageOnly": "Na caixa acima, pode efetuar diretamente a ligação a fotografias.",
            "imageAndVideo1": "Na caixa acima, pode colar ligações ou código iframe para vídeos de ${YouTube} e ${Vimeo}.",
            "imageAndVideo2": "Pode ainda ligar diretamente a fotografias.",
            "imageVideoWebpage1": "Na caixa acima, pode colar ligações ou código iframe para vídeos de ${YouTube} e ${Vimeo}.",
            "imageVideoWebpage2": "Pode ainda ligar diretamente a foos, páginas web ou aplicações web.",
            "ender": "Sempre que possível, utilize ligações seguras (https)."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Carregar página através de uma ligação segura (https)",
            "embedProtocolWarning1": "Caso a página não seja carregada na sua história, não poderá ser incorporada, por motivos de segurança web.",
            "embedProtocolWarning2": "Caso esta página não seja carregada na sua história, desmarque esta opção e tente novamente. Caso a página continue a não ser carregada, não poderá ser incorporada, por motivos de segurança web.",
            "embedProtocolWarning3": "Em alternativa, adicione uma ligação à sua narrativa para abrir a página num novo separador do navegador ${linkText}",
            "linkText": "Saber Mais."
          },
          "placeholder": "${https://}... or ${http://}... ou ${<iframe>}",
          "uploadErrors": {
            "generic": "Algo correu mal com o endereço introduzido. Por favor, tente novamente.",
            "imageOnly1": "Tem de utilizar uma imagem nesta parte da história.",
            "imageOnly2": "Por favor, forneça uma ligação a uma imagem (.jpg, .png, .gif), ou selecione uma imagem de ${ArcGIS}, ${Flickr}, ${Google+}, ou ${Unsplash}.",
            "imageAndVideo1": "Tem de utilizar uma imagem ou um vídeo nesta parte da história.",
            "imageAndVideo2": "Por favor, forneça uma ligação a uma imagem (.jpg, .png, .gif) ou um vídeo no ${YouTube} ou ${Vimeo}, ou selecione uma imagem de ${ArcGIS}, ${Flickr}, ${Google+}, ou ${Unsplash}.",
            "badFormat": "A ligação ao ficheiro que está a tentar adicionar encontra-se incorretamente formatada.",
            "inaccessible": "O ficheiro que está a tentar adicionar encontra-se em falta ou inacessível.",
            "tryAgain": "Por favor, verifique o endereço e tente novamente.",
            "mediaTypes": {
              "VIDEO": "vídeo",
              "IMAGE": "Imagem",
              "generic": "media"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "Correio Eletrónico ou ID de ${Picasa}/${Google+}",
          "helpText": "Pode adicionar fotografias carregadas para ${Picasa} ou ${Google+} à sua história. ${helpLinkText} sobre a utilização de imagens armazenadas na sua conta ${Google} nas suas histórias.",
          "helpLinkText": "Saiba mais",
          "cannotFindUser": "Não é possível encontrar o utilizador ${username}. Por favor, tente novamente."
        },
        "unsplash": {
          "placeholder": "Pesquisar fottografias",
          "aboutText": "${Unsplash} é uma coleção curada de fotografias gratuitas, de alta qualidade.",
          "copyrightText": "Todas as fotografias publicadas no ${Unsplash} encontram-se licenciadas através da Licença ${CC0}. Obtenha mais informações ${moreInfoLink}.",
          "moreInfoLink": "aqui"
        },
        "flickr": {
          "searchType": {
            "account": "Conta ${Flickr}",
            "text": "Tudo no ${Flickr}"
          },
          "placeholders": {
            "user": "Pesquisar conta",
            "userText": "Pesquisar fotografias nesta conta",
            "text": "Pesquisar fottografias"
          },
          "errors": {
            "cannotFindUser": "Não é possível encontrar o utilizador ${username}.",
            "noUserPhotos": "${username} não possui quaisquer fotografias públicas.",
            "didYouMean": "Referia-se a ${username}?",
            "generalUserError": "Alco correu mal ao pesquisar o utilizador ${username}."
          },
          "licenses": {
            "licenseLabel": "Licença: ",
            "public": "Domínio Público",
            "commercial": "OK para Utilização Comercial",
            "nonCommercial": "OK para Utilização Não-Comercial",
            "reserved": "Todos os Direitos Reservados",
            "any": "Qualquer Licença"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Este História",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "Organização ${orgname}",
            "myContent": "O Meu Conteúdo"
          },
          "createContent": {
            "or": "OU",
            "dragAndDrop": "Solte imagem(ens) aqui",
            "uploadImage": "Procurar imagem(ens)",
            "agolInfo": "As imagens serão armazenadas na sua conta ArcGIS e estarão acessíveis apenas dentro da sua história.",
            "saveBeforeUpload": "Após guardar esta história, pode carregar imagens para ArcGIS aqui.",
            "fileTypesImage": "Tipos de ficheiros suportados: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Mapa Web",
            "webscene": "Cena Web",
            "image": "Imagem",
            "date": "Data",
            "sortByDate": "Ordenar por data",
            "title": "Título",
            "sortByTitle": "Ordenar por título",
            "views": "Visualizações",
            "search": "Pesquisar por palavra-chave ou ID"
          }
        }
      }
    }
  }
});