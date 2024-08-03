import Footer from "./Footer/Footer.jsx";
import photo1 from "./assets/img_1.png";
import photo2 from "./assets/img_2.png";
import brandImg from './assets/brand.png';
import Navbar from "./Navbar/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    return (
        <div>
            <Navbar logo={brandImg}/>
            <div className="header">
                <p className="top-text"> Welcome to my Personal Page!</p>
                <p className="top-text2"> I have no idea what quote to put here, so i'll just put a "Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Ad aliquam dicta distinctio inventore magnam magni
                    obcaecati, perspiciatis possimus quia repellat." instead!</p>
            </div>

            <div id="body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={photo1} height="350" width="350"/>
                        </div>
                        <div className="col-md-8">
                            <h2> Personal Life </h2> <hr/>
                            <p className="paragraph"> My full name is Rayhan Kimi Nabiel Athallah, you can just call me
                                "Rayhan" or "Kimi"
                                instead! I was Born in Denpasar, Bali on 25 July 2003. I'm 21 years old, studying at
                                Udayana University at Electrical Engineering major. To be exact, I study Electronics
                                Engineering. I'm the only child of my parents and i live in Jimbaran right now.</p>
                            <br/>
                            <p className="paragraph"> I'm not sure what hobby do i have, since tinkering with
                                electronics component is my
                                hobby and at the same time i studying about it in university (is that still count as my
                                current hobby? :/ ). But anyway i also love hearing musics! My favorite genres are
                                Shibuya-Kei, Indonesian Jazz, and Shoegaze Music.</p>
                            <p className="paragraph"></p>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2> Skills </h2> <hr/>
                            <p className="paragraph"> During my college, i found interest in programming. My first
                                language is C and i use it mostly to code microcontrollers device, especially ESP32
                                Board. Lately i found programming in Python tend to be more interesting. Now, i use
                                Python in most of project, such as MicroPython, TensorFlow, Django REST, Pandas, and
                                Numpy </p> <br/>
                            <p className="paragraph"> Beside Python, i also have good understanding in JavaScript with
                                ReactJS. I also know
                                little about HTML and CSS using Bootstrap. I also want to learn TypeScript in
                                future.</p> <br/>
                            <p className="paragraph"> And last thing, i excel at microcontrollers device especially
                                ESP32 and Raspberry Pi. I know how to design small-scale PCB and code in Arduino, but
                                lately i spent lot of time coding in Micropython. I
                                worked on many Internet of Things (IoT) projects using
                                Firebase API and self-made API using Django Rest as a backend</p>

                        </div>
                        <div className="col-md-4">
                            <img src={photo2} height="350" width="350"/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    );
}

export default App
