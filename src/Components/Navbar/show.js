export default function show()
{
    let a = document.getElementById('aa');
    let bc = document.getElementById('bcx');
    let o = document.getElementById('ov');

  document.addEventListener('click', (e) => {

    if(e.target === bc)
    {
        a.classList.toggle('open');
        o.classList.toggle('overlay');
    }

    else if(e.target !== a && a.classList.contains("open"))
    {
        a.classList.toggle('open');
        o.classList.toggle('overlay');
    }

 });

}