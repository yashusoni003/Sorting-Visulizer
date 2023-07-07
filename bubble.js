


getNewArray()

const bubbleSort = async () =>
{
  getNewArray(arr_size.value)

  let ele = document.querySelectorAll('#bar')

  for(let i = 0;i<ele.length-1;i++)
  {
    for(let j = 0;j<ele.length-i-1;j++)
    {
        ele[j].style.background = "red";
        ele[j+1].style.background = "red";

        if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height))
        {
           await waitfor(delayTime)
           swap(ele[j],ele[j+1])
        }

        ele[j].style.background = "linear-gradient(to bottom, #00ffff 0%, #ff66ff 103%)"
        ele[j+1].style.background = "linear-gradient(to bottom, #00ffff 0%, #ff66ff 103%)"

         }

        ele[ele.length-1-i].style.background = "#39ff14"
    }
  ele[0].style.background = "#39ff14"
}

const bubBtn = document.querySelector('#Bubble')

bubBtn.addEventListener('click',async () =>
{
   disableBtn()
   disableNewArrayBtn()
   disablesizeSlider()
   await bubbleSort()
   enableBtn()
   enableNewArrayBtn()
   enablesizeSlider()
})
