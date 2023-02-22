import AddItem from "../components/AddItem";
import Gallery from "../components/Gallery";
import LightBox from "../components/Lightbox";

const Home =()=>{
    return(<>
        <main>
            <div className="container">
                <Gallery />
                <AddItem />
            </div>
        </main>
    </>
    )
}

export default Home;