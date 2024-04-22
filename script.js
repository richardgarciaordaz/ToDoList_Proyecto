const fecha = document.querySelector('#fecha')
const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#boton-enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const LineThrough = 'line-through'
let id
let LIST



// Creacion de fecha
const FECHA = new Date()
fecha.innerHTML=FECHA.toLocaleDateString('es-MX',{weekday:'long',month:'short',day:'numeric'})


//funcion agregar tarea
function agregarTarea (tarea,id,realizado,eliminado) {

    if(eliminado) {return}

    const REALIZADO = realizado ?check :uncheck 
    const LINE = realizado ?LineThrough :''

    const elemento = `<li id="elemento">
    <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
    <p class="text ${LINE}">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id="0"></i>
                        </li>
                     `
    lista.insertAdjacentHTML("beforeend", elemento)
}

//funcion de tarea Realizada

function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(LineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

//funcion de tarea eliminada
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST(element.id).eliminado = true
    
}

function tareaEliminada(element) {
    // Mostrar el modal de confirmación
    const tarea = element.parentNode.querySelector('.text').textContent;
    document.getElementById('tarea-a-eliminar').textContent = tarea;
    const modal = document.getElementById('modal-confirmacion');
    modal.style.display = 'block';

    // Agregar eventos a los botones del modal
    const btnCancelar = document.getElementById('btn-cancelar');
    const btnEliminar = document.getElementById('btn-eliminar');

    btnCancelar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    btnEliminar.addEventListener('click', () => {
        // Eliminar la tarea de la lista y del localStorage
        const elemento = element.parentNode;
        lista.removeChild(elemento);
        LIST.find(item => item.id === parseInt(element.id)).eliminado = true;
        localStorage.setItem('TODO', JSON.stringify(LIST));
        modal.style.display = 'none';
    });
}

botonEnter.addEventListener('click', () => {
    const tarea = input.value
    if(tarea) {
        agregarTarea(tarea,id,false, false)
        LIST.push({
            nombre: tarea,
            id:id,
            realizado:false,
            eliminado:false
        })
    }

    localStorage.setItem('TODO', JSON.stringify(LIST))
    input.value=''
    id++
})

document.addEventListener('keyup', function(event) {
    if(event.key=='Enter') {
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea,id,false,false)
            LIST.push({
                nombre: tarea,
                id:id,
                realizado:false,
                eliminado:false
            })
        }

        localStorage.setItem('TODO', JSON.stringify(LIST))
        input.value=''
        id++
    }
})

lista.addEventListener('click', function(event){
    const element = event.target
    const elementData = element.attributes .data.value
  if(elementData==='realizado') {
    tareaRealizada(element) 
  }

  else if(elementData ==='eliminado') {
    tareaEliminada(element)
  }
  localStorage.setItem('TODO', JSON.stringify(LIST))
})


//local storage get item

let data = localStorage.getItem('TODO')
if(data) {
    LIST=JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
}else{
    LIST = []
    id=0
}

function cargarLista(DATA){
    DATA.forEach(function(i){
        agregarTarea(i.nombre,i.id,i.realizado,i.eliminado)
    })
}
