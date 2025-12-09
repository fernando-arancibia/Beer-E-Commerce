import CardProduct from './components/CardProduct';

export const fetchProducts = async () => {
    const response = await fetch();
    const products = await response.json();
    return products;
}

export default async function Products () {
    const fetchData = await fetchProducts();

    return (<div>
                <section>
                {fetchData.map(({id, title, price, image}) => (
                    <CardProduct
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    image={image} />
                ))}               
                </section>
            </div>
    )
}