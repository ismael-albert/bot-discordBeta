const jimp = require('jimp')

async function main(){

let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
let mask = await jimp.read("./jimp/mascara.png")
//let avatar = await jimp.read("./jimp/7mal.jpg")
let fundo = await jimp.read("./jimp/fundo.png")


Jimp.read('http://www.example.com/path/to/lenna.jpg')
  .then(image => {
    // Do stuff with the image.

avatar.resize(130, 130)
mask.resize(130, 130)
avatar.mask(mask)
fundo.print(fonte, 170, 175, 'MAEL')
fundo.composite(avatar,40, 90).write('beta.png')

  })
  .catch(err => {
    // Handle an exception.
    console.log('erro ao carregar a imagem')
  });


}
main()