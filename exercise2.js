var i = 1;
function refresh(){
  var theImgTag = document.getElementById("image");
  if (i == 0){
    theImgTag.src = "https://media.discordapp.net/attachments/750482796262457408/950561130324058122/202203071910201000.jpg?width=1731&height=1297";
  }
  else if (i == 1){
    theImgTag.src = "https://media.discordapp.net/attachments/750482796262457408/1011315004122873878/IMG_20220809_232935.jpg?width=2880&height=1296";
  }
  else if (i == 2){
    theImgTag.src = "https://media.discordapp.net/attachments/750482796262457408/932024585216458852/DJI_0211.JPG?width=2304&height=1296";
  }
  else if (i == 3){
    theImgTag.src = "https://media.discordapp.net/attachments/750482796262457408/807296199593689128/IMG_20210128_180120__01.jpg?width=1728&height=1296";
  }
  else {
    theImgTag.src = "https://media.discordapp.net/attachments/685490131163152480/1006301926486454383/IMG_20220808_154321.jpg?width=2874&height=1297";
  }
}
function previos()
{
  i = i + 4;
  i = i % 5;
  refresh();
}
function next()
{
  i = i + 1;
  i = i % 5;
  refresh();
}