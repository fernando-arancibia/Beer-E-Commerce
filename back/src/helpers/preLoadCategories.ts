import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
    name: string;
}

const categoriesToPreLoad: ICategory[] = [
    { name: 'Smartphones' },
    { name: 'Laptops' },
    { name: 'Tablets' },
    { name: 'Headphones' },
    { name: 'Cameras' },
    { name: 'Printers' },
    { name: 'Monitors' },
    { name: 'Storage' },
    { name: 'Accessories' }
];

export const preLoadCategories = async () => {
    try {
        const categories = await CategoryRepository.find();
        if (!categories.length) {
            await AppDataSource.createQueryBuilder()
                .insert()
                .into(Category)
                .values(categoriesToPreLoad)
                .orIgnore() // Ignora si ya existen
                .execute();
            console.log('Categories preloaded successfully');
        } else {
            console.log('Categories already exist, skipping preload');
        }
    } catch (error) {
        console.error('Error preloading categories:', error);
        // No lanzamos error para que no bloquee la app
    }
}