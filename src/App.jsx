import Footer from "./Footer/Footer.jsx";
import photo1 from "./assets/img.png"
import pringga from './assets/brand.png';
import Navbar from "./Navbar/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    return (
        <div className="main-page">

            <Navbar logo={pringga}/>
            <p className="top-text"> Lorem Ipsum sit Dolot Amet!</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={photo1} height="300" width="300"/>
                    </div>
                    <div className="col-md-8">
                        <h2> Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex molestias quibusdam
                            repellat repellendus. A accusamus, doloribus exercitationem iste iure maiores minima nam
                            nemo perferendis possimus qui temporibus vel velit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam explicabo illum magni quod
                            rerum. Cum dicta dolor, eaque eius inventore ipsam ipsum laboriosam molestias placeat quam
                            quia similique vitae voluptatibus?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet cumque deserunt
                            dolore eius et eveniet fugiat illum in ipsam iste minima, molestiae molestias pariatur
                            placeat quod recusandae sequi tempore?</p>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2> Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto dicta
                            dolores enim facilis, fugit illo in magni minima numquam ratione saepe sequi similique
                            soluta, tempora vel vitae. Facilis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto dicta
                            dolores enim facilis, fugit illo in magni minima numquam ratione saepe sequi similique
                            soluta, tempora vel vitae. Facilis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto dicta
                            dolores enim facilis, fugit illo in magni minima numquam ratione saepe sequi similique
                            soluta, tempora vel vitae. Facilis!</p>
                    </div>
                    <div className="col-md-4 col-image">
                        <img src={photo1} height="300" width="300"/>
                    </div>
                </div>
            </div>
            <br/>
            <Footer/>
        </div>
    );
}

export default App
