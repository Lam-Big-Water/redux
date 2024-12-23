import { Link } from "react-router-dom";

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome to Repair Store!</h1>
            </header>
            <main>
                <p>Located in Beautiful</p>
                <p>&nbsp;</p>
                <address>
                    Repair Store<br />
                    555 Foo Drive<br/>
                    Foo City, CA 12345<br />
                    <a href="tel:+1555555555">(555) 555-5555</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )

  return content
}

export default Public