/*eslint quotes:[2, 'double'] */
define({
  "mediaPicker": {
    "browseToggle": {
      "urls": "Vincular ao Conteúdo",
      "urls_short": "Vincular",
      "contentType": {
        "error": "Nenhuma mídia autorizada.",
        "imageOnly": "Nesta parte da história, você pode adicionar uma imagem.",
        "imageAndVideo": "Nesta parte da história, você pode adicionar uma imagem ou um vídeo.",
        "imageVideoWebpage": "Nesta parte da história, você pode adicionar uma imagem, um vídeo ou uma página da web."
      }
    },
    "browsePanel": {
      "providers": {
        "searchingFor": "Procurando por \"${searchterm}\"...",
        "searchedFor": "Resultados de pesquisa para \"${searchterm}\"",
        "albumsOf": "Álbuns do ${username}",
        "noPhotosFound": "Nenhum foto corresponteu a sua pesquisa. Tente novamente.",
        "noItemsFound": "Nenhum item correspondeu a sua pesquisa. Tente novamente.",
        "noItemsInThisStory": "Nenhum conteúdo do ArcGIS foi adicionado a esta história ainda.",
        "limitReached": "Mostrando 100 itens. Se você não localizou o que você precisa, tente uma pesquisa de palavra-chave.",
        "galleryItems": {
          "uploadError": "Desculpe, este item falhou ao transferir."
        },
        "agol": {
          "remove1": "Exclua esta imagem não utilizada da sua conta do ArcGIS.",
          "remove2": "(Você precisará carregá-la novamente se você decidir utilizá-la posteriormente.)",
          "removeFailed": "Remova esta imagem inacessível desta lista.",
          "modified": "Modificado ${date}",
          "uploaded": "Transferido ${date}",
          "contentByAuthor": "${contentType} por ${author}"
        },
        "googlePhotos": {
          "searchAndBrowse": "Procure fotos no ${Picasa} ou ${Google+}"
        },
        "flickr": {
          "photostream": "Photostream",
          "searchAndBrowse": "Pesquise e procure fotos no ${Flickr}"
        },
        "unsplash": {
          "searchAndBrowse": "Pesquisa de fotos em ${Unsplash}",
          "photoBy": "Fotos por ${username}",
          "userLink": "Vá até a página do ${username} ${Unsplash}"
        },
        "urlContent": {
          "uploadHeaders": {
            "generic": "Link para o conteúdo na web",
            "imageOnly": "Link para uma imagem na web",
            "imageAndVideo": "Link para uma imagem ou vídeo na web"
          },
          "linkText": {
            "imageOnly": "Na caixa acima, você pode gerar o link diretamente para fotos.",
            "imageAndVideo1": "Na caixa acima, você pode colar os links ou código iframe dos vídeos do ${YouTube} e ${Vimeo}.",
            "imageAndVideo2": "Você também pode gerar links diretamente para fotos.",
            "imageVideoWebpage1": "Na caixa acima, você pode colar os links ou código iframe dos vídeos do ${YouTube} e ${Vimeo}.",
            "imageVideoWebpage2": "Você também pode gerar links diretamente para fotos, páginas da web ou aplicativos da web.",
            "ender": "Quando possível, utilize links (https) seguros."
          },
          "embedProtocol": {
            "embedProtocolLabel": "Carregar página ao longo de uma conexão segura (https)",
            "embedProtocolWarning1": "Se esta página não for carregada na sua história, ela não poderá ser embutida por razões de segurança da web.",
            "embedProtocolWarning2": "Se esta página não for carregada na sua história, desmarque esta opção e tente novamente. Se a página ainda não estiver carregada, ela não poderá ser embutida por razões de segurança da web.",
            "embedProtocolWarning3": "Como alternativa, adicione um link na sua narrativa para abrir a página em uma nova guia do navegador. ${linkText}",
            "linkText": "Obtenha Mais Informações."
          },
          "placeholder": "${https://}... ou ${http://}... ou ${<iframe>}",
          "uploadErrors": {
            "generic": "Algo deu errado com o endereço inserido. Tente novamente.",
            "imageOnly1": "Você deve utilizar uma imagem nesta parte da história.",
            "imageOnly2": "Forneça um link para uma imagem (.jpg, .png, .gif) ou escolha uma imagem ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
            "imageAndVideo1": "Você deve utilizar uma imagem ou vídeo nesta parte da história.",
            "imageAndVideo2": "Forneça um link para uma imagem (.jpg, .png, .gif) ou um vídeo em ${YouTube} ou ${Vimeo}, ou escolha uma imagem ${ArcGIS}, ${Flickr}, ${Google+} ou ${Unsplash}.",
            "badFormat": "O link para o arquivo que você está tentando adicionar está formatado incorretamente.",
            "inaccessible": "O arquivo que você está tentando adicionar está faltando ou não está acessível.",
            "tryAgain": "Verifique o endereço e tente novamente.",
            "mediaTypes": {
              "VIDEO": "vídeo",
              "IMAGE": "imagem",
              "generic": "mÃ­dia"
            }
          }
        }
      },
      "sidePanel": {
        "googlePhotos": {
          "placeholder": "E-mail ou ${Picasa}/${Google+} ID",
          "helpText": "Você pode adicionar fotos transferidas para ${Picasa} ou ${Google+} para sua história. ${helpLinkText} sobre imagens armazenadas em sua conta do ${Google} em suas histórias.",
          "helpLinkText": "Mais informações",
          "cannotFindUser": "Não é possível localizar usuário ${username}. Tente novamente."
        },
        "unsplash": {
          "placeholder": "Procurar por fotos",
          "aboutText": "${Unsplash} é uma coleção curada de fotos grutuitas de alta qualidade.",
          "copyrightText": "Todas as fotos publicadas no ${Unsplash} são licenciadas na Licença ${CC0}. Localize mais informações ${moreInfoLink}.",
          "moreInfoLink": "aqui"
        },
        "flickr": {
          "searchType": {
            "account": "${Flickr} Conta",
            "text": "Todos ${Flickr}"
          },
          "placeholders": {
            "user": "Procurar por conta",
            "userText": "Procure esta conta por fotos",
            "text": "Procurar por fotos"
          },
          "errors": {
            "cannotFindUser": "Não é possível localizar usuário ${username}.",
            "noUserPhotos": "${username} não tem quaisquer fotos públicas.",
            "didYouMean": "Você querer dizer ${username}?",
            "generalUserError": "Algo deu errado ao procurar por usuário ${username}."
          },
          "licenses": {
            "licenseLabel": "Licença: ",
            "public": "Domínio Público",
            "commercial": "OK para Uso Comercial",
            "nonCommercial": "OK para Uso Não-Comercial",
            "reserved": "Todos os Direitos Reservados",
            "any": "Qualquer Licença"
          }
        },
        "agol": {
          "searchLocation": {
            "thisStory": "Esta História",
            "agol": "ArcGIS Online",
            "portalArcGIS": "Portal for ArcGIS",
            "portal": "Portal",
            "myOrg": "${orgname} Organização",
            "myContent": "Meu Conteúdo"
          },
          "createContent": {
            "or": "OU",
            "dragAndDrop": "Solte as imagems aqui",
            "uploadImage": "Procurar por imagem(s)",
            "agolInfo": "As imagens serão armazenadas na sua conta do ArcGIS e acessíveis somente dentro da sua história.",
            "saveBeforeUpload": "Após você salvar esta história, você pode transferir as imagens para o ArcGIS aqui.",
            "fileTypesImage": "Tipos dos arquivos suportados: .png, .jpeg, .jpg, .gif, .bmp"
          },
          "filterAndSort": {
            "webmap": "Mapa da Web",
            "webscene": "Web Scene",
            "image": "Imagem",
            "date": "Data",
            "sortByDate": "Classificar por data",
            "title": "Título",
            "sortByTitle": "Classificar por título",
            "views": "Visualizações",
            "search": "Procurar por palavra-chave ou ID"
          }
        }
      }
    }
  }
});