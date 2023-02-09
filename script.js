/*First Section*/

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const cloneCaption = () => {
  const element = document.querySelector(".item");
  const cloneElement = element.cloneNode(true);
  const elements = document.querySelector(".item");
  elements.after(cloneElement);
};


const deleteCaption = () => {
  const element = document.querySelector(".item");
  element.remove();
}

/*Second Section*/

const readInput1 = () => {
  const input = document.querySelector("input");
  for (let i = 0; i < input.value; i++) {
    addCandle();
  }
};


const readInput2 = () => {
    const input = document.querySelector("input");
    for (let i = 0; i < input.value; i++) {
        removeCandle();
    }
  };

const addCandle = () => {
  const candle = document.querySelector(".candle__row");
  const newCandle = document.createElement("img");
  newCandle.setAttribute("src", "img/candle.png");
  newCandle.classList.add("candle");
  candle.append(newCandle);
};

const removeCandle = () => {
  const candle = document.querySelector(".candle");
  candle.remove();
};

/*Third Section*/

const addStar = () => {
  const star = document.querySelector(".star__row");
  const newStar = document.createElement("img");

  newStar.setAttribute("src", "img/star.png");
  newStar.classList.add("star");

  star.append(newStar);
};

const removeStar = () => {
  const candle = document.querySelector(".star");
  candle.remove();
};
