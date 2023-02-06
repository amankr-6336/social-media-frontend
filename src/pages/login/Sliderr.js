import { Carousel } from 'antd';
import './Slider.scss'
import back1 from '../../assets/back1.jpg'
import back2 from '../../assets/back2.jpg'
import back3 from '../../assets/back3.jpg'
import back4 from '../../assets/back4.jpg'
import back5 from '../../assets/back5.jpg'
import back6 from '../../assets/back6.jpg'

const contentStyle = {
  // height: '300px',
  color: '#fff',
  // lineHeight: '-160px',
  textAlign: 'center',
  // background: '#364d79',
  width:'100%'
};
const Sliderr= () => (
  <Carousel autoplay={true}>
    <div>
    <img src={back1} alt="" />
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
    <img src={back2} alt="" />
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
    <img src={back3} alt="" />
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
    <img src={back4} alt="" />
      <h3 style={contentStyle}>4</h3>
    </div>
    <div>
    <img src={back5} alt="" />
      <h3 style={contentStyle}>4</h3>
    </div>
    <div>
    <img src={back6} alt="" />
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Sliderr;