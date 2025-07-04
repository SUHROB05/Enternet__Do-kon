import React, { useState } from 'react'
import { FaFacebookF, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt, FaTwitch } from "react-icons/fa";
import { IoMdHeart } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { BodyOne, Title } from '../common/CustomComponents';
import { AiFillInstagram } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../redux/slice/cartSlice';


export const RenderRatingStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStars = rating % 1 !== 0;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= fullStars) {
            stars.push(<FaStar key={i} color="#ff8a00" />);
        } else if (hasHalfStars && i === fullStars + 1) {
            stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
        } else {
            stars.push(<FaRegStar key={i} color="#ff8a00" />);
        }
    }
    return stars;

};

export const ProductCard = ({
    id,
    key,
    title,
    description,
    images,
    price,
    discount,
    rating,
    featured,
    category,
    color,
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const openModel = () => (
        setIsModalOpen(true)
    );
    const closeModel = () => (
        setIsModalOpen(false)
    )

    const discountPrice = price[0].value - (price[0].value * discount) / 100;

    const addToCard = () => {
        dispatch(CartActions.addToCart({ id, title, price:discountPrice, images}))
    }


    return (
        <>
            <div className="product card">
                <div className="images h-96">
                    {images.map((cover, index) => (
                        <img
                            key={index}
                            src={cover?.image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    ))}
                    <div className="flex justify-between w-full p-5  absolute top-0 left-0">
                        {discount && <button className='discount-btn'>
                            {discount}%
                        </button>}
                        {featured && <button className='feature-btn'>
                            {featured === true && "Featured"}
                        </button>}
                    </div>
                    <div className=" overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 mt-5">
                        <button onClick={openModel} className="quick-view-btn product-btn primary-btn">
                            Quick View
                        </button>
                        <button onClick={addToCard} className="add-to-card-btn product-btn primary-btn">
                            <FaShoppingCart size={23} />
                        </button>
                        <button className="love-btn product-btn primary-btn">
                            <IoMdHeart size={23} />
                        </button>
                    </div>
                </div>
                <div className="deatils flex items-center flex-col bg-white pt-6">
                    <NavLink to={`/product-details/${id}`}>
                        <BodyOne> {title}</BodyOne>
                    </NavLink>
                    <div className="flex items-center gap-2 -mt-2 mb-2">
                        {RenderRatingStars(rating)}{rating}
                    </div>
                    <div className="flex items-center gap-3">
                        {price.slice(0, 1).map((priceItem, index) => (
                            <>
                                <BodyOne className="line-through" key={index}>
                                    ${priceItem.value}
                                </BodyOne>
                                <BodyOne className="text-primary-green" key={index}>
                                    ${(
                                        priceItem.value - (priceItem.value * discount) / 100).toFixed(2)
                                    }
                                </BodyOne>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <>
                    <div className="overlay-bg" onClick={closeModel}>
                        <div className="modal-overlay" onClick={closeModel}>
                            <div
                                className="modul-content flex justify-between"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="w-1/2 h-[500px] overflow-hidden">
                                    {images.slice(0, 1).map((cover, index) => (
                                        <img
                                            key={index}
                                            src={cover?.image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    ))}
                                </div>
                                <div className="modal-details w-1/2 h-[500px] overflow-y-scroll p-9">
                                    <button className="feature-btn bg-indigo-500">
                                        SALE {discount}% OFF
                                    </button>
                                    <Title level={2}>{title}</Title>
                                    <div className="flex items-center gap-1 -mt-2">
                                        {RenderRatingStars(rating)}
                                    </div>
                                    {price.slice(0, 1).map((priceItem, index) => (
                                        <div className="flex items-center gap-3" key={index}>
                                            <BodyOne className="line-through mt-4">
                                                ${priceItem.value}
                                            </BodyOne>
                                            <Title level={3} className="text-primary-green" key={index}>
                                                ${(
                                                    priceItem.value - (priceItem.value * discount) / 100).toFixed(2)
                                                }
                                            </Title>
                                        </div>
                                    ))}
                                    <BodyOne className="text-sm leading-6">{description}</BodyOne>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="text"
                                            value="1"
                                            className="w-12 h-12 text-primary object-none border-2 border-primary px-4"
                                        />
                                        <button className='primary-btn'> ADD TO CART</button>
                                    </div>
                                    <hr className="my-5" />
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <Title level={5} className="text-lg ">
                                                Category :
                                                <span className='font-normal'>Wooden Product</span>
                                            </Title>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Title level={5} className="text-lg ">
                                                Tag : <span className='font-normal'>Wooden</span>
                                            </Title>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Title level={5} className="text-lg ">
                                                Share :
                                            </Title>
                                            <div className="flex items-center -mt-1 gap-3">
                                                <FaFacebookF />
                                                <AiFillInstagram />
                                                <FaTwitch />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="close-btn absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white"
                                        onClick={closeModel}>
                                        <IoClose size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
