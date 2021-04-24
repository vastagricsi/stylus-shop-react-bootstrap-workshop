import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import axios from "axios";
import '../../styles/Slider.scss';

function Slider(props) {

    const [image_list, set_image_list] = useState([]);

    const fetch = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}/slider`
        })
            .then(response => set_image_list(response.data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <Carousel>
            {
                image_list.map((item) => {
                    return <Carousel.Item>
                        <div className="text-center">
                            <img
                                className="h-50"
                                src={item.image}
                            />
                        </div>
                    </Carousel.Item>
                })
            }
        </Carousel>
    );
}

export default Slider;
