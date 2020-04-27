import React from "react"

const imagesArray = [
    {id: 0, src: require("../assets/image/im_champ1.jpg"), alt: ""},
    {id: 1, src: require("../assets/image/im_champ2.jpg"), alt: ""},
    {id: 2, src: require("../assets/image/im_champ3.jpg"), alt: ""},
    {id: 3, src: require("../assets/image/iv_music1.jpg"), alt: ""},
    {id: 4, src: require("../assets/image/iv_music2.jpg"), alt: ""},
    {id: 5, src: require("../assets/image/mom.jpg"), alt: ""},
    {id: 6, src: require("../assets/image/polaroid.jpg"), alt: ""},
    {id: 7, src: require("../assets/image/ray_linkedin.jpg"), alt: ""},
    {id: 8, src: require("../assets/image/seattle1.jpg"), alt: ""},
    {id: 9, src: require("../assets/image/seattle2.jpg"), alt: ""},
    {id: 10, src: require("../assets/image/seattle3.jpg"), alt: ""},
    {id: 11, src: require("../assets/image/soccer.jpg"), alt: ""},
    {id: 12, src: require("../assets/image/tshirt_black.png"), alt: ""},
    {id: 13, src: require("../assets/image/tshirt_white.png"), alt: ""},
    {id: 14, src: require("../assets/image/tshirt_yellow.png"), alt: ""},
]

const images = imagesArray.map(({id, src, alt}) => <img key={id} src={src} alt={alt} className="img" />)

export default images;