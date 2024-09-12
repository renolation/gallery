import type { Image as dbImage } from "@prisma/client";
import Image from "next/image";
import classes from './image-list.module.css';


export default function ImageList({images}: {images: dbImage[]}) {
    return (
        <div>
            <h1>Image List</h1>
            <ul>
                {images.map(image => (
                    <li key={image.id}>
                        <div className={classes.imageContainer}>
                            <Image src={image.imageUrl} alt={image.status} width={90} height={160}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}