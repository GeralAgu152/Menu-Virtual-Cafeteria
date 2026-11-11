// Selecciona los elementos de la navegación para el menú móvil
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Selecciona el input del número de teléfono (asegúrate de que este ID exista en tu HTML si lo usas)
const phoneInput = document.getElementById("phone-number");


// EVENTO PARA ABRIR/CERRAR MENÚ MÓVIL
menuOpenButton.addEventListener ("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// CIERRA EL MENÚ CUANDO SE HACE CLIC EN EL BOTÓN DE CERRAR
menuCloseButton.addEventListener ("click", () => menuOpenButton.click());

// CIERRA EL MENÚ CUANDO SE HACE CLIC EN UN ENLACE DE NAVEGACIÓN
navLinks.forEach(link => {
    link.addEventListener("click" , () => menuOpenButton.click() );
});


// VALIDACIÓN DEL INPUT DE NÚMERO DE TELÉFONO (Si existe)
if (phoneInput) { // Verifica si el elemento existe antes de añadir el listener
    phoneInput.addEventListener("input", function () {
        const value = phoneInput.value;
        const onlyNumbers = /^[0-9]*$/;

        if (!onlyNumbers.test(value)) {
            phoneInput.setCustomValidity("Por favor, ingresa solo números.");
            phoneInput.reportValidity();
        } else {
            phoneInput.setCustomValidity("");
        }
    });
}


// --- LÓGICA PARA EL BOTÓN "VOLVER A INICIO" ---

// Asigna la función scrollFunction para que se ejecute cada vez que se haga scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Obtiene el botón "Volver a Inicio"
    var backToTopBtn = document.getElementById("backToTopBtn");

    // Asegúrate de que el botón existe antes de intentar manipularlo
    if (backToTopBtn) {
        // Si el usuario ha bajado más de 300px, muestra el botón; de lo contrario, ocúltalo
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block"; // Muestra el botón
        } else {
            backToTopBtn.style.display = "none"; // Oculta el botón
        }
    }
}

// Para el scroll suave cuando se hace clic en el botón
// Envuelve el código dentro de DOMContentLoaded para asegurar que el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    // Asegúrate de que el botón existe antes de añadir el event listener
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function(e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace (salto instantáneo)
            var targetId = this.getAttribute('href'); // Obtiene el ID del destino (ej. "#menu")
            var targetElement = document.querySelector(targetId);

            if (targetElement) { // Si el elemento de destino existe
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Hace que el scroll sea suave
                });
            }
        });
    }
});



/*
// Permite expandir/cerrar el panel de edición al hacer clic en el ícono
const editToggles = document.querySelectorAll('.edit-toggle');
editToggles.forEach(icon => {
    icon.addEventListener('click', function() {
        const editSection = this.closest('.table-row').nextElementSibling;
        if (editSection && editSection.classList.contains('edit-section')) {
        editSection.style.display = editSection.style.display === 'block' ? 'none' : 'block';
        }
    });
});


/*
// Mostrar u ocultar la sección de edición al hacer clic en el ícono
document.querySelectorAll('.edit-toggle').forEach((icon) => {
    icon.addEventListener('click', () => {
        const editSection = icon.closest('.table-row').nextElementSibling;
        if (editSection && editSection.classList.contains('edit-section')) {
            editSection.classList.toggle('hidden');
        }
    });
});

// Ocultar la sección de edición al hacer clic en Guardar o Cancelar
document.querySelectorAll(".save-btn, .cancel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const section = btn.closest(".edit-section");
        section.classList.add("hidden");
    });
});

    document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".order-control").forEach(control => {
        const addBtn = control.querySelector(".button-add-order");
        const qtySelector = control.querySelector(".quantity-selector");
        const qtyValue = control.querySelector(".qty-value");
        const plusBtn = control.querySelector(".plus");
        const minusBtn = control.querySelector(".minus");

        // Mostrar el selector al hacer clic en 'Añadir'
        addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addBtn.classList.add("hidden");
        qtySelector.classList.remove("hidden");
        });

        // Botón +
        plusBtn.addEventListener("click", () => {
        let current = parseInt(qtyValue.textContent);
        qtyValue.textContent = current + 1;
        });

        // Botón -
        minusBtn.addEventListener("click", () => {
        let current = parseInt(qtyValue.textContent);
        if (current > 1) qtyValue.textContent = current - 1;
        else {
            // Si baja a 0, volver a mostrar el botón original
            qtySelector.classList.add("hidden");
            addBtn.classList.remove("hidden");
            qtyValue.textContent = 1;
        }
        });
    });
    });




document.querySelectorAll(".cancel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const section = btn.closest(".edit-section");

        // Solo ocultar la sección
        section.classList.add("hidden");

        // Restaurar estilos (pero NO borrar los campos)
        section.querySelectorAll("input").forEach((input) => {
            input.style.borderColor = "#ccc";
        });
    });
});
*/


