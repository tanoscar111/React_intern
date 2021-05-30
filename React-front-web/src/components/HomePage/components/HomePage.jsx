import React, { useEffect } from "react";
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../../../IMG/Video/Logo.png";
import FE from "../../../IMG/fe.jpg";
import avatar from "../../../IMG/avavar.png";
import Slider from "./Home/Slider";
import Acording from "./Home/Acording";
import Slidergallery from "./Home/Slidergallery";
import 'bootstrap/dist/css/bootstrap.min.css';
gsap.registerPlugin(ScrollTrigger);

function HomePage(props) {
  const DataCourse = [
    {
      titleCourse: "Front End",
      imgCourse: "https://ibb.co/sqVDrJx",
      status: "Đang Khai giảng",
      description:
        "Khóa học dành cho người mới gồm Photoshop,HTML, CSS, CSS3, Flexbox, Grid,Javascript Căn Bản, hoàn thành một dự án website tĩnh.",
      imgAvartar: "https://ibb.co/10XHz2j",
      nameTeacher: "Thanh Tân",
      dataTime: "21/3/2021",
    },
    {
      titleCourse: "Back End",
      imgCourse: "https://ibb.co/VVG6j7f",
      status: "Đang Khai giảng",
      description:
        "Khóa học dành cho người mới gồm Photoshop,HTML, CSS, CSS3, Flexbox, Grid,Javascript Căn Bản, hoàn thành một dự án website tĩnh.",
      imgAvartar: "https://ibb.co/10XHz2j",
      nameTeacher: "Thanh Tân",
      dataTime: "21/3/2021",
    },
    {
      titleCourse: "Front End",
      imgCourse: "https://ibb.co/sqVDrJx",
      status: "Đang Khai giảng",
      description:
        "Khóa học dành cho người mới gồm Photoshop,HTML, CSS, CSS3, Flexbox, Grid,Javascript Căn Bản, hoàn thành một dự án website tĩnh.",
      imgAvartar: "https://ibb.co/10XHz2j",
      nameTeacher: "Thanh Tân",
      dataTime: "21/3/2021",
    },
    {
      titleCourse: "Front End",
      imgCourse: "https://ibb.co/sqVDrJx",
      status: "Đang Khai giảng",
      description:
        "Khóa học dành cho người mới gồm Photoshop,HTML, CSS, CSS3, Flexbox, Grid,Javascript Căn Bản, hoàn thành một dự án website tĩnh.",
      imgAvartar: "https://ibb.co/10XHz2j",
      nameTeacher: "Thanh Tân",
      dataTime: "21/3/2021",
    },
  ];
  let laptop = window.matchMedia("(max-width: 1366px)");
  // let tablet = window.matchMedia("(max-width: 768px)").matches;
  // let Pixel = window.matchMedia("(max-width:  411px)").matches;
  // let iPhone = window.matchMedia("(max-width: 375px)").matches;
  // let Mobile = window.matchMedia("(max-width: 360px)").matches;

  useEffect(() => {
    TweenMax.to(".block-1", 4, {
      x: "-592",
      y: "-34",
      ease: "Expo.easeInOut",
    });

    TweenMax.to(".block-2", 4, {
      x: "-180",
      y: "200",
      scale: "1.2",
      ease: "Expo.easeInOut",
    });

    if (laptop.matches) {
      TweenMax.to(".block-3", 4, {
        x: "232%",
        y: "-140",
        scale: "1.6",
        ease: "Expo.easeInOut",
      });
      TweenMax.to(".block-4", 4, {
        x: "545%",
        y: "143%",
        scale: "0.8",
        ease: "Expo.easeInOut",
      });
    } else {
      TweenMax.to(".block-4", 4, {
        x: "629",
        y: "200",
        scale: "0.8",
        ease: "Expo.easeInOut",
      });
      TweenMax.to(".block-3", 4, {
        x: "233",
        y: "-140",
        scale: "1.6",
        ease: "Expo.easeInOut",
      });
    }

    TweenMax.to(".box", 2.4, {
      y: "-100%",
      ease: "Expo.easeInOut",
    });

    TweenMax.from(".circle-shape", 2.4, {
      scale: "0",
      ease: "Expo.easeInOut",
    });
    TweenMax.from(".circle-shape-2", 2.4, {
      scale: "0",
      ease: "Expo.easeInOut",
    });
    TweenMax.from(".circle-shape-3", 2.4, {
      scale: "0",
      ease: "Expo.easeInOut",
    });
    TweenMax.from(".showreel", 1.6, {
      opacity: 0,
      y: 40,
      ease: "Expo.easeInOut",
      delay: 0.6,
    });
    TweenMax.staggerFrom(
      ".site-menu > div",
      1,
      {
        opacity: 0,
        y: 60,
        ease: "Expo.easeInOut",
      },
      0.2
    );
  });

  const SliderData = [
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  const DataAcording = [
    {
      title: "LTE là gì?",
      content:
        "LTE được sáng lập bởi Thanh Tân cùng các thành viên có từ 2-3 năm kinh nghiệm trong lĩnh vực Web/App Dev và UX/UI Design hiện đang làm việc Freelacer  cung cấp các khóa học thực chiến lập trình website, UX/UI Design giúp học viên có đủ những kỹ năng thực tế cần thiết để đi làm sau khóa học. Ngoài các khóa học, LTE còn kết nối cộng đồng các thành viên để học hỏi, chia sẻ, giúp đỡ lẫn nhau trong suốt quá trình học và tương lai.Sứ mệnh của LTE là để tạo ra những sản phẩm chất lượng, tinh tế, sáng tạo và có giá trị.",
    },
    {
      title: "Học tại LTE xong có đi làm hay thực tập được không?",
      content:
        "Khóa học thực chiến tại LTE giúp học viên trải nghiệm dự án, quy trình làm việc và kỹ năng thực tế cần có để không chỉ xin thực tập và còn có thể ứng tuyển các vị trị chính thức cao hơn như Fresher, Junior ở các công ty.",
    },
    {
      title: "LTE có cam kết đầu ra và cấp chứng chỉ không? ",
      content:
        "Hiện tại, LTE không cam kết đầu ra và chứng chỉ, điều LTE làm là cố gắng hết sức để truyền đạt và giúp cho tất cả học viên có thể làm được việc và các kỹ năng thực tế cần có sau khóa học và ứng tuyển ít nhất là vị trí Fresher cho các công ty.Ngoài sự cố gắng của giảng viên, các thành viên cũng phải có sức chiến đấu cao, ý thức tự học và hoàn thành các yêu cầu đặt ra nhằm hoàn thành khóa học thật tốt.",
    },
    {
      title: "Học tại LTE sao cho hiệu quả nhất?",
      content:
        "Học viên cần chuẩn bị đủ thời gian để học Offline hoặc Online, cũng như thời gian để hoàn thành bài tập, tự học tại nhà.Tự tin vào bản thân, kiên trì, cố gắng và sức chiến đấu cao không lùi bước, chủ động hỏi những vấn đề chưa rõ để được giải đáp và hỗ trợ.Hạn chế tối đa việc nghỉ học, nếu có nghỉ thì phải xin và xem lại video được ghi lại trong lúc học để hoàn thành bài tập và kiến thức ngày hôm đó.",
    },
    {
      title: "Sau mỗi buổi học có quay video để xem lại không?",
      content:
        "LTE sẽ quay lại video buổi học để các bạn không tham gia được có thể xem lại bằng cách đăng nhập vào website LTE, chọn mục Khóa Học Của Tôi, chọn khóa đang học và xem lại video.Bản quyền video thuộc về LTE, nên nếu học viên tìm cách tải video về và chia sẻ thì sẽ bị khóa tài khoản vĩnh viễn.",
    },
  ];
  return (
    <>
      <div className="Home">
        <div className="wrapper-img">
          <div className="box"></div>
          <div>
            <img className="image" src={Logo} alt="imge" />
          </div>
        </div>
        <div className="circle-shape"></div>
        <div className="circle-shape-2"></div>
        <div className="circle-shape-3"></div>
        <div className="blocks">
          <div className="block-2 block">L</div>
          <div className="block-3 block">T</div>
          <div className="block-4 block">E</div>
        </div>
      </div>
      <section className="couse">
        <div className="container">
          <h2 className="main--tille">Chào mừng đến cới LTE</h2>
          <p className="main--des">
            Nơi có những khóa học thực chiến Front-End Dev và UX/UI Design, kết
            nối và chia sẻ kinh nghiệm giúp bạn có đầy đủ kỹ năng thực tế để tạo
            ra những sản phẩm sáng tạo, tinh tế và phù hợp.
          </p>
          <div className="textBox">
            <h2 className="main--tille">Khóa Học</h2>
          </div>
          <div className="listcorse container">
            {DataCourse.map((courseItem, courseIndex) => {
              return (
                <div className="cardcourse col-md-6" key={courseIndex}>
                  <div className="cardcourse__img">
                    <img src={FE} alt="card_item" />
                  </div>
                  <div className="cardcourse__content">
                    <p className="status ">{courseItem.status}</p>
                    <h3 className="cardcourse__content--title">
                      {courseItem.titleCourse}
                    </h3>
                    <p className="cardcourse__content--des">
                      {courseItem.description}
                    </p>
                    <div className="cardcourse__content--bottom">
                      <div className="author">
                        <div className="author__teacher">
                          <div className="author__teacher--avatar">
                            <img src={avatar} alt="avartar" />
                          </div>
                          <p className="teacher">{courseItem.nameTeacher}</p>
                        </div>

                        <div className="date">{courseItem.dataTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="feelContainer">
        <div className="container">
          <div className="textBox">
            <h2 className="textBox__title">Cảm nhận về LTE</h2>
          </div>
          <div className="sliders">
            <Slider slides={SliderData} />
          </div>
        </div>
      </section>
      <section className="acording">
        <div className="container">
          <h2 className="main-title">Câu Hỏi Thường Gặp</h2>
          <div className="row">
            <div className="col-lg-12">
              <h3 className="acording__title">Thông tin chung</h3>
              <Acording DataAcording={DataAcording} />
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <h2 className="main-title">Chúng Ta Là Một Team</h2>
        <div className="gallery__list">
          <Slidergallery />
        </div>
      </section>
      <section className="section-action">
        <div className="container">
            <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team LTE chưa?</h3>
            <p href=""><div className="btn main round bg-white" data-id="register">Đăng ký nhận tin</div></p>
        </div>
    </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <p className="des">
                Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên
                khác biệt.
              </p>
              <p className="address">H01/06 K130 Ông Ích Đường</p>
              <p className="phone">0766762958</p>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li>
                    <p target="_blank">Cộng đồng LTE</p>
                  </li>
                  <li>
                    <p target="_blank">Khóa học</p>
                  </li>
                  <li>
                    <p target="_blank">LTE Team</p>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <p  class="back-to-top">
            <div class="line"></div>
            CUỘN LÊN
        </p>
        </div>
        <div className="copy-right">
          <div className="container">
            <p>© 2021 Bản quyền thuộc về LTE</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
