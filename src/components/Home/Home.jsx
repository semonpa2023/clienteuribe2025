import "./Home.css"
import { RegistroProveedor } from "../RegistroProveedor/RegistroProveedor"
export function Home(){

    return(

        <>

            <section className="banner">

            </section>

            

            <section className="container-my-5 text-center">
                <section className="row">
                    <div className="col-12 col-md-6">
                        <h3>ProveedorAPP</h3>
                        <img src="../../../src/assets/robot.jpg" alt="foto" className="img-fluid
                        "/>
                    </div>
                    <div className="col-12 col-md-6 align-self-center shadow p-5">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi deleniti accusantium quas non vel veritatis tempore quia exercitationem architecto explicabo debitis ipsa quo consequatur earum id, ipsum cum perferendis possimus laboriosam. Veniam quo, cumque sint enim, asperiores a nobis magnam rem iste impedit fugiat quae praesentium, consequatur quisquam fugit.</p>
                    </div>
                </section>
            </section>

            <section className="container my-5" >
                <div className="row">
                    <div className="col-6 tex-center"></div>
                    <h3>Registrate como proveedor</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque excepturi saepe rerum ipsa perferendis. Provident maiores possimus obcaecati quae odit deleniti iste, accusantium laudantium a cumque tenetur eius molestiae qui.</p>
                    <RegistroProveedor></RegistroProveedor>
                </div>
            </section>
            
        </>
    )

}