// Mostrar/Ocultar al hacer clic en ✏️
document.querySelectorAll('.edit-toggle').forEach((icon) => {
    icon.addEventListener('click', () => {
        const row = icon.closest('.table-row');
        const editSection = row.nextElementSibling;

        // Solo mostrar si está oculta
        if (editSection.classList.contains('hidden')) {
            editSection.classList.remove('hidden');
        } else {
            // Si ya está visible, no hacemos nada o podrías ocultarla si quieres toggle
        }
    });
});

// GUARDAR con validación
document.querySelectorAll(".save-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const section = btn.closest(".edit-section");
        const inputs = section.querySelectorAll("input");
        let valid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                input.style.borderColor = "red";
                valid = false;
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (valid) {
            section.classList.add("hidden");
        } else {
            alert("Por favor, completa ambos campos antes de guardar.");
        }
    });
});

// CANCELAR: oculta, pero no borra, y permite reingresar
document.querySelectorAll(".cancel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const section = btn.closest(".edit-section");
        section.classList.add("hidden");

        // Restablece los bordes a color normal
        section.querySelectorAll("input").forEach(input => {
            input.style.borderColor = "#ccc";
        });
    });
});



/*
    document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".order-control").forEach(control => {
        const addBtn = control.querySelector(".button-add-order");
        const qtySelector = control.querySelector(".quantity-selector");
        const qtyValue = control.querySelector(".qty-value");
        const plusBtn = control.querySelector(".plus");
        const minusBtn = control.querySelector(".minus");

        // Al hacer clic en "Añadir a la orden"
        addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addBtn.classList.add("hidden");
        qtySelector.classList.remove("hidden");
        });

        // Botón +
        plusBtn.addEventListener("click", () => {
        let current = parseInt(qtyValue.textContent);
        qtyValue.textContent = current + 1;
        });

        // Botón -
        minusBtn.addEventListener("click", () => {
        let current = parseInt(qtyValue.textContent);
        if (current > 1) {
            qtyValue.textContent = current - 1;
        } else {
            qtySelector.classList.add("hidden");
            addBtn.classList.remove("hidden");
            qtyValue.textContent = 1;
        }
        });
    });
    });
*/

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".order-control").forEach(control => {
        const addBtn = control.querySelector(".button-add-order");
        const qtySelector = control.querySelector(".quantity-selector");
        const qtyValue = control.querySelector(".qty-value");
        const plusBtn = control.querySelector(".plus");
        const minusBtn = control.querySelector(".minus");

        // Obtener información del producto
        const menuItem = control.closest(".menu-item");
        const name = menuItem.querySelector(".name").textContent.trim();
        const priceText = menuItem.querySelector(".price")?.textContent?.trim() || "0";
        const price = parseFloat(priceText.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

        // Mostrar el selector al hacer clic en 'Añadir'
        addBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addBtn.classList.add("hidden");
            qtySelector.classList.remove("hidden");
            
            
            addToOrder({ name, price, quantity: 1 });

        });

        // Botón +
        plusBtn.addEventListener("click", () => {
            let current = parseInt(qtyValue.textContent);
            qtyValue.textContent = current + 1;
        });

        // Botón -
        minusBtn.addEventListener("click", () => {
            let current = parseInt(qtyValue.textContent);
            if (current > 1) {
                qtyValue.textContent = current - 1;
            } else {
                qtySelector.classList.add("hidden");
                addBtn.classList.remove("hidden");
                qtyValue.textContent = 1;
            }
        });

        // Guardar producto al hacer clic en cantidad o añadir
        qtySelector.querySelectorAll(".plus, .minus").forEach(btn => {
            btn.addEventListener("click", () => {
                const quantity = parseInt(qtyValue.textContent);
                addToOrder({ name, price, quantity });
            });
        });
    });
});

