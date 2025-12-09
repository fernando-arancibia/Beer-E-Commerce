import ProductCard from '@/components/ProductCard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            next: { revalidate: 0 }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export default async function Products() {
    const products = await fetchProducts();

    if (!products || products.length === 0) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <p>No products available.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Our Products</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}               
            </section>
        </div>
    );
}