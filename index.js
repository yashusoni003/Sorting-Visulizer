const swap = (el1,el2) =>
  {
      let temp = el1.style.height
      el1.style.height = el2.style.height
      el2.style.height = temp
  }

  let delayTime = 0;

const getDelay = document.querySelector('#sort_speed')

getDelay.addEventListener('input',function()
{
  delayTime = parseInt(getDelay.value)
})

  //time used in below fun is independent of setTimeout speed bcs reolve will be done in default time that is 0. 400 would be very slow
  function waitfor(time)
  {
      return new Promise(resolve => {
        setTimeout(()=>{resolve('')},time)  //or resolve(''),0}) is also same
      })
  }



  const getArray = (count) =>
  {
    let bars =  [];

    for(let i = 1;i<=count;i++)
    {
      let randNum = Math.floor(Math.random()*100)+1
      bars.push(randNum)
    }
    return bars
  }

  const getNewArray = (count = 50) =>
  {
    let arr = getArray(count)
    let bars = document.getElementById('bars')
    bars.innerHTML = ""
    for(let i = 0;i<=arr.length-1;i++)
    {
    let element = document.createElement('div');
    element.id = `bar`
    element.style.height = `${arr[i]*5}px`
    element.classList = "barstyle"
    bars.appendChild(element)
    }

  }

let arr_size = document.getElementById('arr_size');

arr_size.addEventListener('input', function()
{
  getNewArray(parseInt(arr_size.value));
})

  const disableBtn = () =>
  {
      document.querySelector("#Bubble").disabled = true;
      document.querySelector("#Insertion").disabled = true;
      document.querySelector("#Merge").disabled = true;
      document.querySelector("#Quick").disabled = true;
      document.querySelector("#Selection").disabled = true;
  }

  const enableBtn = () =>
  {
      document.querySelector("#Bubble").disabled = false;
      document.querySelector("#Insertion").disabled = false;
      document.querySelector("#Merge").disabled = false;
      document.querySelector("#Quick").disabled = false;
      document.querySelector("#Selection").disabled = false;
  }

  const disableNewArrayBtn = () =>
  {
        document.querySelector("#newArray").disabled = true;
  }

  const enableNewArrayBtn = () =>
  {
        document.querySelector("#newArray").disabled = false;
  }

  const disablesizeSlider = () =>
  {
    document.querySelector('#arr_size').disabled = true;
  }
  const enablesizeSlider = () =>
  {
    document.querySelector('#arr_size').disabled = false;
  }
