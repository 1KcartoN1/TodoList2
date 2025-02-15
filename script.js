btn = document.querySelector(`#btn`)
list = document.querySelector(`#list`)
input = document.querySelector(`#input`)

btn.addEventListener(`click`, task)


function task() {
    if (input != ``) {

        const modal = document.querySelector(`#modal`)
        const NewItem = document.createElement(`li`)
        const cancel = document.querySelector(`#cancel`)
        const delBtn2 = document.querySelector(`#del`)
        NewItem.classList.add(`item`)

        NewItem.innerHTML = `<span>${input.value}</span>`

        let delBtn = document.createElement(`button`)
        delBtn.classList.add(`btn`)

        delBtn.textContent = `Удалить`

        list.appendChild(NewItem)


        NewItem.appendChild(delBtn)


        delBtn.addEventListener(`click`, (event) => {


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



    } else {
        alert(`Заполните поле!`)
    }


}

