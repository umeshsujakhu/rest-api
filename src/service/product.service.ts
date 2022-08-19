import {FilterQuery, QueryOptions, UpdateQuery} from "mongoose";
import ProductModel, {ProductDocument, ProductInput,} from "../model/product.model";

export async function createProduct(input: ProductInput) {
    try {
        return ProductModel.create(input);
    } catch (e) {
        throw e;
    }
}

export async function findProduct(
    query: FilterQuery<ProductDocument>,
    options: QueryOptions = {lean: true}
) {
    try {
        return await ProductModel.findOne(query, {}, options);
    } catch (e) {
        throw e;
    }
}

export async function findAndUpdateProduct(
    query: FilterQuery<ProductDocument>,
    update: UpdateQuery<ProductDocument>,
    options: QueryOptions
) {
    return ProductModel.findOneAndUpdate(query, update, options);
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
    return ProductModel.deleteOne(query);
}
