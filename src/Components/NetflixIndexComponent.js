import './NetflixIndexComponent.css'
import NetflixHeaderComponent from './NetflixHeader'
import NetflixMainComponent from './NetflixMainComponent'
import NetflixRegisterCompenent from './NetflixRegisterComponent'
import NetflixFooterComponent from './NetflixFooterComponent'
export default function NetflixIndexComponent() {
    return (
        <div className="container-fluid">
            <div className="box">

                <header>
                    <NetflixHeaderComponent />
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMainComponent />
                        <NetflixRegisterCompenent />
                    </main>
                </section>
                <footer className="m-2 p-2">
                    <NetflixFooterComponent/> 
                </footer>

            </div>
        </div>
    )
}