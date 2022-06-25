let dataItem = [];
let filterArr = [];
const container = document.querySelector('.container');
const filterList = document.querySelector('.filter-list');
filterList.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if (item) {
        filter(item);
    }
});

container.addEventListener('click', (event) => {
    const block = event.target.closest('.product-block');

    if (block) {
        let modal = block.querySelector('.modal');
        modal.classList.toggle('active');
        let attribute = block.getAttribute('id');

        fetchFunc(attribute, modal);
    }

})

function fetchFunc(id, modal) {
    // let modalArray = [];
    let check = false;
    fetch(`https://dummyjson.com/products/${id}`).then(response => {
        return response.json();
    }).then(data => {
        // modalArray = data.products;

        if (!check) {
            modal.innerHTML = '';
        }

        // data.products.forEach(item => {

        const structure = `
                             <div class="product-block">
                                 <div class="info">
                                     <span class = "category">Description:</span><span class="description">${data.description}</span> 
                                     <h3>Rating:</h3><span class = "rating">${data.rating}</span>
                                 </div>
                             </div>
                         `;

        modal.insertAdjacentHTML('beforeend', structure);
        // check = true;



        // });
    })

}

load();

function load() {
    fetch(`https://dummyjson.com/products`).then(response => {
        return response.json();
    }).then(data => {
        dataItem = data.products;

        dataItem.map((item) => {
            filterArr.push(item.category);

            mapInner(item);
        });
        let list = [];

        const tempArray = filterArr.sort();

        for (let i = 0; i < tempArray.length; i++) {
            if (tempArray[i + 1] !== tempArray[i]) {
                list.push(tempArray[i]);
            }
        }

        list.map((list) => {
            const listItem = `<li>${list}</li>`;
            filterList.insertAdjacentHTML('beforeend', listItem);
        });
    }).catch((error) => console.log(error));
}

function filter(item) {
    const cat = item.textContent;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    if (cat != 'all') {
        dataItem.map((item) => {
            console.log(item);
            if (item.category == cat) {
                mapInner(item);
            }
        });
    } else {
        dataItem.map((item) => {
            filterArr.push(item.category);

            mapInner(item);
        });
    }
}

function mapInner(item) {
    const product = `
    <div class="product-block" id="${item.id}">
    <div class="child">
    
     <div class="img-holder">
            <img src="${item.images[0]}" alt="">
        </div>
        <div class="info">
            <span class="category">${item.category}</span>
            <h3>${item.brand}</h3>
            <strong>${item.price}</strong>
        </div>
    </div>

       

        <div class = "modal active">  
        
        
        </div>
    </div>
`;


    // modal window classes and hmtl structure
    container.insertAdjacentHTML('beforeend', product);
}

