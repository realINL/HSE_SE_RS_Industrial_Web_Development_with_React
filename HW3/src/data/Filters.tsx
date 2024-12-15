import Category from "./Category";

export type Filters = {
    searchQuery: string;
    selectedCategory: Category | null;
    onlyAvailable: boolean;
};
