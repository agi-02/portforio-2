// 画像拡大に関するプログラム-start
const thumbs = document.querySelectorAll(".column-hobby");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("closeBtn");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    const imgSrc = img.dataset.img;
    console.log("../image/15.jpg", imgSrc);
    if (imgSrc) {
      overlayImg.src = imgSrc;
      overlay.style.display = "flex";
    }
  });
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
// 画像拡大に関するプログラム-end

// エラーメッセージに関するプログラム-START

// エラーメッセージに関するプログラム-END
