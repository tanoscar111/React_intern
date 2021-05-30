import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { ImQuotesRight } from "react-icons/im"
import { FaFacebookSquare } from "react-icons/fa"

const Slider = ({ slides }) => {
    const SliderData = [
        {
            image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            nameText: "Thanh Tân",
            class: "FE11",
            content: "Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ trợ rất nhiệt tình. Sau khóa học riêng mình cảm thấy học hỏi được rất nhiều."
        },
        {
            image:
                'https://images.unsplash.com/photo-1617094876531-3ad72ca3306d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
            nameText: "Quang Thi",
            class: "FE1",
            content: "Các mentor dạy có tâm, nhiệt tình. Mình là người chưa biết html và css, sau khóa học thì mình có thể tự tin code được giao diện theo thiết kế và cả việc xử lí các sự kiện bằng javascript và jquery."
        },
        {
            image:
                'https://images.unsplash.com/photo-1616621288142-15340a92ef37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            nameText: "Minh Thắng",
            class: "FE11",

            content: "Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ trợ rất nhiệt tình. Sau khóa học riêng mình cảm thấy học hỏi được rất nhiều."
        },
        {
            image:
                'https://images.unsplash.com/photo-1617821518931-cce20e65cc93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
            nameText: "Thiện Quân",
            class: "FE11",
            content: "Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. Sau khoá học thì được các mentor chia sẻ kinh nghiệm.",
        },
        {
            image:
                'https://images.unsplash.com/photo-1608710316761-8e816d904b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
            nameText: "Duy Tây",
            class: "FE11",
            content: "Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale, chưa biết gì về HTML, CSS, JS, mà giờ code được 1 web hoàn chỉnh. Mentor thì hỗ trợ nhiệt tình, lên lớp học lý thuyết xong là thực chiến luôn, về nhà thì livestream sửa bài, có khi tới 1-2h sáng luôn. Sau khoá học thì được các mentor chia sẻ kinh nghiệm.",
        }
    ];
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">

            <BsArrowLeft className='left-arrow' onClick={prevSlide} />
            <BsArrowRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (

                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (

                            <div className="list">
                                <div className="infor">
                                    <div className="infor__text">
                                        <div className="infor__text--name">
                                            <h4>{slide.nameText}</h4>
                                            <p>{slide.class}</p>
                                        </div>
                                        <div className="quocte">
                                            <ImQuotesRight className="quocteIcon" />
                                        </div>
                                    </div>
                                    <div className="content">

                                        {slide.content}
                                    </div>
                                    <div className="bottom">
                                        <FaFacebookSquare />
                                        <div className="datime">8/5/2021</div>
                                    </div>
                                </div>
                                <img src={slide.image} alt="img" className="images" />
                            </div>
                        )}
                    </div>


                );
            })}
        </div>
    );
};

export default Slider;