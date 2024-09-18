// Selecciona todos los botones de ingredientes y el cuadro deslizante
const ingredientButtons = document.querySelectorAll('.ingredient-btn');
const ingredientSlide = document.getElementById('ingredient-slide');
let currentIngredientButton = null;

// Función para mostrar el cuadro deslizante con la información correspondiente
function showSlide(imageSrc, description) {
    const ingredientImg = document.getElementById('ingredient-img');
    const ingredientDesc = document.getElementById('ingredient-desc');
    
    // Actualiza el contenido del cuadro deslizante
    ingredientImg.src = imageSrc;
    ingredientDesc.textContent = description;
    
    // Muestra el cuadro deslizante deslizándose hacia arriba
    ingredientSlide.style.bottom = '20px';
}

// Función para ocultar el cuadro deslizante
function hideSlide() {
    ingredientSlide.style.bottom = '-300px'; // Oculta el cuadro deslizante
    currentIngredientButton = null; // Restablece el botón activo
}

// Agrega un evento click a cada botón de ingrediente
ingredientButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el click se propague al documento
        currentIngredientButton = button; // Registra el botón activo

        // Muestra el contenido específico para cada botón
        switch (index) {
            case 0:
                showSlide('imagenes/torta choco.png', 'Este producto no contiene lactosa.');
                break;
            case 1:
                showSlide('imagenes/torta de frutas.png', 'Este producto es libre de azúcar.');
                break;
            case 2:
                showSlide('imagenes/torta rosada.png', 'Este producto no contiene gluten.');
                break;
        }
    });
});

// Oculta el cuadro deslizante al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', (event) => {
    if (currentIngredientButton && !ingredientSlide.contains(event.target) && !currentIngredientButton.contains(event.target)) {
        hideSlide();
    }
});



// Selecciona todos los botones de opciones adicionales y el cuadro deslizante
const extraOptionButtons = document.querySelectorAll('.extra-option-btn');
const extraSlide = document.getElementById('extra-slide');
let currentExtraButton = null;

// Función para mostrar el cuadro deslizante con la información correspondiente
function showExtraSlide(imageSrc, description) {
    const extraImg = document.getElementById('extra-img');
    const extraDesc = document.getElementById('extra-desc');
    
    // Actualiza el contenido del cuadro deslizante
    extraImg.src = imageSrc;
    extraDesc.textContent = description;
    
    // Muestra el cuadro deslizante deslizándose hacia arriba
    extraSlide.style.bottom = '20px';
}

// Función para ocultar el cuadro deslizante
function hideExtraSlide() {
    extraSlide.style.bottom = '-300px'; // Oculta el cuadro deslizante
    currentExtraButton = null; // Restablece el botón activo
}

// Agrega un evento click a cada botón de opción adicional
extraOptionButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el click se propague al documento
        currentExtraButton = button; // Registra el botón activo

        // Muestra el contenido específico para cada botón
        switch (index) {
            case 0:
                showExtraSlide('imagenes/tamaño 25cm.png' , 'Torta de 20 porciones.   150bs');
                break;
            case 1:
                showExtraSlide('imagenes/tamaño 12cm.png', 'Torta de 30 porciones .   180bs');
                break;
        }
    });
});

// Oculta el cuadro deslizante al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', (event) => {
    if (currentExtraButton && !extraSlide.contains(event.target) && !currentExtraButton.contains(event.target)) {
        hideExtraSlide();
    }
});

