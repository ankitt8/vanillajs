const data = ['text1', 'text2', 'text3', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9', 'text10', 'text11', 'text12', 'text13', 'text14', 'text15', 'text16', 'text17', 'text18', 'text19', 'text20', 'text21', 'text22', 'text23', 'text24', 'text25', 'text26', 'text27', 'text28', 'text29', 'text30', 'text31', 'text32', 'text33', 'text34', 'text35', 'text36', 'text37', 'text38', 'text39', 'text40', 'text41', 'text42', 'text43', 'text44', 'text45', 'text46', 'text47', 'text48', 'text49', 'text50', 'text51', 'text52', 'text53']
const dataSize = data.length;
const ele = document.querySelector('.infinite-scrolling-container');
const initialNumOfRowsToShow = 9;
let paginationIndex = 0;



// highlist row in the center
const centerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('focused');
    } else {
      entry.target.classList.remove('focused');
    }
  })
}, {
  rootMargin: "-50% 0px -50% 0px"
});

function appendRows(startIndex, lastIndex) {
  console.log('appendRows', startIndex, lastIndex);
  
  const fragment = document.createDocumentFragment();
  
  for (let i = startIndex; i <= lastIndex; i++) {
    if (i >= dataSize) {
      continue;
    };
    const div = document.createElement('div');
    div.className = 'row'
    div.textContent = data[i];
    fragment.appendChild(div);
    centerObserver.observe(div);
  }
  ele.appendChild(fragment);
}



function callback(entries, ) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('last element visible')
      paginationIndex += 1;
      const startIndex = (paginationIndex * initialNumOfRowsToShow) + 1;
      console.log(startIndex);
      // if (startIndex > dataSize) return;
      appendRows(startIndex, paginationIndex * initialNumOfRowsToShow + paginationIndex * initialNumOfRowsToShow);
    }
  });  
}

const options = {
  target: null,
  threshold: 1,
  rootMargin: "0px 0px -200px 0px"
}

const intersectionObserver = new IntersectionObserver(callback, options);
const targetEle = document.querySelector('.observer-target');
intersectionObserver.observe(targetEle);





appendRows(0, initialNumOfRowsToShow);