function addToOrder(product) {
    let order = JSON.parse(localStorage.getItem("order")) || [];

    // Verificar si ya existe el producto
    const existing = order.find(item => item.name === product.name);
    if (existing) {
        existing.quantity = product.quantity;
    } else {
        order.push(product);
    }

    localStorage.setItem("order", JSON.stringify(order));

    // Actualizar contador visual
    updateOrderCount(order);
}

function updateOrderCount(order) {
    const totalItems = order.reduce((sum, item) => sum + item.quantity, 0);
    const countSpan = document.getElementById("order-count");
    if (countSpan) countSpan.textContent = totalItems;
}










function formatearPrecio(valor) {
    return valor
        .toFixed(2)
        .replace('.', ',')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

document.addEventListener("DOMContentLoaded", () => {
    const order = JSON.parse(localStorage.getItem("order")) || [];
    const table = document.querySelector(".table-container");

    const header = table.querySelector(".table-header");
    const editSection = document.querySelector(".edit-section");

    let subtotal = 0;

    order.forEach((item, index) => {
        const quantity = item.quantity || 0;
        const price = item.price || 0;
        const total = price * quantity;
        subtotal += total;

        // Fila principal del producto
        const row = document.createElement("div");
        row.classList.add("table-row");
        row.innerHTML = `
            <span>${index + 1}</span>
            <span>${item.name} <i class="fas fa-edit edit-toggle" title="Editar"></i></span>
            <span>${formatearPrecio(price)}</span>
            <span>${quantity}</span>
            <span>${formatearPrecio(total)}</span>
                    `;

        // Sección de edición
        const edit = document.createElement("div");
        edit.classList.add("edit-section", "hidden");
        edit.innerHTML = `
            <label>Agregar:<input type="text" placeholder="Ej: cebolla"></label>
            <label>No agregar:<input type="text" placeholder="Ej: queso"></label>
            <div class="edit-buttons">
                <button class="save-btn">Guardar</button>
                <button class="cancel-btn">Cancelar</button>
            </div>
        `;

        // Insertar en la tabla
        const container = document.getElementById("product-rows");
        container.appendChild(row);
        container.appendChild(edit);


        // Activar toggle para mostrar sección editable
        row.querySelector(".edit-toggle").addEventListener("click", () => {
            edit.classList.toggle("hidden");
        });

        // Botones Guardar / Cancelar
        edit.querySelector(".save-btn").addEventListener("click", () => {
            const inputs = edit.querySelectorAll("input");
            let valid = true;
            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = "red";
                    valid = false;
                } else {
                    input.style.borderColor = "#ccc";
                }
            });
            if (valid) {
                edit.classList.add("hidden");
            } else {
                alert("Por favor, completa ambos campos.");
            }
        });

        edit.querySelector(".cancel-btn").addEventListener("click", () => {
            edit.classList.add("hidden");
            edit.querySelectorAll("input").forEach(input => input.style.borderColor = "#ccc");
        });
    });

    // Totales
    const tax = subtotal * 0.1;
    const totalFinal = subtotal + tax;

        document.querySelector(".summary").innerHTML = `
        <p><strong>SUB TOTAL:</strong> ${formatearPrecio(subtotal)}</p>
        <p><strong>TAX:</strong> ${formatearPrecio(tax)}</p>
        <p class="total"><strong>TOTAL:</strong> ${formatearPrecio(totalFinal)}</p>
    `;

});