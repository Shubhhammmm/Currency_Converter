var data = {}
  let left = document.getElementById('currency-type-left')
  let right = document.getElementById('currency-type-right')
  async function fetchCurruncy() {
    let result = await fetch('https://v6.exchangerate-api.com/v6/4c4f9db95904b968ebfc3dd8/latest/USD').then(res => res.json()).then(data => data)
    data = { ...result.conversion_rates }
    console.log(data);
    fun()
  }
  fetchCurruncy()

  function fun() {
    for (const [key, value] of Object.entries(data)) {
      let option = document.createElement('option')
      let option1 = document.createElement('option')
      option.value = key;
      option1.value = key;
      option.innerText = key;
      option1.innerText = key;
      right.add(option)
      left.add(option1)
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let value = document.getElementById('ct-value-left').value
    let usd = Number(value) / data[left.value]
    console.log(Number(value));
    console.log(usd * data[right.value]);
    document.getElementById('ct-value-right').value = usd * data[right.value]
  }

  document.getElementById('cc-form').addEventListener('submit', handleSubmit)