const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {

  // formがリクエストをするのを阻止する
  e.preventDefault();

  // 入力をした値を取得
  const searchTermInput = form.elements.query;

  // 検索URLのキーとバリューのオブジェクトを記述
  const config = {
    params: {
      q: searchTermInput.value
    }
  }

  // APIを取得
  // 第二引数にconfigのオブジェクトを記入
  const res = await axios.get('https://api.tvmaze.com/search/shows', config);

  makeImages(res.data);
  searchTermInput.value = '';
});

const makeImages = (results) => {
  for (let result of results) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}
