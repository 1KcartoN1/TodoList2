btn = document.querySelector(`#btn`)
list = document.querySelector(`#list`)
input = document.querySelector(`#input`)
input2 = document.querySelector(`#input2`)
btn.addEventListener(`click`, task)
let sum__all = document.querySelector(`.Sum-All`)

sel__list = document.querySelector(`#select__list`)
let totalSum = 0




function task() {

    totalSum = totalSum + +input2.value
    total = totalSum
    let sel__item = sel__list.value;
    if (input != ``) {
        // console.log(totalSum);

        const modal = document.querySelector(`#modal`)
        const NewItem = document.createElement(`li`)
        const cancel = document.querySelector(`#cancel`)
        const delBtn2 = document.querySelector(`#del`)
        NewItem.classList.add(`item`)


        // NewItem.innerHTML = `<span>${input.value}  -  ${input2.value}$</span>`
        NewItem.innerHTML = `<h2 class = "GlInput">${input.value}</h2>
        <p class = "Summa" 
style =" color: aliceblue;"   
>${input2.value}</p><div class = "Currency"> ${sel__item}</div>`
        let delBtn = document.createElement(`button`)
        delBtn.classList.add(`btn`)
        sum__all.textContent = `Общие траты:${total} ${sel__item} `

        delBtn.textContent = `Удалить`

        list.appendChild(NewItem)


        NewItem.appendChild(delBtn)


        delBtn.addEventListener(`click`, (event) => {

            // console.log(`${input2.value}`);
            total = +total - +NewItem.querySelector(`.Summa`).textContent
            console.log(total);

            sum__all.textContent = `Общие траты:${total} ${sel__item}`


            modal.style.display = `block`;

            function RemoveTask() {
                list.removeChild(NewItem);
                modal.style.display = `none`;

            }


            delBtn2.addEventListener(`click`, RemoveTask)

            cancel.addEventListener(`click`, (event) => {
                modal.style.display = `none`
                delBtn2.removeEventListener(`click`, RemoveTask)
            })






        })

        input.value = ``;

        input2.value = ``;


    } else {
        alert(`Заполните поле!`)
    }


}

