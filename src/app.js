document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {id: 1, name: 'Teddy Bear Pudding', img: 'teddybear-pudding.png', price: 165000},
            {id: 2, name: 'Marie Regal Pudding', img: 'regal-pudding.png', price: 155000},
            {id: 3, name: 'Caramel Chocolate Pudding', img: 'caramelchocolate-pudding.png', price: 145000},
            {id: 4, name: 'Mango Sagoo', img: 'mango-sagoo.png', price: 25000}
           
        ]
        
    }));

    Alpine.store('cart', {
        items:[],
        total:0,
        quantity:0,

        add(newItem){
            // Cek apakah ada barang yang sama dalam cart

            const cartItem = this.items.find((item) => item.id === newItem.id);

            //Jika belum ada atau cart kosong
            if(!cartItem){
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total+= newItem.price;
            }else{
                // Jika barang sudah ada, cek apakah barang sama atau tidak dengan yang ada di cart
                this.items = this.items.map((item) =>{
                    // Jika barang berbeda 
                    if(item.id !== newItem.id){
                        return item;
                    }else{
                        //Jika barang sudah ada, tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });
            }
        },
        remove(id){
            //ambil item yang mau diremove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);
            
            //Jika item lebih dari 1
            if(cartItem.quantity > 1){
                //Telusuri satu-satu
                this.items = this.items.map((item) =>{
                    //Jika bukan barang yang di klik

                    if(item.id !== id){
                        return items;
                    }else{
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        item.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                })
            } else if(cartItem.quantity === 1){
                //Jika barang tersisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;

            }
        }
    });

});

// Konversi ke Rupiah

const Rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency:'IDR',
        minimumFractionDigits:0,
    }).format(number);
}