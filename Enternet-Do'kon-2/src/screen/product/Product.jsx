import React from 'react'
import { BodyOne, Title } from '../../components/common/CustomComponents'
import { ProductCard } from '../../router'
import { productlists } from '../../assets/data/data'

export const Product = () => {
    return (
        <>
            <section className="py-20 bg-white-100">
                <div className="container">
                    <Title level={4}>Most Poqular Products</Title>
                    <div className="flex items-center gap-3 uppercase">
                        <BodyOne className="text-sm">
                            All Products (39)
                        </BodyOne>
                        <BodyOne className="text-sm text-primary-green">
                            woden products (15)
                        </BodyOne>
                    </div>

                    <div className="content  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

                        {productlists.map((product) => (
                            <ProductCard
                                id={product.id}
                                key={product.key}
                                title={product.title}
                                description={product.description}
                                images={product.images}
                                price={product.price}
                                discount={product.discount}
                                rating={product.rating}
                                featured={product.featured}
                                category={product.category}
                                color={product.color}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
